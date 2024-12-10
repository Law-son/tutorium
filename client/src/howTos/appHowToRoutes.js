import React from 'react';
import BookService from "./studentsApp/BookService";
import BecomeTutor from "./studentsApp/BecomeTutor";
import MakePayment from "./studentsApp/MakePayment";
import PurchaseVideo from "./studentsApp/PurchaseVideo";
import TutorialRequest from "./studentsApp/TutorialRequest";
import TakePayment from "./tutorsApp/TakePayment";
import UploadService from "./tutorsApp/UploadService";
import UploadVideo from "./tutorsApp/UploadVideo";
import VerifyProfile from "./tutorsApp/VerifyProfile";

// routes.js
const howToRoutes = [
  {
    path: "/how-to/become-tutor",
    element: React.createElement(BecomeTutor),
  },
  {
    path: "/how-to/make-payment",
    element: React.createElement(MakePayment),
  },
  {
    path: "/how-to/book-service",
    element: React.createElement(BookService),
  },
  {
    path: "/how-to/tutorial-request",
    element: React.createElement(TutorialRequest),
  },
  {
    path: "/how-to/purchase-video",
    element: React.createElement(PurchaseVideo),
  },
  {
    path: "/how-to/upload-service",
    element: React.createElement(UploadService),
  },
  {
    path: "/how-to/verify-profile",
    element: React.createElement(VerifyProfile),
  },
  {
    path: "/how-to/take-payment",
    element: React.createElement(TakePayment),
  },
  {
    path: "/how-to/upload-video",
    element: React.createElement(UploadVideo),
  },
];

export default howToRoutes;
