export interface AuthRepository {
  login(username: string, password: string): Promise<void>
  register(username: string, password1:string, password2: string): Promise<void>
  logout(): Promise<void>
}
