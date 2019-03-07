import axios from 'axios';

const URL = "http://localhost:3001/api/Users"

export default {
  get : (query) => {
    return axios.get(URL + query)
  },
  post : (post) =>{
    return axios.post(URL, post)
  }
}
