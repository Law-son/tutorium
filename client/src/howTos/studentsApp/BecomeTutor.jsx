import React from 'react';
import '../how-to.css';

const BecomeTutor = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Become a Tutor on Tutorium</h1>
      <div>
        <p className="how-to-text">Follow these steps to become a tutor on Tutorium:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">
            Download the Tutorium Tutor's app: Get the app from Play Store to get started.
          </li>
          <li className="how-to-list-item">
            Register as a tutor: Sign up on the app with your details.
          </li>
          <li className="how-to-list-item">
            Submit the necessary details/documents: Provide the required documents to verify your profile. <br/>
            <a href="/how-to/verify-profile" className="how-to-link">
              {' '}How to Verify Your Profile as a Tutor
            </a>
          </li>
          <li className="how-to-list-item">
            Get verified: Once your documents are approved, you’ll officially have a Tutorium tutor account.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BecomeTutor;
