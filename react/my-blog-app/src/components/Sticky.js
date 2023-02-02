import React, { useState, useEffect } from "react";

const StickyNavbar = () => {
  const [navbarPosition, setNavbarPosition] = useState("relative");
  const [navbarTop, setNavbarTop] = useState("0");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > navbarTop) {
      setNavbarPosition("fixed");
      setNavbarTop(window.pageYOffset);
    } else {
      setNavbarPosition("relative");
      setNavbarTop("0");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ position: navbarPosition, top: navbarTop }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        {/* ... */}
      </div>
    </nav>
  );
};

export default StickyNavbar;
