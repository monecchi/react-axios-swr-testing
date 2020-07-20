import React, { Component } from "react";
import { getStore } from "./fetchRestaurantData";

const RestaurantName = ({slug}) => {
  const { store, isLoading } = getStore(slug);
  if (isLoading) return <div><p>Loading...</p></div>;
  console.log(store);
  return <h1 className={}>Loja {store}</h1>;
};

export default RestaurantName;
