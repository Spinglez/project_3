const axios = require('axios');
const imdb = require('imdb-prime');

// keyless api - provides amazon prime availability
const primeCall = {
  
  async Movie (movieId) {
    // imdb id for movie passed into imdb.title
    let movieById = await imdb.title(movieId)
    console.log("movie", movieById);
    return axios.get(movieById)
    }
    
}

const Call = {

  tmDB : (query) => {
    let key = process.env.TMDBKEY
    console.log(query);
    let qstring = 'https://api.themoviedb.org/3/discover/movie?api_key='+key+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+query;
    console.log(qstring);
    return axios.get(qstring)
    }


}

module.exports = Call
module.exports = primeCall
