import React from "react";

interface IProps {
  children: React.ReactNode | React.ReactElement;
  htmlFor: string;
  label: string;
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
}

const Modal = ({
  children,
  htmlFor,
  label,
  modalOpen,
  setModalOpen,
}: IProps) => {
  return (
    <>
      <label
        onClick={() => setModalOpen(true)}
        htmlFor={htmlFor}
        className="btn mt-4"
      >
        {label}
      </label>

      {modalOpen && (
        <>
          <input type="checkbox" id={htmlFor} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="modal-action">
                <label
                  htmlFor={htmlFor}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg font-normal"
                >
                  x
                </label>
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
