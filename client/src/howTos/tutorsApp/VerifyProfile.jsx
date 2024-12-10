import React from 'react';
import '../how-to.css';

const VerifyProfile = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Verify Your Tutorial Profile As A Tutor</h1>
      <div>
        <p className="how-to-text">
          To ensure you’re a legitimate student of your university and have the credibility to offer your services on our platform as a tutor, it’s necessary to verify your profile.
        </p>
        <p className="how-to-text">To verify your profile, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">
            After creating a Tutorium tutor account, send us an email at{' '}
            <a href="mailto:app.tutorium@gmail.com" className="how-to-link">
              app.tutorium@gmail.com
            </a>.
          </li>
          <li className="how-to-list-item">
            The email should include the following:
            <ol className="how-to-list sublist-roman">
              <li className="how-to-list-item">Your full name and email.</li>
              <li className="how-to-list-item">
                A short biography about yourself, what you do, and the kind of service you want to offer on Tutorium.
              </li>
              <li className="how-to-list-item">
                A proof of admission at your university (e.g., student ID or admission letter).
              </li>
              <li className="how-to-list-item">
                Your resume showcasing experience in the field you want to render services for on Tutorium.
              </li>
            </ol>
          </li>
          <li className="how-to-list-item">
            Once these details and documents are sent via email, the Tutorium admins will review them and verify your account if your profile meets our criteria.
          </li>
          <li className="how-to-list-item">
            After verification, you’ll be able to upload tutorial services and videos.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default VerifyProfile;
