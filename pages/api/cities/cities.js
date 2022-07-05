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
