import React from "react";
import "./Menubar.css";
import { assets } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";

const Menubar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img
            src={assets.logo}
            alt=""
            className="mx-4"
            height={48}
            width={48}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contant us
                </a>
              </li>
            </ul>
            <div className="d-flex align-items gap-4">
              <div className="position-relative">
                <img
                  src={assets.cart}
                  alt=""
                  height={30}
                  width={30}
                  className="position-relative"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning m-1">4</span>
              </div>
              <button className="btn btn-outline-primary">Login</button>
              <button className="btn btn-outline-primary">Register</button>
            </div>
          </div>                                                                                                                                                                                                                                                                                   
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
