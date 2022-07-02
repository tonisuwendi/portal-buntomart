import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

export default function Modal({
  children,
  show,
  onClose,
  title,
  cancelTextButton = "Batal",
  confirmTextButton,
  confirmIconButton,
  confirmActionButton,
  isLoading,
  confirmButtonDisabled = false,
}) {
  const cancelButtonRef = useRef(null);

  const closeHandler = () => {
    onClose();
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-slate-500 bg-opacity-70 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <Dialog.Title
                  as="h3"
                  className="text-xl pb-4 leading-6 tracking-wide font-medium text-slate-800"
                >
                  {title}
                </Dialog.Title>
                <hr />
                <div className="mt-4 mb-2 tracking-wide">{children}</div>
              </div>
              <div className="bg-gray-50 border-t px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-x-3">
                {confirmTextButton && (
                  <Button
                    title={confirmTextButton}
                    onClick={confirmActionButton}
                    icon={confirmIconButton}
                    loading={isLoading}
                    disabled={isLoading || confirmButtonDisabled}
                  />
                )}
                {cancelTextButton && (
                  <Button
                    title={cancelTextButton}
                    variant="outline-slate"
                    onClick={closeHandler}
                    disabled={isLoading}
                  />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
