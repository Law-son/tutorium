import React from 'react';
import '../how-to.css';

const PurchaseVideo = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Purchase A Tutorial Video</h1>
      <div>
        <p className="how-to-text">To purchase a tutorial video, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">Select the video you want to purchase.</li>
          <li className="how-to-list-item">Tap the "Purchase Video" button.</li>
          <li className="how-to-list-item">Enter your Mobile Money number to make payment.</li>
          <li className="how-to-list-item">Tap the "Make Payment" button.</li>
          <li className="how-to-list-item">
            This will launch our payment gateway in your browser. Confirm your number and then finalize the payment by entering your Mobile Money Pin.
          </li>
          <li className="how-to-list-item">Confirm from your email whether the payment went through.</li>
          <li className="how-to-list-item">
            After a successful payment, you'll be given full access to the tutorial video.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PurchaseVideo;
