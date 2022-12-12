export interface AuthResponse {
   accessToken: string,
    user: {
      email: string,
      id: number
    }
}

export interface RegisterRequest {
  email: string,
  password: string,
  nome: string

}
