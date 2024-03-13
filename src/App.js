import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

const App = () => {
  const location = useLocation();
  const endpointUrl = location.pathname;
  const [isHeader, setIsHeader] = useState(true);

  useEffect(() => {
    if (endpointUrl === "/checkout" || endpointUrl === '/thanks') {
      setIsHeader(false);
    }
    else {
      setIsHeader(true);
    }
  });


  return (
    <div className="App">
      <div className="App-layout">
        <div className="app-header">
          {isHeader ? <Header /> : <></>}
        </div>
        <div className={isHeader ? "app-main" : "app-main-full-screen"}>
          <AppRoutes />
        </div>
        <div className="app-footer">
          {isHeader ? <Footer /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default App;
