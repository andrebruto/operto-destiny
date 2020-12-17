import React, { Component } from "react";
import SearchResults from "./components/SearchResults";
import NoResults from "./components/NoResults";

// RESTARTED WORK FOR THE FINAL 2H

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
      {
        name: "Germany",
        cities: [
          {
            name: "Berlin",
            price: 100,
            id: 10007,
          },
          {
            name: "Bremen",
            price: 200,
            id: 10008,
          },
          {
            name: "Munich",
            price: 300,
            id: 10009,
          },
        ],
      },
      {
        name: "Spain",
        cities: [
          {
            name: "Barcelona",
            price: 100,
            id: 10010,
          },
          {
            name: "Madrid",
            price: 200,
            id: 10011,
          },
          {
            name: "Seville",
            price: 300,
            id: 10012,
          },
        ],
      },
      {
        name: "France",
        cities: [
          {
            name: "Paris",
            price: 100,
            id: 10013,
          },
          {
            name: "Bordeaux",
            price: 200,
            id: 10014,
          },
          {
            name: "Lyon",
            price: 300,
            id: 10015,
          },
        ],
      },
      {
        name: "Portugal",
        cities: [
          {
            name: "Lisbon",
            price: 100,
            id: 10016,
          },
          {
            name: "Porto",
            price: 200,
            id: 10017,
          },
          {
            name: "Coimbra",
            price: 300,
            id: 10018,
          },
        ],
      },
      {
        name: "Mexico",
        cities: [
          {
            name: "Cancun",
            price: 100,
            id: 10019,
          },
          {
            name: "Mexico City",
            price: 200,
            id: 10020,
          },
          {
            name: "Guadalajara",
            price: 300,
            id: 10021,
          },
        ],
      },
      {
        name: "America",
        cities: [
          {
            name: "Seattle",
            price: 100,
            id: 10022,
          },
          {
            name: "Chicago",
            price: 200,
            id: 10023,
          },
          {
            name: "Boston",
            price: 300,
            id: 10024,
          },
        ],
      },
      {
        name: "England",
        cities: [
          {
            name: "London",
            price: 100,
            id: 10025,
          },
          {
            name: "Manchester",
            price: 200,
            id: 10026,
          },
          {
            name: "Liverpool",
            price: 300,
            id: 10027,
          },
        ],
      },
      {
        name: "Japan",
        cities: [
          {
            name: "Tokyo",
            price: 100,
            id: 10028,
          },
          {
            name: "Osaka",
            price: 200,
            id: 10029,
          },
          {
            name: "Kyoto",
            price: 300,
            id: 10030,
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
    e.target.reset();
    // error handling for no results within price range
    if (withinPriceRange.length === 0) {
      this.setState({
        noResults: true,
      });
      return;
    }

    this.setState({
      searchResults: withinPriceRange,
    });
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
        <SearchResults locations={this.state.searchResults} />
        {!this.state.noResults ? <></> : <NoResults />}
      </div>
    );
  }
}

export default App;
