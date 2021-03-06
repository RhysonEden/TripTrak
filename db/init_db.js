const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  client,
  createUser,
  getUserByUsername,
  getUsersByID,
  getAllUsers,
  getUser,
} = require("./index");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
  `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          admin varchar NOT NULL,
          email varchar NOT NULL,
          flights varchar UNIQUE
        );`);
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      console.log("here the user");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "arman",
          password: hashedPassword,
          email: "test1@yahoo.com",
          admin: true,
        });
        console.log("arman", arman);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "james",
          password: hashedPassword,
          email: "test2@yahoo.com",
          admin: true,
        });
        console.log(james);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const andreas = await createUser({
          username: "andreas",
          password: hashedPassword,
          email: "test3@yahoo.com",
          admin: true,
        });
        console.log(andreas);
        resolve();
      });
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    const userArman = await getUserByUsername("arman");
    const userJames = await getUserByUsername("james");
    const userAndreas = await getUserByUsername("andreas");
    const user2 = await getUsersByID(2);
    const users = await getAllUsers();
    console.log("username", userArman, userJames, userAndreas);
    console.log("User 2", user2);
    console.log("All users", users);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
