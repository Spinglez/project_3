import axios from 'axios';

const URL = "http://localhost/3001/api"

export default {
  get : (query) => {
    return axios.get(URL + query)
  }
}
