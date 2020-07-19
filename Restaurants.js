import React from "react";
import useSWR from "swr";
import axios from "axios";

// SWR, Mutate on data update or on request

//const fetcher = url => fetch(url).then(res => res.json());

const fetcher = url => axios.get(url).then(res => res.data); // with axios

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

const Restaurants = () => {
  //const { data, error, mutate } = useSWR(
  //"https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/",
  //fetcher
  //);

  const { data, error, isValidating, mutate } = useSWR(
    apiURL + `/stores/`,
    fetcher
  );

  const handleMutate = () => {
    mutate();
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  if (data) {
    let aberto = data[slug].is_open;
  }
  return (
    <div>
      <h1 className="text-capitalize">{data.slug}</h1>
      <p>{data[slug].formatted_address}</p>
      <strong>{data[slug].formatted_phone}</strong>{" "}
      <strong>{data[slug].today.slug}</strong>{" "}
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
