import Logo from "../images/logo3.jpg";
import '../css/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navcontainer row">
      <img className="col-3 px-0" src={Logo} height="80"/>
      <nav className="navbar navbar-expand-lg col-8">
        
        <div className="container-fluid">
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
                <Link to="/" className="nav-link active text-light" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/"
                  className="nav-link dropdown-toggle text-light"
                
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/StandardModels" className="dropdown-item">
                      Standard Models
                    </Link>
                  </li>
                  <li>
                    <Link to="/CustomBuilds" className="dropdown-item">
                      Custom Builds
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link text-light">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/OurProjects" className="nav-link text-light">
                  Our Projects
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link text-light">Contact Us</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
