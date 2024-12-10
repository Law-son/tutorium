import React from 'react';
import '../how-to.css';

const TakePayment = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Take Payment As A Tutor On Tutorium</h1>
      <div>
        <p className="how-to-text">To take payment as a tutor, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">On the Home Screen, tap "Receive Payment".</li>
          <li className="how-to-list-item">Select the student you want to take payment from.</li>
          <li className="how-to-list-item">This will generate a QR code for that student.</li>
          <li className="how-to-list-item">
            Let the student scan the QR code to transfer funds into your account.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TakePayment;
