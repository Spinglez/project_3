import axios from 'axios';

const getURL = "http://localhost:3001/api/Users"
const getSavedMovies = "http://localhost:3001/api/savedmovies:user"
const matchURL = "http://localhost:3001/api/match"

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
