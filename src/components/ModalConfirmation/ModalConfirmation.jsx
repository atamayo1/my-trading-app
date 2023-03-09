import React from 'react';

const ModalConfirmation = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button onClick={onConfirm}>Confirmar</button>
            <button onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalConfirmation;
