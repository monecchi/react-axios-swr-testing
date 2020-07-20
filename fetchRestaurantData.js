import React, { Component } from "react";
import useSWR from "swr";
import axios from "axios";

// Setup SWR

// define a "fetcher" ( wrapper of the native fetch )
const fetcher = (...args) => fetch(...args).then(res => res.json()); // with fetch
// const fetcher = url => fetch(url).then(res => res.json()); // same as above
// const fetcher = url => axios.get(url).then(res => res.data); // with axios

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/";

// Get a single restaurant (store) data
export const getStore = slug => {
  const { data, error } = useSWR(apiURL + `${slug}`, fetcher);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
};

// Get all restaurants (stores) data
export const getStores = () => {
  const { data, error } = useSWR(apiURL, fetcher);

  return {
    stores: data,
    isLoading: !error && !data,
    isError: error
  };
};
