import React from 'react';

function Modal({ isOpen, onClose, onProceed, title, message, actionText, cancelText }) {
  if (!isOpen) return null; // If modal is not open, don't render it

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-1/3 max-w-sm">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="mb-6">{message}</p>

        <div className="flex justify-end space-x-4">
          {cancelText && (
            <button
              onClick={onClose} // Trigger onClose to close the modal
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition-all"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={onProceed} // Trigger onProceed to handle confirmation
            className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-all"
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
