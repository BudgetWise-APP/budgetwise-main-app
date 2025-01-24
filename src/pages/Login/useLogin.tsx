import { login } from '@/api'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginSchema, LoginSchemaType } from './helpers'
import { zodResolver } from '@hookform/resolvers/zod'

export const useLogin = () => {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (token: string) => {
      console.log('token', token)
      localStorage.setItem('auth_token', token)
      navigate('/')
    },
    onError: ({message}) => {
      setError(message)
    },
  })

  function onSubmit(data: LoginSchemaType) {
    mutate(data)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    error,
  }
}
