import ApiService from '@/services/api.service'
import { AuthRepository } from '@/domain/models/auth/authRepository'

export class APIAuthRepository implements AuthRepository {
  constructor(
    private readonly request = ApiService
  ) {}

  async login(username: string, password: string): Promise<void> {
    const url = `/auth/login/`
    const response = await this.request.post(url, { username, password })
    // console.log(response.data)
    return response.data
  }

  async logout(): Promise<void> {
    const url = '/auth/logout/'
    await this.request.post(url)
  }

  async register(username: string, password1: string, password2: string) : Promise<void> {
    const url = '/auth/register/'
    await this.request.post(url, {username, password1, password2})
  }
}
