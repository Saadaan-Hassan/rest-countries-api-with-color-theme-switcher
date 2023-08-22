import React from "react";
import Country from "./Country";
import { Link } from "react-router-dom";

function CountryList({ countries, darkMode }) {
  return (
    <div className='row row-cols-auto px-2 justify-content-center justify-content-md-between'>
      {countries.map((country) => {
        return (
          <Link to={`/${country.cca3}`} className='text-decoration-none' key={country.cca3}>
            <Country
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={
                country.capital !== undefined ? country.capital.at(-1) : "N/A"
              }
              darkMode={darkMode}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default CountryList;
