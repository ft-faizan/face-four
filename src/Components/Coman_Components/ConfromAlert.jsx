
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


function ConfirmAlert({
  isOpen,
  title = "Are you sure?",
  message = "Do you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  const modalRef = useRef(null);

  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onCancel();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onCancel]);

 
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onCancel();
    }
  };

  if (!isOpen) return null;

  return createPortal(
  <div
    onClick={handleBackdropClick}
    className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[1000] p-4"
  >
    <div
      ref={modalRef}
      className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 transform transition-all duration-300 scale-100"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {message}
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200"
        >
          {cancelText}
        </button>

        <button
          onClick={onConfirm}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:opacity-90 transition duration-200 shadow-md"
        >
          {confirmText}
        </button>
      </div>
    </div>
  </div>,
  document.body
);

}

export default ConfirmAlert;
