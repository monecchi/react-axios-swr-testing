import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";
import axios from "axios";
import Restaurants from "./Restaurants";

export const App = () => {
  const [appState, setAppState] = useState({
    stores: null,
    loading: false
  });

  const getRestaurants = async () => {
    setAppState({ loading: true });
    return axios
      .get("https://pizzariameurancho.com.br/wp-json/mrp/v1/stores")
      .then(response => {
        console.log(response);
        setAppState({
          stores: response.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, [setAppState]);

  const { stores, loading } = appState;
  return (
    <div>
      <h1>swr</h1>
      <p>
        <code>Testing: mutate()</code>
      </p>
      <Restaurants />
      <button
        onClick={e => {
          e.preventDefault(), getRestaurants();
        }}
      >
        Get data
      </button>
      <div style={{ paddingTop: "1rem" }}>
        {loading && <p>Loading...</p>}
        <ul className="stores-list">
        {stores &&
          stores.map((store, index) => {
            let city = store.slug;
            let aberto = store[city].is_open;
            return (
                            
              <li key={store.id}>
                {store.slug}
                <span>Aberto: { aberto == 1 ? "SIM" : "NÃO" }</span>
              </li>
              
            );
          })}
          </ul>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
