import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PersistStorage } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface User {
  name: string
  avatar: string
  cover: string
  birthday: string
  quartile: number

  points: number
  operation: string
  theme: string
  isAuthenticated: boolean
}

interface UserStore {
  user: User | null
  setUser: (user: Omit<User, 'isAuthenticated'>) => void
  updateUserProfile: (updates: Partial<Omit<User, 'isAuthenticated'>>) => void
  updateTheme: (theme: User['theme']) => void
  updatePoints: (points: number) => void
  updateQuartile: (quartile: number) => void
  logout: () => void
  isAuthenticated: () => boolean
}

const cookieStorage: PersistStorage<UserStore> = {
  getItem: (name) => {
    const value = Cookies.get(name)
    return value ? JSON.parse(value) : null
  },
  setItem: (name, value) => {
    Cookies.set(name, JSON.stringify(value), { expires: 7 })
  },
  removeItem: (name) => {
    Cookies.remove(name)
  },
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,

      setUser: (userData) =>
        set({
          user: {
            ...userData,
            isAuthenticated: true
          }
        }),

      updateUserProfile: (updates) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, ...updates }
            : null
        })),

      updateTheme: (theme) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, theme }
            : null
        })),

      updatePoints: (points) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, points }
            : null
        })),

      updateQuartile: (quartile) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, quartile }
            : null
        })),

      logout: () => {
        set({ user: null })
        Cookies.remove('auth-token')
      },

      isAuthenticated: () => {
        const state = get()
        return state.user?.isAuthenticated ?? false
      }
    }),
    {
      name: 'user-cookie',
      storage: cookieStorage,
    }
  )
)

// Selectors para facilitar o uso
export const useUserData = () => useUserStore((state) => state.user)
export const useUserTheme = () => useUserStore((state) => state.user?.theme ?? 'light')
export const useUserPoints = () => useUserStore((state) => state.user?.points ?? 0)
export const useUserQuartile = () => useUserStore((state) => state.user?.quartile ?? 1)
export const useUserOperation = () => useUserStore((state) => state.user?.operation ?? 'GERAL')
export const useIsAuthenticated = () => useUserStore((state) => state.user?.isAuthenticated ?? false)

// Tipos exportados para uso em outros componentes
export type { User, UserStore }