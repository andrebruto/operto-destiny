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
    <div className="searchResults">
      <div className="searchResults__heading">
        <h2 className="searchResults__title">Location</h2>
        <p className="searchResults__title">Price</p>
      </div>
      {mapResults}
    </div>
  );
};

export default SearchResults;
