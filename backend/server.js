const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Data = require("./data");
require('dotenv').config();

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = 'mongodb://spinglez:'+ process.env.MONGODBKEY +'@ds153314.mlab.com:53314/moviesuser';

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
