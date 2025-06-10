import React from "react";
import { createPortal } from "react-dom";
const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="bg-white border w-[300px] min-h-[200px] absolute top-35 left-[50%] translate-x-[-50%] mx-auto z-50 p-4 ">
            <div>{children}</div>
            <div className="absolute top-0 right-2 w-5 h-5 flex items-center justify-center p-0 rounded-full text-2xl ">
              <button onClick={onClose} className="cursor-pointer p-0">
                &times;
              </button>
            </div>
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur  z-40 h-screen w-full absolute top-0 left-0"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
