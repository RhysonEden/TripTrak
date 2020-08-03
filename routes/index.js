const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const flightRouter = require("./flights");
apiRouter.use("/flights", flightRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const airlineRouter = require("./airlines");
apiRouter.use("/airlines", airlineRouter);

const flightPathRouter = require("./paths");
apiRouter.use("/paths", flightPathRouter);

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = apiRouter;
