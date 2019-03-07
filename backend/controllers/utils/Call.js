const axios = require("axios");

// Returns amazon Prime video availability
const primeCall = {
  async movieById (movieId) {
    // imdb id for movie passed into imdb.title
    let movieById = await imdb.title(movieId)
    console.log("movieById", movieById);
    return axios.get(movieById)
    },
  async movieByTitle (movieTitle) {
    let movieByTitle = await imdb.search(movieTitle)
    console.log("movieByTitle", movieByTitle)
    return axios.get(movieByTitle);
  } 
}

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

module.exports = {
  Call: Call,
  primeCall: primeCall 
}

