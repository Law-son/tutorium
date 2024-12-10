import React from 'react';
import '../how-to.css';

const MakePayment = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Make Payment To Your Tutor</h1>
      <div>
        <p className="how-to-text">After your tutorial service with your tutor is complete, follow these steps to make payment:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">Launch the app.</li>
          <li className="how-to-list-item">Go to settings.</li>
          <li className="how-to-list-item">Tap on "Confirm Payment".</li>
          <li className="how-to-list-item">Select the tutorial service you want to make payment for.</li>
          <li className="how-to-list-item">
            This will launch a QR code scanner. Scan your tutor's QR code for the service they offered you.
          </li>
          <li className="how-to-list-item">
            After scanning, if the QR code is recognized, payment will be made to the tutor.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MakePayment;
