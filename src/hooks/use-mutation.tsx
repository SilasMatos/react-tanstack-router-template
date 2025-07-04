// src/hooks/useAuth.ts
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import { Login, Register, Logout } from '@/api/mutations'

import type { RegisterMutation, LoginMutation } from '@/types/mutations-types'

export function useLogin(
  options?: UseMutationOptions<any, Error, LoginMutation>
) {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: LoginMutation) => Login(payload),
    retry: 0,
    ...options
  })
}

export const useRegister = (
  options?: UseMutationOptions<any, Error, LoginMutation>
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: RegisterMutation) => Register(payload),
    retry: 0,
    ...options
  })
}

export const useLogout = (options?: UseMutationOptions<any, Error>) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: () => Logout(),
    retry: 0,
    ...options
  })
}
