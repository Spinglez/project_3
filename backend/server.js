const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config();

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = 'mongodb://spinglez:'+ process.env.MONGODBKEY +'@ds153314.mlab.com:53314/moviesuser' || "mongodb://localhost/movieknight";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(logger("dev"));


require("./controllers/apiRoutes/apiRoutes")(app)


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
