import axios from 'axios';

const getURL = "/api/Users"
const getSavedMovies = "/api/savedmovies"
const matchURL = "/api/match"
const postSave = "/api/savedmovies"

export default {
  get : (query) => {
    return axios.get(getURL + query)
  },
  getMovies : (user) => {
    return axios.get(getSavedMovies + user)
  },
  post : (post) =>{
    return axios.post(matchURL, post)
  },
  postSave : (post) => {
    return axios.post(postSave, {parameters: {
      savedMovie: post
    }})
  }
}
