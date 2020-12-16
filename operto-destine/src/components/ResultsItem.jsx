import React from "react";

const ResultsItem = ({ locationData }) => {
  const { name, price, key } = locationData;

  return (
    <div key={key} className="resultsItem__container">
      <div className="resultsItem__heading">
        <h3 className="resultsItem__title">{name}</h3>
        <p className="resultsItem__title">{price}</p>
      </div>
      <p className="resultsItem__description">
        The city of {name} was built amidst the ivory fields of snow and is
        truly a fully modernized metropolis. Its charm is matched by the
        backdrop of pristine skies which have helped shape the city to what it
        is today.
      </p>
    </div>
  );
};

export default ResultsItem;
