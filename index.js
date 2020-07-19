import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import axios from "axios";
import Restaurants from "./Restaurants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: null,
      loading: false
    };
    //this.getRestaurants.bind(this);
  }

  getRestaurants() {
    this.setState({ loading: true });
    return axios
      .get("https://pizzariameurancho.com.br/wp-json/mrp/v1/stores")
      .then(response => {
        console.log(response);
        this.setState({
          stores: response.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    const { stores, loading } = this.state;
    return (
      <div>
        <h1>swr</h1>
        <p>
          <code>Testing: mutate()</code>
        </p>
        <Restaurants />
        <button
          onClick={e => {
            e.preventDefault(), this.getRestaurants();
          }}
        >
          Get data
        </button>
        <div style={{ paddingTop: "1rem" }}>
          {stores &&
            stores.map(store => {
              return (
                <p key={store.id}>{store.slug}</p>
              );
            })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
