import React from 'react';
import '../how-to.css';

const UploadService = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Upload A Tutorial Service As A Tutorium Tutor</h1>
      <div>
        <p className="how-to-text">
          <strong>Note:</strong> You are only allowed to upload a tutorial service or video if your tutor profile is verified.
        </p>
        <p className="how-to-text">To upload a tutorial service, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">On the Home Screen, tap "Upload Tutorial".</li>
          <li className="how-to-list-item">Select "Tutorial Service".</li>
          <li className="how-to-list-item">Enter the necessary details for your tutorial service.</li>
          <li className="how-to-list-item">Tap "Upload Service".</li>
          <li className="how-to-list-item">
            If everything goes through successfully, your tutorial service will be available for all students to access.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default UploadService;
