'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'
import { Button } from './Button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') return <Sun className="h-4 w-4" />
    if (theme === 'dark') return <Moon className="h-4 w-4" />
    return <Sun className="h-4 w-4" /> // system default
  }

  const getTitle = () => {
    if (theme === 'light') return 'Switch to dark mode'
    if (theme === 'dark') return 'Switch to system theme'
    return 'Switch to light mode'
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={getTitle()}
      className="hover:bg-accent"
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
