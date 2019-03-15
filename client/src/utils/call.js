import axios from 'axios';

const getURL = "/api/Users"
const matchURL = "/api/match"

export default {
  get : (query) => {
    return axios.get(getURL + query)
  },
  post : (post) =>{
    return axios.post(matchURL, post)
  }
}
