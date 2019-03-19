const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema Definition
const UsersSchema = new Schema(
  {
    firstName: String,
    lastName: String,
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
    image: String,
    savedMovies: [
      {
        type: Schema.Types.ObjectId,
        ref: "SavedMovies"
      }
    ]
  },
  { timestamps: true },
);


// Saved movies associated with Users Schema
const SavedMoviesSchema = new Schema(
  {
    // url pointing to hosted movie poster image
    moviePoster: {
      type: String,
      required: true,
      unique: true
    },
    movieTitle: {
      type: String,
      required: true,
      unique: true
    },
    overview: {
      type: String
    },
    voteScore: {
      type: Number
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  }
)

// creating Models to be exported.
const Users = mongoose.model("Users", UsersSchema)

const SavedMovies = mongoose.model("SavedMovies", SavedMoviesSchema)

module.exports = {
  Users: Users,
  SavedMovies: SavedMovies
};
