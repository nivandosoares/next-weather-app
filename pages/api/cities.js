<<<<<<< HEAD
import React from "react";
import { useState } from "react";
function Cities() {
  const [state, setState] = useState([]);

  const fetchCities = async () => {
    const response = await fetch("/api/cities");
    const data = await response.json();
    console.log(data);
    setState(data);
  };

  return (
    <>
      <div align="center">
        <button onClick={fetchCities()}>Get the endpoints</button>
      </div>{" "}
      {state.map((city) => {
        return (
          <div align="center" key={city.id}>
            {city.id}.<br />
            {"Name: "}
            {city.name}.<br />
            <br />
            <hr />
          </div>
        );
      })}{" "}
    </>
  );
}

export default Cities;
=======
import {
  useState
} from 'react'

function EndpointsPage() {
  const [cities, setCities] = useState([])

  const fetchCityList = async () => {
    const response = await fetch('/api/search')
    const data = await response.json()
    console.log(data)
    setCities(data)
  }

  return(
    <>
    <div align="center">
      <button  onClick={fetchCityList}>Get the ID cities list </button>
     </div> {
      cities.map(city => {
        return (
          <div align="center" key={city.id}>
            {city.id}.<br/>
            {"City Name: "}{city.name}.<br/>
            {"State: "} {city.state}.<br/>
            {"Country: "}{city.country} <br/>
            <hr/>
          </div>
        )
      })
    }
     </>
  )
}

export default EndpointsPage;
>>>>>>> 729a9699d435a23cac1d42d9e294812d15dc3d74
