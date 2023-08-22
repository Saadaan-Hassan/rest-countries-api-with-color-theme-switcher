import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

function Header({ handleDarkMode, darkMode }) {
  return (
    <header className={`shadow p-3 ${darkMode && "bg-input-dark-mode"}`}>
      <div className='container d-flex align-items-center justify-content-between'>
        <h1 className='fw-bold m-0'>Where in the world?</h1>
        <button
          className={`btn border-0 p-0 ${
            darkMode ? "bg-input-dark-mode" : "btn-transparent"
          } `}
          onClick={() => {
            handleDarkMode(!darkMode);
          }}
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : farMoon} /> Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
