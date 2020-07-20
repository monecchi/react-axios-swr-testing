import React from "react";
import { getStores } from "getStoresData";

const RestaurantName = ({ slug }) => {
  const { store, isLoading } = getStore();
  if (isLoading) return <Spinner />;
  return <h1>Welcome back, {user.name}</h1>;
};

export default RestaurantName;
