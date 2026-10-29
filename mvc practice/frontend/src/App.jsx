import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
