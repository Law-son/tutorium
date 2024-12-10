import React from 'react';
import '../how-to.css';

const TutorialRequest = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Make A Tutorial Service Request</h1>
      <div>
        <p className="how-to-text">
          Sometimes you might not find the tutorial service you're looking for on our platform. But that doesn't mean we can't find you someone to offer you that service. To request a tutorial service, follow these steps:
        </p>
        <ol className="how-to-list">
          <li className="how-to-list-item">On the app, go to your Profile screen.</li>
          <li className="how-to-list-item">Tap on "Service Request".</li>
          <li className="how-to-list-item">Tap on "Request Service".</li>
          <li className="how-to-list-item">Enter the details for the type of tutorial service you want.</li>
          <li className="how-to-list-item">Tap on the "Request Service" button.</li>
          <li className="how-to-list-item">
            If everything goes through, your service request will be sent to our tutors.
          </li>
          <li className="how-to-list-item">
            Tutors who accept your service request will appear in the "Accepted Requests" screen, where you can make payment and meet your tutor.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TutorialRequest;
