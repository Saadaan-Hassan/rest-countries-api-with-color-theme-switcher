import React from "react";

function Country(props) {
  return (
    <div className='card my-4 mx-2 mx-md-0 p-0 shadow border-0' style={{ width: "15rem" }}>
      <img
        src={props.flag}
        className='card-img-top img-fluid'
        style={{ height: "150px" }}
        alt={props.name}
      />
      <div
        className={`card-body ${
          props.darkMode ? "bg-element-dark-mode" : "bg-element-light-mode"
        } rounded-bottom-1`}
        style={{ height: "13rem" }}
      >
        <h5 className='card-title my-3 fw-bold'>{props.name}</h5>
        <p className='card-text mb-2 fw-semibold'>
          Population: <span className={`${props.darkMode? 'dark-mode-text':'text-muted'} fw-light`}>{props.population.toLocaleString()}</span>
        </p>
        <p className='card-text mb-2 fw-semibold'>
          Region: <span className={`${props.darkMode? 'dark-mode-text':'text-muted'} fw-light`}>{props.region}</span>
        </p>
        <p className='card-text mb-2 fw-semibold'>
          Capital: <span className={`${props.darkMode? 'dark-mode-text':'text-muted'} fw-light`}>{props.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Country;
