import apiClient from './apiClient';

const EMPLOYEE_API_BASE_URL = '../routes/employeeRoutes.js';

const createEmployee = async (employeeData) => {
  try {
    const response = await apiClient.post(EMPLOYEE_API_BASE_URL, employeeData);
    return response.data;
  } catch (error) {
    // Handle or throw error
    throw error;
  }
};

const getAllEmployees = async () => {
  try {
    const response = await apiClient.get(EMPLOYEE_API_BASE_URL);
    return response.data;
  } catch (error) {
    // Handle or throw error
    throw error;
  }
};

const getEmployeeById = async (employeeId) => {
  try {
    const response = await apiClient.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    return response.data;
  } catch (error) {
    // Handle or throw error
    throw error;
  }
};

const updateEmployee = async (employeeId, employeeData) => {
  try {
    const response = await apiClient.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employeeData);
    return response.data;
  } catch (error) {
    // Handle or throw error
    throw error;
  }
};

const deleteEmployee = async (employeeId) => {
  try {
    await apiClient.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  } catch (error) {
    // Handle or throw error
    throw error;
  }
};

export {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};