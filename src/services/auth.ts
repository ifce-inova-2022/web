import { Rest } from "./rest";

export class AuthService extends Rest {
  constructor() {
    super('/auth')
  }

  async validateToken (token: string) {
    return {
      user: { id: '1', name: 'admin', email: 'admin@inova.com', campus: 'IFCE Aracati', type: 'admin'}
    }
    
  }
  async signin (email: string, password: string) {
    try {
      const response = await this.request({method:'POST', url:'/', data: {email, password}})
      localStorage.setItem('token', response.data.token)
      return response.data
    } catch (error: any) {
      if (!error.response) {
        throw new Error ('Falha na comunicação com o servidor.')
      }
      if (error.response.status === 404) {
        throw new Error ('Usuário e/ou senha inválidos.')
      }
      if (error.response.stauts === 500) {
        throw new Error ('Erro interno do Servidor.')
      }
      console.error(error)
      throw new Error ('Erro desconhecido.')
    }
  }
  async logout () {
    return { status: true }
    
  }

  
}