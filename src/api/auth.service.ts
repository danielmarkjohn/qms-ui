import api from './axios'

interface LoginPayload {
  phone: string
  otp: string
}

export const login = async (payload: LoginPayload) => {
  const response = await api.post('/auth/login', payload)

  const token = response.data.access_token

  if (token) {
    localStorage.setItem('token', token)
  }

  return response.data
}