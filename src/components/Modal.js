import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({
  headerTitle,
  children,
  positionFooter,
  width,
  view,
  handleClose,
  handleSubmit,
  handleSubmit_btn3,
  btn_1,
  btn_2,
  btn_3,
  data_cy,
}) {
  return (
    <div data-cy={data_cy}>
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
                <Dialog.Panel
                  className={`w-full ${
                    width ? `max-w-${width}` : `max-w-lg`
                  } transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all`}
                >
                  {headerTitle && (
                    <div className="flex flex-col justify-center">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-bold leading-6 text-gray-900 mb-5"
                      >
                        {headerTitle}
                      </Dialog.Title>
                      <div className="border-b-2 w-full" />
                    </div>
                  )}
                  <div className="mt-2">
                    <span className="text-sm">{children}</span>
                  </div>

                  <div
                    className={`flex items-center ${
                      positionFooter
                        ? `justify-${positionFooter}`
                        : `justify-end`
                    }`}
                  >
                    {btn_1 && (
                      <button
                        data-cy="modal-delete-cancel-button"
                        className="bg-secondary font-medium text-md rounded-3xl px-14 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClose}
                      >
                        {btn_1}
                      </button>
                    )}
                    {btn_2 && (
                      <button
                        data-cy="modal-delete-confirm-button"
                        className="bg-danger text-white active:bg-red-600 font-bold text-md px-14 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit}
                      >
                        {btn_2}
                      </button>
                    )}
                    {btn_3 && (
                      <button
                        data-cy="modal-add-save-button"
                        className="bg-primary text-white active:bg-primary font-bold text-md px-14 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit_btn3}
                      >
                        {btn_3}
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
