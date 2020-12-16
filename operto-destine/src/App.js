import React, { Component } from "react";
import NoResults from "./components/NoResults";

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
    searchResults: [],
    noResults: false,
  };

  searchDestination = (e) => {
    e.preventDefault();

    const destinationText = e.target.destinationInput.value;
    const rangeMin = e.target.rangeMin.value;
    const rangeMax = e.target.rangeMax.value;

    const findCountry = this.state.countries.find(
      (country) => country.name.toLowerCase() === destinationText
    );
    // console.log("findCountry", findCountry);

    // error handling for no results in location
    if (typeof findCountry == "undefined") {
      this.setState({
        noResults: true,
      });
      return;
    }
    this.setState({ noResults: false });

    const nearCities = findCountry.cities;
    const withinPriceRange = nearCities.filter(
      (range) => range.price >= rangeMin && range.price <= rangeMax
    );
    // console.log("withinPriceRange", withinPriceRange);

    // error handling for no results within price range
    if (withinPriceRange.length === 0) {
      this.setState({
        noResults: true,
      });
      return;
    }

    e.target.reset();
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <form className="header_form" onSubmit={this.searchDestination}>
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
        {!this.state.noResults ? <></> : <NoResults />}
      </div>
    );
  }
}

export default App;
