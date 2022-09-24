import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import moment from 'moment'
import 'moment/locale/id';
import { HiOutlinePencilAlt } from 'react-icons/hi';

export default function CardV2({ name, date, onDelete, to }) {
    return (
        <div className="animate-slides bg-white rounded-xl drop-shadow-lg">
            <div className="flex p-5 justify-between items-center">
                <div className='flex items-center'>
                    <input type={"checkbox"} className='mr-4 h-5 w-5 bg-blue-900 ' />
                    <div className='rounded-full bg-blue-800 h-4 w-4 mr-4' />
                    <h1 className="flex items-center mr-4">
                        {moment(date).format('Do MMMM YYYY')}
                    </h1>
                    <div className='item-center text-gray-400 cursor-pointer'>
                        <HiOutlinePencilAlt size={15} />
                    </div>
                </div>
                <p onClick={onDelete} className="flex justify-between items-center cursor-pointer">
                    <RiDeleteBin6Line />
                </p>
            </div>
        </div>
    )
}
