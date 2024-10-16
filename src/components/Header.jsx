import React from "react";
import cv_boonruksa from "../assets/download/CV_BOONRUKSA.pdf";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += "responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Boonruksa</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link active-link">
              About
            </a>
          </li>
        </ul>
        <li className="nav-list">
          <a href="#project" className="nav-link active-link">
            Project
          </a>
        </li>
        <li className="nav-list">
          <a href="#contect" className="nav-link active-link">
            Contact
          </a>
        </li>
      </div>
      <div className="nav-button">
        <a href={cv_boonruksa} target="_blank">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </a>
      </div>
      <div className="nev-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
