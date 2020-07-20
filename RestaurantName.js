import React from "react";
import { getStore } from "./fetchRestaurantData";

const RestaurantName = ({ slug }) => {
  const { store, isLoading } = getStore(slug);
  if (isLoading) return <p>Loading...</p>;
  return <h1 className={"text-capitalize"}>Loja {store.slug}</h1>;
};

export default RestaurantName;
