import axios from 'axios';

const getURL = "/api/Users"
const getSavedMovies = "/api/savedmovies"
const matchURL = "/api/match"

export default {
  get : (query) => {
    return axios.get(getURL + query)
  },
  getMovies : (user) => {
    return axios.get(getSavedMovies + user)
  },
  post : (post) =>{
    return axios.post(matchURL, post)
  }
}
