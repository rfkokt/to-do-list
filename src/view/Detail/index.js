import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiChevronLeft, HiOutlinePencilAlt } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { ArrowFilter, Ic_Alert } from "../../Assets";
import { Buttons, CardV2, Modal } from "../../components";
import { DetailNotFound } from "../index";
import {
  deleteTodoItems,
  detailData,
  patchDetailData,
  patchTodoItems,
  postTodoItems,
} from "../../Global/api";

export default function Detail() {
  let params = useParams();
  const [dataDetails, setDataDetails] = useState({
    todo_items: [],
  });
  const [editTitle, setEditTitle] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [dataItem, setDataItem] = useState();
  const [valueOption, setValueOption] = useState("very-high");
  const [valueInput, setValueInput] = useState("");
  const [Options] = useState([
    {
      label: "Very High",
      color: "bg-red-500",
      value: "very-high",
    },
    {
      label: "High",
      color: "bg-orange-500",
      value: "high",
    },
    {
      label: "Medium",
      color: "bg-green-500",
      value: "normal",
    },
    {
      label: "Low",
      color: "bg-blue-500",
      value: "low",
    },
    {
      label: "Very Low",
      color: "bg-purple-500",
      value: "very-low",
    },
  ]);

  const handleAddData = async () => {
    setModalAdd(true);
    setValueInput("");
    setValueOption("very-high");
    setDataItem();
  };

  const handleDetailData = async () => {
    try {
      const { data } = await detailData(params.id);
      setDataDetails({
        ...dataDetails,
        ...data,
      });
    } catch (error) {
      return error;
    }
  };
  const handlePatchData = async () => {
    if (dataDetails?.title) {
      const payload = {
        title: dataDetails?.title,
      };
      try {
        const { data } = await patchDetailData(params.id, payload);
        setEditTitle(!editTitle);
        setDataDetails({
          ...dataDetails,
          data,
        });
      } catch (error) {
        return error;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePatchData();
    }
  };

  const handlePostTodo = async () => {
    if (dataItem?.id) {
      handlePatchTodo(
        dataItem.id,
        valueInput,
        valueOption,
        dataItem?.is_active === 0 ? 1 : 0
      );
    } else {
      const payload = {
        title: valueInput,
        activity_group_id: params?.id,
        priority: valueOption,
      };
      try {
        const { data } = await postTodoItems(payload);
        if (data) {
          handleDetailData();
          setModalAdd(false);
        }
      } catch (error) {
        return error;
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const { data } = await deleteTodoItems(id);
      if (data) {
        setViewModal(false);
        handleDetailData();
      }
    } catch (error) {
      return error;
    }
  };

  const handlePatchTodo = async (id, input, option, checked) => {
    const payload = {
      title: input,
      priority: option,
      is_active: checked,
    };
    try {
      const { data } = await patchTodoItems(id, payload);

      if (data) {
        handleDetailData();
        setModalAdd(false);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    document.title = "To Do List - Detail";
    if (params.id) handleDetailData();

    // eslint-disable-next-line
  }, [params]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link to={"/"}>
            <HiChevronLeft size={50} className="mr-10" />
          </Link>
          {editTitle ? (
            <input
              className="font-black text-4xl p-2 mr-10 border-0 border-b-2 outline-none border-black"
              value={dataDetails?.title}
              onChange={(e) =>
                setDataDetails({
                  ...dataDetails,
                  title: e.target.value,
                })
              }
              onKeyDown={handleKeyDown}
              onBlur={handlePatchData}
            />
          ) : (
            <div className="font-black text-4xl mr-10">
              {dataDetails?.title}
            </div>
          )}
          <div className="item-center text-gray-400 cursor-pointer">
            <HiOutlinePencilAlt
              size={20}
              onClick={() => setEditTitle(!editTitle)}
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <Buttons
              className={
                "flex justify-between items-center border-gray-300 border p-3 mr-2"
              }
            >
              <img src={ArrowFilter} alt="filter" />
            </Buttons>
          </div>
          <Buttons
            onClick={() => handleAddData()}
            className={"flex justify-between bg-primary py-3 px-6 items-center"}
          >
            <BsPlusLg className="mr-3" /> Tambah
          </Buttons>
        </div>
      </div>
      {dataDetails?.todo_items.length > 0 ? (
        <div className="mt-14">
          {dataDetails?.todo_items.map((item, index) => (
            <CardV2
              key={item.id}
              color={item.priority}
              title={item.title}
              isChecked={item.is_active === 0 ? true : false}
              onClick={() => {
                handlePatchTodo(
                  item.id,
                  item.title,
                  item.priority,
                  item.is_active === 0 ? 1 : 0
                );
              }}
              onDelete={() => {
                setViewModal(!viewModal);
                setDataItem(item);
              }}
              onEdit={() => {
                setDataItem(item);
                setModalAdd(!viewModal);
                setValueInput(item.title);
                setValueOption(item.priority);
              }}
            />
          ))}
        </div>
      ) : (
        <DetailNotFound
          onClick={() => handleAddData()}
          className="cursor-pointer"
        />
      )}

      {/* Modal Add Data */}
      <Modal
        headerTitle={"Tambah List Item"}
        view={modalAdd}
        handleClose={() => setModalAdd(!modalAdd)}
        btn_3={"Simpan"}
        handleSubmit_btn3={handlePostTodo}
      >
        {/*body*/}
        <div className="py-10">
          <Input
            variant="outlined"
            onChange={(e) => setValueInput(e.target.value)}
            value={valueInput}
            label="NAMA LIST ITEM"
          />
          <div className="w-72 mt-10">
            <Select
              label="Priority"
              animate={{
                mount: { y: 25 },
                unmount: { y: 0 },
              }}
              value={valueOption}
              onChange={(e) => setValueOption(e)}
            >
              {Options.map((item, index) => (
                <Option key={index} value={item.value}>
                  <div className="flex">
                    <div
                      className={`rounded-full ${item.color} h-4 w-4 mr-4`}
                    />
                    {item.label}
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </Modal>
      {/* Modal Alert */}
      <Modal
        footer
        positionFooter={"center"}
        btn_2={"Hapus"}
        btn_1={"Batal"}
        view={viewModal}
        handleSubmit={() => handleDeleteTodo(dataItem?.id)}
        handleClose={() => setViewModal(!viewModal)}
      >
        {/*body*/}
        <div className="relative p-1">
          <div className="flex justify-center mb-8">
            <img src={Ic_Alert} alt="alert" />
          </div>
          <div>
            <p className="text-lg text-center mb-8">
              Apakah anda yakin menghapus activity{" "}
              <span className="font-bold">“{dataItem?.title}“</span>?
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
