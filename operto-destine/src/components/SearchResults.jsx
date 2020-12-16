import React from "react";
import ResultsItem from "./ResultsItem";

const SearchResults = ({ locations }) => {
  const mapResults = locations.map((location) => (
    <ResultsItem key={location.id} locationData={location} />
  ));

  if (locations.length === 0) {
    return <></>;
  }
  return (
    <div>
      <div>
        <h2>Location</h2>
        <p>Price</p>
      </div>
      <div>{mapResults}</div>
    </div>
  );
};

export default SearchResults;
