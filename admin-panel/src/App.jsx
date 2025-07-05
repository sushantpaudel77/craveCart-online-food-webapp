import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddFood from "./pages/AddFood/AddFood";
import ListFood from "./pages/ListFood/ListFood";
import Sidebar from "./components/Sidebar/Sidebar";
import Menubar from "./components/Menubar/Menubar";
import Orders from "./pages/Orders/Orders";
import { useState } from "react";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toogleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar sidebarVisible={sidebarVisible} />

        <div id="page-content-wrapper">
          <Menubar toogleSidebar={toogleSidebar} />

          <div className="container-fluid">
            <Routes>
              <Route path="/add" element={<AddFood />} />
              <Route path="/list" element={<ListFood />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/" element={<ListFood />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
