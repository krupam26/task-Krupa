import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getIssues = async (filters = {}) => {
  try {
    const response = await api.get('/issues', { params: filters });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching issues';
  }
};

export const getIssueById = async (id) => {
  try {
    const response = await api.get(`/issues/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching issue';
  }
};

export const createIssue = async (data) => {
  try {
    const response = await api.post('/issues', data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error creating issue';
  }
};

export const updateIssue = async (id, data) => {
  try {
    const response = await api.patch(`/issues/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error updating issue';
  }
};

export const deleteIssue = async (id) => {
  try {
    await api.delete(`/issues/${id}`);
  } catch (error) {
    throw error.response?.data?.message || 'Error deleting issue';
  }
};