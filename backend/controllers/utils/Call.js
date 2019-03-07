const axios = require("axios");
const imdb = require("imdb-prime");

// Returns amazon Prime video availability
let movieIdInput = 'tt0105793'
// const primeCall = {
  async function movieById (movieIdInput) {
    // imdb id for movie passed into imdb.title
    let movieId = await imdb.title(movieIdInput)
    // console.log("movieId", movieId);
    // return axios.get(movieById)
    return movieId
    }
  movieById(movieIdInput)

// Returns movie data - including imdb movie ID  
let movieTitleInput = 'Titanic' 
  async function movieByTitle (movieTitle) {
    let movieByTitle = await imdb.search(movieTitle)
    console.log("movieByTitle", movieByTitle)
    return axios.get(movieByTitle);
  } 
  movieByTitle(movieTitleInput);
  

const Call = {
  tmDB : query => {
    let key = process.env.TMDBKEY;

    let qstring =
      "https://api.themoviedb.org/3/discover/movie?api_key="
      + key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="
      + query;
    return axios.get(qstring);
  },
  omDB : query => {
    let key = process.env.OMDBKEY
    let qstring = 'http://www.omdbapi.com/?apikey='
    +key+
    '&t='
    +query;
  return axios.get(qstring);
  }
};

module.exports = Call;
module.exports.movieById = movieById;
module.exports.movieByTitle = movieByTitle;

