'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '../api/auth.api'

export function useAuth() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return
    setError('')
    setLoading(true)

    try {
      const res = await login({ email, password })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setError('Invalid email or password.')
        return
      }

      router.push('/admin')
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { email, setEmail, password, setPassword, showPassword, setShowPassword, error, loading, handleSubmit }
}
