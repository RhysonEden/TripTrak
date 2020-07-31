const { Client } = require("pg");
const bcrypt = require("bcrypt");
require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");
const { access_key } = process.env;
const client = new Client("postgres://localhost:5432/triptrak");
//
async function createUser({ username, password, email, admin }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email, admin)
      VALUES ($1, $2, $3, $4);
    `,
      [username, password, email, admin]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    console.log("firing");
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    console.log("user", user);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT username, admin, flights
    FROM users;
  `
  );

  return rows;
}

async function getUser({ username, password }) {
  console.log("running");
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

// async function showFlights() {
//   console.log("hitting here");
//   let response = await fetch("https://dummyapi.io/data/api/user?limit=10", {
//     method: "GET",
//     headers: {
//       "app-id": "0JyYiOQXQQr5H9OEn21312",
//     },
//   });
//   let data = await response.json();
//   console.log(data);
//   return data;
// }
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

module.exports = {
  client,
  createUser,
  getUserByUsername,
  getUsersByID,
  getAllUsers,
  getUser,
  showFlights,
  showAirlines,
};
