import React from "react";
import { getStores } from "getStoresData";

const RestaurantName = ({ slug }) => {
  const { store, isLoading } = getStore();
  if (isLoading) return <p>Loading...</p>;
  return <h1 className={"text-capitalize"}>Loja {store.slug}</h1>;
};

export default RestaurantName;
