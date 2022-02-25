import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/Email/MainContent/Mail";
import EmailList from "./Components/Email/EmailList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
