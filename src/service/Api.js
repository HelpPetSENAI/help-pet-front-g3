import axios from 'axios';

const api = axios.create({
  baseURL: 'https://help-pet-back-g1.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token JWT automaticamente em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Redireciona para login se o token expirar (401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;