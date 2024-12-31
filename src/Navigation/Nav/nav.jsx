import React from "react";
import "./nav.css"; // Styles for the navigation

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#reports">Reports</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
