import React from "react";

const ResultsItem = ({ locationData }) => {
  const { name, price, key } = locationData;

  return (
    <div key={key}>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <p>
        The city of {name} was built amidst the ivory fields of snow and is
        truly a fully modernized metropolis. Its charm is matched by the
        backdrop of pristine skies which have helped shape the city to what it
        is today.
      </p>
    </div>
  );
};

export default ResultsItem;
