import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Vue";
import Horaire from "./Vue/Horaire";
import ForgetPasswoord from "./Vue/Forgetpaddword";
import { Routes } from "react-router-dom/dist/umd/react-router-dom.development";
import SignUp from "./Vue/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div>hiii</div>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/horaire" element={<Horaire />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgetPasswoord />} />
      </Routes>
    </Router>
  );
}

export default App;
