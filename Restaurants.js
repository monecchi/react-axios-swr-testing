import React, { Component } from "react";
import { getAllRestaurants } from "./fetchRestaurantData";

const Restaurants = () => {
  const allRestaurants = [];

  const { stores, isLoading, isError, isValidating } = getAllRestaurants();

  const handleMutate = () => {
    mutate();
  };

  if (error) return "An error has occurred.";
  if (isValidating) return "Validating...";
  if (!stores) return "Loading...";

  return (
    <div>
      {stores.map(store => {
        const city = store.slug;
        let aberto = store[city].is_open;
        return (
          <div key={store.id} classname="store-card">
            <h1 className="text-capitalize">{store.city}</h1>
            <p>{store[city].formatted_address}</p>
            <strong>{store[city].formatted_phone}</strong>
            <strong>{store[city].today.name}</strong>
            <strong>Aberto: {aberto == 1 ? "SIM" : "NÃO"}</strong>
          </div>
        );
      })}
      <button
        onClick={e => {
          e.preventDefault(), handleMutate();
        }}
      >
        Refresh
      </button>

      {isValidating && <p>Refreshing...</p>}
    </div>
  );
};
export default Restaurants;

//const { data, mutate } = useSWR(key, fetcher);
//mutate(); // this will trigger a refetch
