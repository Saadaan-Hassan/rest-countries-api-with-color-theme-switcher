import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [allCountries, setAllCountries] = React.useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setAllCountries(data);
      });
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Header handleDarkMode={setDarkMode} darkMode={darkMode} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Main
                countries={countries}
                setCountries={setCountries}
                allCountries={allCountries}
                darkMode={darkMode}
              />
            }
          />

          <Route
            path='/:country'
            exact
            element={
              <CountryDetails countries={allCountries} darkMode={darkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
