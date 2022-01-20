import api from './api';

export async function getContinents() {
  const response = await api.get('/continents');

  return response.data;
}
