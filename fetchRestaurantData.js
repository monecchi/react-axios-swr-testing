import React, { Component } from "react";
import useSWR from "swr";
import axios from "axios";

// Set up swr

// const fetcher = (...args) => fetch(...args).then(res => res.json()) default fetcher
// const fetcher = url => fetch(url).then(res => res.json()); // with fetch api

const fetcher = url => axios.get(url).then(res => res.data); // with axios

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

let storesURL = "/stores/";

// Get a single restaurant (store) data
export const getStore = slug => {
  if (slug) {
    slug = "betim";
  }
  const { data, error } = useSWR(apiURL + `/stores/${slug}`, fetcher);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
};

// Get all restaurants (stores) data
export const getStores = () => {};
