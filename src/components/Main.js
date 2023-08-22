import React, {useState} from "react";
import CountryList from "./CountryList";
import SearchBar from "./SearchBar";
import FilterRegion from "./FilterRegion";

function Main({ countries, setCountries, allCountries, darkMode}) {
  const [error, setError] = useState(false);

  const handleSearch = (event) => {
    if (event.target.value !== "") {
      fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status !== 404) {
            if (error) {
              setError(false);
            }
            setCountries(data);
          } else {
            setError(true);
          }
        });
    }
  };

  const handleFilter = (region) => {
    if (region === "All") {
      setCountries(allCountries);
      return;
    }
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  };
  return (
    <div className='container mt-5'>
      <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3'>
        <SearchBar handleSearch={handleSearch} darkMode={darkMode} />
        <FilterRegion handleFilter={handleFilter} darkMode={darkMode} />
      </div>
      {error ? (
        <p className='fw-bold text-center mx-auto my-5 fs-1'>
          No Country Found!
        </p>
      ) : (
        <CountryList countries={countries} darkMode={darkMode} />
      )}
    </div>
  );
}

export default Main;
