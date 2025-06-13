import { useState, useRef, useEffect } from 'react'
import {
  Sun,
  Moon,
  Bell,
  LogOut,
  AppWindow,
  Palette,
  Check
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/theme-context'
import boneco_ia from '../../assets/bonecos/boneco_ola.png'

const colorThemes = [
  {
    name: 'Blue',
    value: 'blue' as const,
    colors: ['#3b82f6', '#e0f2fe', '#1e3a8a'],
    description: 'Clean and professional'
  },
  {
    name: 'Orange',
    value: 'orange' as const,
    colors: ['#f68b1f', '#ffa07a', '#ff9900'],
    description: 'Warm and vibrant'
  }
]

const Header = () => {
  const { colorTheme, setColorTheme, isDark, toggleDarkMode } = useTheme()
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const themeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setIsThemeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleColorThemeChange = (
    newColorTheme: (typeof colorThemes)[0]['value']
  ) => {
    setColorTheme(newColorTheme)
    setIsThemeOpen(false)
  }

  return (
    <header className="bg-card text-card-foreground border-b border-border px-4 py-4 flex justify-between items-center relative">
      <div className="w-full flex gap-2 items-center">
        <div>
          <img src="LogoPrincipal.png" className="w-[40px]" alt="logo" />
        </div>
        <h1 className="text-xl font-semibold text-primary">Ultron</h1>
        <div>
          <AppWindow size={22} className="ml-1 cursor-pointer text-primary" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <div className="p-2 rounded-lg hover:opacity-80 transition-opacity bg-accent dark:bg-accent/30 cursor-pointer">
            <img src={boneco_ia} className="max-w-[18px]" alt="" />
          </div>
        </div>

        <button onClick={toggleDarkMode}>
          <div className="p-2 rounded-lg hover:opacity-80 transition-opacity bg-accent dark:bg-accent/30 cursor-pointer">
            {isDark ? (
              <Moon size={19} className="text-primary" />
            ) : (
              <Sun size={19} className="text-primary" />
            )}
          </div>
        </button>

        <div className="relative" ref={themeRef}>
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="p-2 rounded-lg hover:opacity-80 transition-opacity bg-accent dark:bg-accent/30 cursor-pointer"
          >
            <Palette size={19} className="text-primary" />
          </button>

          <AnimatePresence>
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full right-0 mt-2 w-72 rounded-xl shadow-lg border border-border bg-popover text-popover-foreground overflow-hidden z-50"
              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette size={16} className="text-foreground" />
                    <h3 className="font-semibold text-sm text-foreground">
                      Cores do Tema
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {colorThemes.map(themeOption => {
                      const isSelected = colorTheme === themeOption.value

                      return (
                        <motion.button
                          key={themeOption.value}
                          onClick={() =>
                            handleColorThemeChange(themeOption.value)
                          }
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                            isSelected
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-transparent text-foreground hover:bg-muted'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Color Palette Preview */}
                          <div className="flex gap-1">
                            {themeOption.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>

                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">
                              {themeOption.name}
                            </div>
                            <div className="text-xs opacity-70 text-muted-foreground">
                              {themeOption.description}
                            </div>
                          </div>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Check size={16} className="text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      )
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isDark ? (
                          <Moon size={16} className="text-foreground" />
                        ) : (
                          <Sun size={16} className="text-foreground" />
                        )}
                        <span className="text-sm text-foreground">
                          Modo {isDark ? 'Escuro' : 'Claro'}
                        </span>
                      </div>
                      <motion.button
                        onClick={() => {
                          toggleDarkMode()
                          setIsThemeOpen(false)
                        }}
                        className="text-xs px-2 py-1 rounded transition-all duration-200 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        whileTap={{ scale: 0.95 }}
                      >
                        Alterar
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <div className="p-2 rounded-lg hover:opacity-80 transition-opacity bg-accent cursor-pointer dark:bg-accent/30">
            <Bell size={19} className="text-primary" />
          </div>
        </div>

        <div>
          <div className="p-2 rounded-lg hover:opacity-80 transition-opacity bg-accent cursor-pointer dark:bg-accent/30">
            <LogOut size={19} className="text-primary" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
