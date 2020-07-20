import React, { Component } from "react";
import { getRestaurants } from "./fetchRestaurantData";

const Restaurants = () => {

  const { data, error, isValidating, mutate } = getRestaurants();

  const handleMutate = () => {
    mutate();
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  if (data) {
    let city = data.data.slug;
    let aberto = data[city].is_open;
  }
  return (
    <div>
      <h1 className="text-capitalize">{data.city}</h1>
      <p>{data[city].formatted_address}</p>
      <strong>{data[city].formatted_phone}</strong>{" "}
      <strong>{data[city].today.city}</strong>{" "}
      <strong>Aberto: {aberto == 1 ? "SIM" : "NÃO"}</strong>
      <div>
      <button
        onClick={e => {
          e.preventDefault(), handleMutate();
        }}
      >
        Refresh
      </button>
      
      {isValidating && <p>Refreshing...</p>}
      </div>
    </div>
  );
};
export default Restaurants;

//const { data, mutate } = useSWR(key, fetcher);
//mutate(); // this will trigger a refetch
