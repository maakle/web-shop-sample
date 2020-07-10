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
          <h5 className="modal-title">Age verification required</h5>
        </div>
        <div className="modal-body">
          <p>You're probably old enough to place this order but in order to finish the purchase you need to verify your age. Please do so by clicking this button.
          </p>
          <div className="pb-button-wrapper">
            <VerifyButton
              apiKey=
              {"ebb8c2f2c2b27d10a1dfdf1bd0a882455b0f5cfcfd37f2a9020d24cfbe08feaa"}
              onFinished={(error, authKey, additionalAttributes) => {}}
              integrationType={"signup"}
              additionalAttributes={{
                customer_user_id: ""
              }}
              prefillAttributes={{
                email: "",
                country: ""
              }}
              theme={{
                accentColor: "",
                font: ""
              }}
            />
          </div>
        </div>
        <div className="modal-footer" />
      </div>

      <div className={coverClass} onClick={modalToggle} />
    </div>
  );
};

export default Checkout;
