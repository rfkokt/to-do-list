import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function Modal({ headerTitle, children, positionFooter, width, view, handleClose, handleSubmit, btn_1, btn_2 }) {
    return (
        <Transition appear show={view} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`w-full ${width ? `max-w-${width}` : `max-w-lg`} transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all`}>
                                {headerTitle && (
                                    <div className='flex flex-col justify-center'>

                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 mb-5"
                                        >
                                            {headerTitle}

                                        </Dialog.Title>
                                        <div className='border-b-2 w-full' />
                                    </div>
                                )}
                                <div className="mt-2">

                                    <p className="text-sm">
                                        {children}
                                    </p>
                                </div>

                                <div className={`flex items-center ${positionFooter ? `justify-${positionFooter}` : `justify-end`}`}>
                                    {btn_1 && (
                                        <button
                                            className="bg-secondary font-medium text-md rounded-3xl px-14 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleClose}
                                        >
                                            {btn_1}
                                        </button>
                                    )}
                                    {btn_2 && (
                                        <button
                                            className="bg-danger text-white active:bg-red-600 font-bold text-md px-14 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleSubmit}
                                        >
                                            {btn_2}
                                        </button>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}