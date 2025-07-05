import React from "react";

const Menubar = ({ toogleSidebar }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <button
            className="btn btn-primary"
            id="sidebarToggle"
            onClick={toogleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
