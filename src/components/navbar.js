import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({
    title = "Set Title Here",
    aboutText = "About Us",
    mode = "light",
    handleDarkMode,
}) {
    const navStyles = {
        light: {
            backgroundColor: "#f8f9fa",
            color: "black",
        },
        dark: {
            backgroundColor: "#042743",
            color: "white",
        },
    };
    const currentStyle = navStyles[mode] || navStyles.light;

    return (
        <div>
               <nav className="navbar navbar-expand-lg" style={currentStyle}>
  <div className="container-fluid">
    <span className="navbar-brand" style={{color: currentStyle.color}}>{title}</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color: currentStyle.color}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color: currentStyle.color}}>{aboutText}</Link>
        </li>
          </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="darkModeSwitch"
    checked={mode === "dark"}
    onChange={handleDarkMode}
  />
  <label className="form-check-label" htmlFor="darkModeSwitch">
     Enable Dark Mode
  </label>
</div>
    </div>
  </div>
</nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    mode: PropTypes.string,
    handleDarkMode: PropTypes.func,
};
