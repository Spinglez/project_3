import axios from 'axios';

const getURL = "http://localhost:3001/api/Users"
const matchURL = "http://localhost:3001/api/match"

export default {
  get : (query) => {
    return axios.get(getURL + query)
  },
  post : (post) =>{
    return axios.post(matchURL, post)
  }
}
