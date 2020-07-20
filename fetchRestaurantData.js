import React, { Component } from "react";
import useSWR from "swr";
import axios from "axios";

// Set up swr

// const fetcher = (...args) => fetch(...args).then(res => res.json()) default fetcher
// const fetcher = url => fetch(url).then(res => res.json()); // with fetch api

const fetcher = url => axios.get(url).then(res => res.data); // with axios

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

let storesURL = "/stores/";
let storeURL = `/stores/${slug}`;

// Get a single restaurant (store) data
export const getStore = slug => {
  const { data, error } = useSWR(apiURL + `/${slug}`, fetcher);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
};

// Get all restaurants (stores) data
export const getStores = () => {};

export function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)
  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <img src={user.avatar} />
}
