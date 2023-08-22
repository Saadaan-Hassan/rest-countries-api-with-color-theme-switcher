import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryDetails({ countries, darkMode }) {
  const { country } = useParams();
  const navigate = useNavigate();
  const details = countries.find((c) => c.cca3 === country);
  return (
    <div className='container my-5'>
      <button
        type='button'
        className={`btn ${
          darkMode ? "bg-input-dark-mode" : "btn-light"
        }  border shadow`}
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className='row my-5 country-details'>
        <div className='col-12 col-md-6 pe-md-4'>
          <img
            src={details.flags.png ? details.flags.png : details.flags.svg}
            alt={details.name.common}
            className='img-fluid mb-5 mb-md-0 w-100'
          />
        </div>
        <div className='col-12 col-md-6'>
          <h1 className='text-start fw-bold mb-4'>
            {details.name.common}
          </h1>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p className='fw-semibold'>
                Native Name:{" "}
                <span className='fw-light'>
                  {
                    details.name.nativeName[
                      Object.keys(details.name.nativeName)[0]
                    ].common
                  }
                </span>
              </p>
              <p className='fw-semibold'>
                Population:{" "}
                <span className='fw-light'>{details.population.toLocaleString()}</span>
              </p>
              <p className='fw-semibold'>
                Region: <span className='fw-light'>{details.region}</span>
              </p>
              <p className='fw-semibold'>
                Sub Region:{" "}
                <span className='fw-light'>{details.subregion}</span>
              </p>
              <p className='fw-semibold'>
                Capital:{" "}
                <span className='fw-light'>{details.capital.join(", ")}</span>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <p className='fw-semibold'>
                Top Level Domain:{" "}
                <span className='fw-light'>{details.tld}</span>
              </p>
              <p className='fw-semibold'>
                Currencies:{" "}
                <span className='fw-light'>
                  {Object.keys(details.currencies)[0]}
                </span>
              </p>
              <p className='fw-semibold'>
                Languages:{" "}
                <span className='fw-light'>
                  {Object.values(details.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p className='fw-semibold'>
                Border Countries:{" "}
                {details.borders
                  ? details.borders.map((border) => {
                      return (
                        <button
                          className={`btn btn ${
                            darkMode ? "bg-input-dark-mode" : "btn-light"
                          }  border fw-light mx-1`}
                          key={border}
                          onClick={() => navigate(`/${border}`)}
                        >
                          {border}
                        </button>
                      );
                    })
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
