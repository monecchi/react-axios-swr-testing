import React, { Component } from "react";
import { getRestaurant } from "./fetchRestaurantData";

/**
 * Restaurant Name Component
 */
const RestaurantName = ({ slug }) => {
  const { store, isLoading, isError } = getRestaurant(slug);
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (store) {
    const restaurant = store[0];
    console.log(restaurant);
  }
  return <h1 className="text-capitalize">Loja {restaurant.slug}</h1>;
};

export default RestaurantName;
