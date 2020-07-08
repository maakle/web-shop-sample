import React, { useState } from "react";

const Checkout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const coverClass = modalOpen
    ? "modal-cover modal-cover-active"
    : "modal-cover";
  const containerClass = modalOpen
    ? "modal-container modal-container-active"
    : "modal-container";

  return (
    <div>
      <button className="checkout-button" onClick={modalToggle}>
        Checkout
      </button>

      <div className={containerClass}>
        <div className="modal-header">
          <h6>Verification Necessary</h6>
        </div>
        <div className="modal-body">
          <p>Test</p>
        </div>
        <div className="modal-footer" />
      </div>

      <div className={coverClass} onClick={modalToggle} />
    </div>
  );
};

export default Checkout;
