import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'https://loalhost:5001/api',
  withCredentials : true, //Include cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});