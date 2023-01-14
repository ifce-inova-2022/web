
import axios from 'axios'

const api = axios.create({
  baseURL: 'api.example.com'
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: '1', name: 'admin', email: 'admin@inova.com', campus: 'IFCE Aracati', type: 'admin'}
    }
    const response = await api.post('/validade', { token })
    return response.data
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: '1', name: 'admin', email: 'admin@inova.com', campus: 'IFCE Aracati', type: 'admin'},
      token: '57839483478834'
    }
    const response = await api.post('/signin', { email, password })
    return response.data
  },
  logout: async () => {
    return { status: true }
    const response = await api.post('/logout')
    return response.data
  }
})