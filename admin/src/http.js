import axios from 'axios'

const http = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });

  export default http