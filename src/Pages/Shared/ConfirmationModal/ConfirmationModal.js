import React from "react";

const ConfirmationModal = ({title, message, closeModal, successAction, modalData}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="text-black modal-box">
          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <p className="py-4">
           {message}
          </p>
          <div className="modal-action">
            <label onClick={closeModal} htmlFor="confirmation-modal" className="text-white btn btn-success">
              Cancel
            </label>
            <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="text-white btn btn-error">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
