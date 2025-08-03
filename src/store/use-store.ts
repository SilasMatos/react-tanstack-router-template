// src/store/use-store.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  // …qualquer outra info que o /me devolver
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user',                                   // chave no localStorage
      storage: createJSONStorage(() => localStorage), // persiste só no browser
      partialize: (state) => ({ user: state.user }),  // salva apenas user
    },
  ),
)
