'use client'

import ThemeToggle from "./ThemeToggle"
import React from 'react'


export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between transition-colors">
      <h1 className="text-xl font-semibold">MyApp</h1>
      <ThemeToggle />
    </nav>
  )
}
