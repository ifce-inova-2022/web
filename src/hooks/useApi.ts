
import axios from 'axios'
import { AuthService } from '../services/auth'
import { UserService } from '../services/user'

const api = { user: new UserService(), auth: new AuthService() }

export const useApi = () => api