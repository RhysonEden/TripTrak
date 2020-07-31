import React, { useState, useEffect } from "react";

import { showFlights } from "../api/flights";
import { showAirlines } from "../api/airlines";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    showFlights()
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

  // useEffect(() => {
  //   showAirlines()
  //     .then((response) => {
  //       setMessage(response.message);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // });
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default App;
