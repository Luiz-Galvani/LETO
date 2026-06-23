import axios from 'axios';
// ATENÇÃO: Substitua 3000 pela porta exata que o seu servidor Node.js
// mostra no terminal quando arranca ("Server running at http://localhost:PORT")
const api = axios.create({
  baseURL: `http://localhost:3000`
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const postJson = (url, data) => api.post(url, data);
export const getJson = (url) => api.get(url);

export default api;