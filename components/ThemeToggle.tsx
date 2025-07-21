'use client'

import { useEffect, useState } from 'react'
import React from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)

    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkPreferred = storedTheme === 'dark' || (!storedTheme && systemPrefersDark)

    if (isDarkPreferred) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setIsDark(isDarkPreferred)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setIsDark(!isDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border rounded text-sm transition-colors border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
