import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#bfb3a7]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
