const axios = require("axios");
const imdb = require("imdb-prime");
const unirest = require('unirest');

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
  },
  uni: query =>{
    let key = process.env.UTELLY_KEY
    let qstring = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+ query +"&country=us"
    return unirest.get(qstring).header("X-RapidAPI-Key", key)
  }
};

module.exports = Call;
// module.exports.movieById = movieById;
// module.exports.movieByTitle = movieByTitle;
