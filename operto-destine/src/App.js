import React, { Component } from "react";

class App extends Component {
  state = {
    countries: [
      {
        name: "Canada",
        cities: [
          {
            name: "Vancouver",
            price: 100,
            id: 10001,
          },
          {
            name: "Montreal",
            price: 200,
            id: 10002,
          },
          {
            name: "Toronto",
            price: 300,
            id: 10003,
          },
        ],
      },
      {
        name: "Brazil",
        cities: [
          {
            name: "Recife",
            price: 100,
            id: 10004,
          },
          {
            name: "Rio de Janeiro",
            price: 200,
            id: 10005,
          },
          {
            name: "São Paulo",
            price: 300,
            id: 10006,
          },
        ],
      },
    ],
  };

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
