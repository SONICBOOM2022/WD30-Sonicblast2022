import "../css/Footer.css";
import React from "react";

function Footer() {
  return (
    <>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p>Copyright &copy; {new Date().getFullYear()} Your Company</p>
    </>
  );
}

export default Footer;
