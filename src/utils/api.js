import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/categories'
    : 'https://my-json-server.typicode.com/Ali-Sanad/json-server-db/categories';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
