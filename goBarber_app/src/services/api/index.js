import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.10.127:3001'
});

export default api;
