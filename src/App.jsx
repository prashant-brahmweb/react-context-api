import { useState } from "react";
import "./App.css";
import Home from "./Component/Home"
import Profile from "./Component/Profile";
import NestedComponent from "./Component/NestedComponent/NestedComponentTwo/NestedComponent"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nested-component" element={<NestedComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
