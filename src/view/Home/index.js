import React, { useEffect, useState } from "react";
import { Buttons, Card, Modal } from "../../components";
import { BsPlusLg } from "react-icons/bs";
import NotFound from "../NotFound";
import { deleteData, getData, postData } from "../../Global/api";
import { Ic_Alert, Ic_Info } from "../../Assets";

export default function Home() {
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState();
  const [viewModal, setViewModal] = useState(false);
  const [viewAlert, setViewAlert] = useState(false);
  const [load, setLoad] = useState(true);

  const handlePostData = async () => {
    try {
      const payload = {
        title: "New Activity",
        email: "rifkiokta105@gmail.com",
        comment: "testing post",
      };
      await postData(payload);
      handleGetData();
    } catch (error) {
      return error;
    }
  };

  const handleGetData = async () => {
    try {
      const { data } = await getData();
      setData(data);
      setLoad(false);
    } catch (error) {
      return error;
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await deleteData(id);
      setViewModal(false);
      handleGetData();
      setViewAlert(true);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    document.title = "To Do List - Dashboard";
    handleGetData();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl" data-cy="activity-title">
          Activity
        </h1>
        <Buttons
          onClick={handlePostData}
          className={"flex justify-between py-3 px-6 bg-primary items-center"}
          data-cy="activity-add-button"
        >
          <BsPlusLg className="mr-3" /> Tambah
        </Buttons>
      </div>
      {load ? (
        <div className="">
          <div className="flex justify-center items-center animate-ping h-80">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            <div className="mt-14 grid grid-cols-4 gap-4">
              {data.map((item) => (
                <Card
                  name={item.title}
                  date={item.date}
                  onDelete={() => {
                    setViewModal(!viewModal);
                    setDataItem(item);
                  }}
                  to={`/detail/${item.id}`}
                  key={item.id}
                />
              ))}
            </div>
          ) : (
            <div className="cursor-pointer" onClick={handlePostData}>
              <NotFound />
            </div>
          )}
        </>
      )}
      <Modal
        footer
        positionFooter={"center"}
        btn_2={"Hapus"}
        btn_1={"Batal"}
        view={viewModal}
        handleSubmit={() => handleDeleteData(dataItem?.id)}
        handleClose={() => setViewModal(!viewModal)}
        data-cy="todo-modal-delete"
      >
        {/*body*/}
        <div className="relative p-1">
          <div className="flex justify-center mb-8" data-cy="modal-delete-icon">
            <img src={Ic_Alert} alt="alert" />
          </div>
          <div data-cy="modal-delete-title">
            <p className="text-lg text-center mb-8">
              Apakah anda yakin menghapus activity{" "}
              <span className="font-bold">“{dataItem?.title}“</span>?
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        width={"sm"}
        view={viewAlert}
        handleClose={() => setViewAlert(!viewAlert)}
      >
        {/*body*/}
        <div className="">
          <div className="flex items-center px-4 mb-1">
            <img
              data-cy="modal-information-icon"
              src={Ic_Info}
              alt="Info"
              className="mr-4"
            />
            <p data-cy="modal-information-title">Activity berhasil dihapus</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
