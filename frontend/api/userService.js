import apiClient from './apiClient';

const registerUser = (userData) => {
  return apiClient.post('/register', userData);
};

const loginUser = (credentials) => {
  return apiClient.post('/login', credentials);
};

export { registerUser, loginUser };