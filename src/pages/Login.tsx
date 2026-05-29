import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../api/auth.service'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/card'

export default function Login() {
    const navigate = useNavigate()

    const [phone, setPhone] = useState('+919845985821')
    const [otp, setOtp] = useState('1234')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async (
        e: React.SyntheticEvent<HTMLFormElement>) => {
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
        <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleLogin}
                        className="space-y-4"
                    >
                        <Input
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                        />

                        <Input
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) =>
                                setOtp(e.target.value)
                            }
                        />

                        {error && (
                            <p className="text-sm text-destructive">
                                {error}
                            </p>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading
                                ? 'Logging in...'
                                : 'Login'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}