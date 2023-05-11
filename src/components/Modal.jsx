import React from "react";
import "../styles/Modal.css";

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{content.title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{content.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
