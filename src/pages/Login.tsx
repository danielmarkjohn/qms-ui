import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/auth.service'

export default function Login() {
  const navigate = useNavigate()

  const [phone, setPhone] = useState('+919845985821')
  const [otp, setOtp] = useState('1234')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError('')

      await login({
        phone,
        otp,
      })

      navigate('/dashboard')
    } catch (err: any) {
      setError(
        err?.response?.data?.detail || 'Login failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded bg-white p-6 shadow"
      >
        <h1 className="mb-4 text-2xl font-semibold">
          Login
        </h1>

        <input
          className="mb-3 w-full rounded border p-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <input
          className="mb-3 w-full rounded border p-2"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
        />

        {error && (
          <p className="mb-3 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full rounded bg-black p-2 text-white"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}