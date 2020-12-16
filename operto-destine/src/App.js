import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <form className="header_form">
            <input
              className="header__destination-input"
              type="search"
              name="destinationInput"
              placeholder="add your destination"
            ></input>
            <div>
              <input
                className="header__price-input"
                type="number"
                name="rangeMin"
                placeholder="min"
              ></input>
              <input
                className="header__price-input"
                type="number"
                name="rangeMax"
                placeholder="max"
              ></input>
            </div>
            <button className="header__btn">SEARCH</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
