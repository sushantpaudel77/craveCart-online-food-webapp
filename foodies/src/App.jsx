import React from "react";
import Menubar from "./components/Menubar/Menubar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact Us/ContactUs";

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
