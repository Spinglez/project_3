import axios from 'axios';

<<<<<<< HEAD
const getURL = "/api/Users"
const matchURL = "/api/match"
=======
const getURL = "http://localhost:3001/api/Users"
const getSavedMovies = "http://localhost:3001/api/savedmovies"
const matchURL = "http://localhost:3001/api/match"
>>>>>>> 560159605a1bd72730738f84f1ae91cf072b4bcc

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
