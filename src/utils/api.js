import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getExampleData = async () => {
  try {
    const response = await api.get('/example');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};