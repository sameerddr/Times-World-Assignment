import React from "react";

function CountryCard({ name, region, flag }) {
  return (
    <>
      <div className="data" key={name}>
        <div className="container">
          <img src={flag} alt={name} className="image" />
          <div className="detail">
            <h6>{name}</h6>
            <h5>{region}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
