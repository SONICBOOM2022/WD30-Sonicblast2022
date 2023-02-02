import React, { useState } from "react";
import logo from "../images/logo3.jpg";


function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="200" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarOpen(!isNavbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" role="button">
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Another action
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Our Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
