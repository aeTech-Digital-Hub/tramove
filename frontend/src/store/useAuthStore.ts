import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserRole = 'admin' | 'shipper' | 'transporter'

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  company?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => set({
        user,
        token,
        isAuthenticated: true
      }),
      logout: () => set({
        user: null,
        token: null,
        isAuthenticated: false
      }),
      updateUser: (updatedUser) => set((state) => ({
        user: state.user ? { ...state.user, ...updatedUser } : null
      }))
    }),
    {
      name: 'auth-storage'
    }
  )
)

export default useAuthStore
