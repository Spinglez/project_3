const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    firstName: String,
    lastName: String,
    UUID: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    updated: {
      type: {Date, Default: Date.now}
    },
    movieSurvey: {
      type:[],
      required: true
    },
    userDescription: String,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", Users);
