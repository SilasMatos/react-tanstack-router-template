import React, { createContext, useContext, useEffect, useState } from 'react'

export type ColorTheme = 'blue' | 'orange'

interface ThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (colorTheme: ColorTheme) => void
  isDark: boolean
  toggleDarkMode: () => void
  theme: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue')
  const [isDark, setIsDark] = useState(false)

  const theme = `${colorTheme}${isDark ? '-dark' : ''}`

  useEffect(() => {
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme
    const savedIsDark = localStorage.getItem('isDark') === 'true'

    if (savedColorTheme && ['blue', 'orange'].includes(savedColorTheme)) {
      setColorTheme(savedColorTheme)
    }

    setIsDark(savedIsDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('blue', 'orange', 'dark')

    root.classList.add(colorTheme)

    if (isDark) {
      root.classList.add('dark')
    }

    localStorage.setItem('colorTheme', colorTheme)
    localStorage.setItem('isDark', isDark.toString())
  }, [colorTheme, isDark])

  const toggleDarkMode = () => {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        isDark,
        toggleDarkMode,
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
