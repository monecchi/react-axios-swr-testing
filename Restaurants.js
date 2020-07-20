import React, { Component } from "react";
import useSWR from "swr";
import axios from "axios";

// SWR, Mutate on data update or on request

// const fetcher = (...args) => fetch(...args).then(res => res.json()) default fetcher
// const fetcher = url => fetch(url).then(res => res.json()); // with fetch api

const fetcher = url => axios.get(url).then(res => res.data); // with axios

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

const Restaurants = () => {
  //const { data, error, mutate } = useSWR(
  //"https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/",
  //fetcher
  //);

  const { stores: { data }, error, isValidating, mutate } = useSWR(`https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/`, fetcher);

  const handleMutate = () => {
    mutate();
  };

  if (error) return "An error has occurred.";
  if (!stores) return "Loading...";
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
