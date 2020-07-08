import React, { useState } from "react";
import VerifyButton from "@passbase/button/react";

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
          <VerifyButton
        apiKey={"YOUR_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        integrationType={"signup"}
        additionalAttributes={{
          customer_user_id: "SOME_USER_ID"
        }}
        prefillAttributes={{
          email: "",
          country: "en"
        }}
        theme={{
          accentColor: "",
          font: "Arial"
        }}
      />
        </div>
        <div className="modal-footer" />
      </div>

      <div className={coverClass} onClick={modalToggle} />
    </div>
  );
};

export default Checkout;
