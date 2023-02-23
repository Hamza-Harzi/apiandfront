const express = require("express");
const app = express();
const connect = require("./connectDb/connect");
const Person = require("./models/personxx");
const personRoute = require("./route/personRoute");
const articleRoute = require("./route/articleRoute");
const cors = require("cors");
app.use(cors());

const port = 5000;

app.listen(port, (e) => {
  if (e) {
    console.log("server is runing");
  } else {
    console.log(`server is connected on port ${port}`);
  }
});

connect();

console.log(connect, "ghgshgjids");

app.use(express.json());
app.use("/api", personRoute);
// app.use("/api", articleRoute);
