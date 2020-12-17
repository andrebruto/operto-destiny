import React from "react";
import CompassIcon from "../assets/icons/compass-regular.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img
        className="loading__icon"
        src={CompassIcon}
        alt="Compass Icon rotating"
      />
      <h2 className="loading__title">LOADING</h2>
    </div>
  );
};

export default Loading;
