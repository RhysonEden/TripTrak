const apiRouter = require("express");

const flightPathRouter = apiRouter.Router();
const { showPaths } = require("../db");

flightPathRouter.get("/", async (req, res, next) => {
  try {
    console.log("flight paths");
    const paths = await showPaths();
    res.send({ paths });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = flightPathRouter;
