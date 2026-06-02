import api from './Api';

// POST /api/auth/login
// Body: { email, password }
// Retorna: { token }
export async function login(email, password) {
  const response = await api.post('/api/auth/login', { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return token;
}

// POST /api/users
// Body: { name, email, password, phone, cep }
// Retorna: UserResponseDTO { id, name, email, phone, cep }
export async function register(name, email, password, phone, cep) {
  const response = await api.post('/api/users', { name, email, password, phone, cep });
  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}