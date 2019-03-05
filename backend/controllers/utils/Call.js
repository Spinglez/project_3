const axios = require("axios");

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
