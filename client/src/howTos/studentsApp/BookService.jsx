import React from 'react';
import '../how-to.css';

const BookService = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Book A Tutorial Service</h1>
      <div>
        <p className="how-to-text">To book a tutorial service, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">Select the tutorial service you want to book.</li>
          <li className="how-to-list-item">Tap the "Book Service" button.</li>
          <li className="how-to-list-item">Enter your Mobile Money number to make payment.</li>
          <li className="how-to-list-item">Tap the "Make Payment" button.</li>
          <li className="how-to-list-item">
            This will launch our payment gateway in your browser. Confirm your number and then finalize the payment by entering your Mobile Money Pin.
          </li>
          <li className="how-to-list-item">Confirm from your email whether the payment went through.</li>
          <li className="how-to-list-item">Tutorium will inform your tutor about the service you booked.</li>
        </ol>
      </div>
    </div>
  );
};

export default BookService;
