import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ handleSearch, darkMode }) {


  return (
    <div className='search input-group mb-5 mb-md-0'>
      <span
        className={`input-group-text p-3 border border-end-0 ${
          darkMode ? "bg-input-dark-mode" : "bg-light"
        }`}
        id='addon-wrapping'
      >
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type='text'
        className={`form-control p-3  border border-start-0 ${
          darkMode ? "bg-input-dark-mode active" : "bg-light"
        }`}
        placeholder='Search for a country...'
        aria-label='Search for a country...'
        aria-describedby='addon-wrapping'
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
