import React from 'react';
import '../how-to.css';

const UploadVideo = () => {
  return (
    <div className="how-to-container">
      <h1 className="how-to-heading">How To Upload A Tutorial Video As A Tutorium Tutor</h1>
      <div>
        <p className="how-to-text">
          <strong>Note:</strong> You are only allowed to upload a tutorial service or video if your tutor profile is verified.
        </p>
        <p className="how-to-text">To upload a tutorial video, follow these steps:</p>
        <ol className="how-to-list">
          <li className="how-to-list-item">On the Home Screen, tap "Upload Tutorial".</li>
          <li className="how-to-list-item">Select "Tutorial Video".</li>
          <li className="how-to-list-item">Enter the necessary details for your tutorial video.</li>
          <li className="how-to-list-item">
            Upload your video to YouTube. Make sure your video's visibility is set to "Unlisted". This ensures no one can access your video except those who purchase it on Tutorium.
          </li>
          <li className="how-to-list-item">Copy the video link after it has been successfully uploaded to YouTube.</li>
          <li className="how-to-list-item">Paste the video link inside the "Video Link" field.</li>
          <li className="how-to-list-item">Tap "Upload Video".</li>
          <li className="how-to-list-item">
            If everything goes through successfully, your tutorial video will be available for all students to access.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default UploadVideo;
