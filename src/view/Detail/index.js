import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { HiChevronLeft, HiOutlinePencilAlt } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'
import { Buttons, CardV2, Modal } from '../../components'
import { detailData, patchDetailData } from '../../Global/api'
import DetailNotFound from '../NotFound/detailNotFound'


export default function Detail() {
    let params = useParams();
    const [dataDetails, setDataDetails] = useState()
    const [editTitle, setEditTitle] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)

    const handleAddData = async () => {
        setModalAdd(true)
    }


    const handleDetailData = async () => {
        try {
            const { data } = await detailData(params.id)
            setDataDetails(data)
        } catch (error) {
            return error
        }
    }

    const handlePatchData = async () => {
        const payload = {
            title: dataDetails?.title
        }
        try {
            const { data } = await patchDetailData(params.id, payload)
            setEditTitle(!editTitle)
            setDataDetails({
                ...dataDetails,
                data
            })
        } catch (error) {
            return error
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePatchData()
        }
    }

    useEffect(() => {
        if (params.id)
            handleDetailData()
        // eslint-disable-next-line
    }, [params])


    return (
        <>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <Link to={"/"}>
                        <HiChevronLeft size={50} className="mr-10" />
                    </Link>
                    {editTitle ? (
                        <input className='font-black text-4xl p-2 mr-10 border-0 border-b-2 outline-none border-black'
                            value={dataDetails?.title}
                            onChange={(e) => setDataDetails({
                                title: e.target.value
                            })}
                            onKeyDown={handleKeyDown}
                            onBlur={handlePatchData}
                        />
                    ) :
                        (
                            <div className='font-black text-4xl mr-10'>
                                {dataDetails?.title}
                            </div>
                        )}
                    <div className='item-center text-gray-400 cursor-pointer'>
                        <HiOutlinePencilAlt size={20} onClick={() => setEditTitle(!editTitle)} />
                    </div>
                </div>
                <Buttons onClick={() => handleAddData()} className={"flex justify-between items-center"}>
                    <BsPlusLg className='mr-3' /> Tambah
                </Buttons>
            </div>
            {/* <div className='cursor-pointer'>
                <DetailNotFound />
            </div> */}
            <div className='mt-14'>
                <CardV2 />
            </div>
            <Modal headerTitle={"Tambah List Item"} view={modalAdd} handleClose={() => setModalAdd(!modalAdd)}>
                {/*body*/}
                <div>
                    <DetailNotFound />
                </div>
            </Modal>
        </>
    )
}
