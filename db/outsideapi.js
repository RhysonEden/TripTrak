const { Client } = require("pg");
const bcrypt = require("bcrypt");
require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");
const { access_key } = process.env;
const client = new Client("postgres://localhost:5432/triptrak");

async function showFlights() {
  console.log(access_key);
  try {
    const data = await axios.get(
      `http://api.aviationstack.com/v1/flights?access_key=${access_key}`
    );
    // console.log("flight", data.data);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function showAirlines() {
  console.log(access_key);
  try {
    console.log("hitting here");
    const data = await axios.get(
      `http://api.aviationstack.com/v1/airlines?access_key=${access_key}`
    );
    console.log("airlines", data);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function showPaths() {
  console.log(access_key);
  //   try {
  //     console.log("hitting here");
  //     const data = await axios.get(
  //       `http://api.aviationstack.com/v1/routes?access_key=${access_key}`
  //     );
  //     console.log("flight paths", data);
  //     return data.data;
  //   } catch (error) {
  //     return error;
  //   }
}

module.exports = {
  showFlights,
  showAirlines,
  showPaths,
};
