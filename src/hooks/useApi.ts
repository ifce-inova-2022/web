
import axios from 'axios';

const api = axios.create({
  baseURL: 'EXEMPLO'
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: 'admin', email: 'admin@admin.com' }
    }
    const response = await api.post('/validate', {
      token
    });
    return response.data;
  },

  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: 'admin', email: 'admin@admin.com', campus: 'IFCE Aracati', type: "admin" },
      token: '498235978234'
    }
    const response = await api.post('/signin', {
      email,
      password
    });
    return response.data;
  },

  logout: async () => {
    return { status: true }
    const response = await api.post('/logout');
    return response.data;
  }
})