// src/store/use-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PersistStorage } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface User {
  name: string
  email: string
  isAuthenticated: boolean
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
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
    (set) => ({
      user: null,
      setUser: (user) => set({ user: { ...user, isAuthenticated: true } }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-cookie',
      storage: cookieStorage,
    }
  )
)
