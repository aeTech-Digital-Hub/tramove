import { create } from 'zustand'

interface UIState {
  isSidebarOpen: boolean
  activeMenu: string | null
  theme: 'light' | 'dark'
  toggleSidebar: () => void
  setActiveMenu: (menu: string | null) => void
  setTheme: (theme: 'light' | 'dark') => void
}

const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  activeMenu: null,
  theme: 'light',
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  setTheme: (theme) => set({ theme })
}))

export default useUIStore
