import React from "react";
import "./Header.css";

const scrollUp = () => {
  window.scroll(0, 0);
};

const Navbar = () => {
  return (
    <div>
      <span onClick={scrollUp} className="header">
        🎬 Entertainment Hub 🎥
      </span>
      <image></image>
    </div>
  );
};

export default Navbar;
