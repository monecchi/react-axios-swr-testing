import React, { Component } from "react";
import { getStore } from "./fetchRestaurantData";

const RestaurantName = ({ slug }) => {
  const { store, isLoading, isError } = getStore(slug);
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (store) {
    const restaurant = store[0];
  }
  return <h1 className="text-capitalize">Loja {restaurant.slug}</h1>;
};

export default RestaurantName;
