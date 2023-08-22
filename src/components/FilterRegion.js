import React from "react";

function FilterRegion({ handleFilter, darkMode }) {
  return (
    <div className='dropdown'>
      <button
        className={`btn ${
          darkMode ? "bg-input-dark-mode" : "btn-light"
        }  dropdown-toggle border p-3`}
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
        aria-label='Filter by Region'
      >
        Filter by Region
      </button>
      <ul
        className={`dropdown-menu ${
          darkMode ? "bg-input-dark-mode" : "btn-light"
        }`}
        data-bs-theme={darkMode ? "dark" : "light"}
      >
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("All")}>
            All
          </span>
        </li>
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("Africa")}>
            Africa
          </span>
        </li>
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("America")}>
            America
          </span>
        </li>
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("Asia")}>
            Asia
          </span>
        </li>
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("Europe")}>
            Europe
          </span>
        </li>
        <li>
          <span className='dropdown-item' onClick={() => handleFilter("Oceania")}>
            Oceania
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FilterRegion;
