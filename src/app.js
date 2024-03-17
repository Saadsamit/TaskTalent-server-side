require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/v1", (req, res) => {
  res.send("server is running....");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

app.use((err, _req, res, _next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.status,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`the server run on ${port}`);
  });
};

main();
