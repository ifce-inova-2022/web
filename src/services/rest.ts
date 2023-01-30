
import axios, { AxiosInstance } from 'axios'

const baseURL = 'http://localhost:8888'

export class Rest {
  request: AxiosInstance

  constructor(path: string) {
    this.request = axios.create({ baseURL: baseURL + path })
    this.request.interceptors.request.use((request) => {
      const token = localStorage.getItem('token')
      if(token) {
        request.headers!['Authorization'] = `Bearer ${token}`
      }
      return request
    })
  }

  async create(data: any) {
    const response = await this.request({ method: 'post', url: '/', data: data })
    return response.data 
  }

  async update(data: any) {
    const response = await this.request({ method: 'put', url: '/', data: data })
    return response.data 
  }

  async delete(id: string) {
    const response = await this.request({ method: 'delete', url: `/${id}` })
    return response.data 
  }

  async find() {
    const response = await this.request({ method: 'get', url: '/' })
    return response.data 
  }

  async findById(id: string) {
    const response = await this.request({ method: 'get', url: `/${id}` })
    return response.data 
  }

}