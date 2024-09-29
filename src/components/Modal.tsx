import React from "react";

const Modal = ({
  onClose,
  title,
  content,
}: {
  onClose: () => void;
  title: string;
  content: string;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-10 w-96 relative overflow-visible">
        <button
          onClick={onClose}
          className="absolute top-2 -right-10 sm:-right-11  bg-black rounded-full w-10 h-10 flex items-center justify-center transition duration-200"
        >
          <span className="text-white text-lg">X</span>
        </button>
        <h2 className="text-lg bold mb-4 text-black">{title}</h2>
        <p className="mb-4 text-black">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
