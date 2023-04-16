import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import CreateVolunteeringEvent from "./components/CreateVolunteeringEvent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Create-Account" element={<CreateAccount />} />
        <Route
          path="/Create-Volunteering-Event"
          element={<CreateVolunteeringEvent />}
        />
      </Routes>
    </Router>
  );
};
export default App;
