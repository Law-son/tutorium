import React, { Suspense } from "react";
import Navbar from "./components/NavContainer/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/model/ErrorPage";
import ErrorBoundary from "./components/model/ErrorBoundary";
import Home from "./container/pages/Home";
import Perspective from "./components/Pers/Perspective";
import NewsLetter from "./components/Pers/NewsLetter";
import Faq from "./components/Pers/Faq";
import Footer from "./components/Pers/Footer";
import howToRoutes from "./howTos/appHowToRoutes";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import MessagePage from "./pages/MessagePage";

const App = () => {
  const Layout = ({ children }) => {
    return (
      <main className="App">
        <Navbar />
        {/* <Home /> */}
        {children}
        <Perspective />
        <NewsLetter />
        <Faq />
        <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <Layout children={<Home />} />,
      errorElement: ({ error }) => (
        <div>
          <h2>An error occurred: {error.message}</h2>
          <button>
            <Link to={"/"}>Return Home</Link>
          </button>
        </div>
      ),
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsCondition />,
    },
    {
      path: "/message",
      element: <MessagePage />,
    },
    ...howToRoutes, // Spread the imported routes here
  ]);


  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<h2>Loading</h2>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
