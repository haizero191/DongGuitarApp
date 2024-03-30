import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./App.scss";
import ContactCircle from "./components/ContactCircle/ContactCircle";

const App = () => {
  const location = useLocation();
  const endpointUrl = location.pathname;
  const [isHeader, setIsHeader] = useState(true);
  const [isRelativeHeader, setIsRelativeHeader] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (endpointUrl === "/about" ) {
      setIsRelativeHeader(true);
    }
    else {
      setIsRelativeHeader(false);
    }

    if (endpointUrl === "/checkout" || endpointUrl === '/thanks' || endpointUrl === '/update' || endpointUrl === '/thanks') {
      setIsHeader(false);
    }
    else {
      setIsHeader(true);
    }
  });



  // Redirect for update mobile UI
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      // navigate("/update");
    }
  }, [navigate]);


  return (
    <div className="App">
      <div className="App-layout">
        <div className={"app-header " + (isRelativeHeader ? "app-header-relative" : "")}>
          {isHeader ? <Header /> : <></>}
        </div>
        <div className={(isHeader ? "app-main " : "app-main-full-screen ") + (!isRelativeHeader ? "main-padding" : "")} >
          <AppRoutes />
        </div>
        <div className="app-footer">
          {isHeader ? <Footer /> : <></>}
        </div>

        <div className="contact-circle">
            <ContactCircle />
        </div>
      </div>
    </div>
  );
};

export default App;
