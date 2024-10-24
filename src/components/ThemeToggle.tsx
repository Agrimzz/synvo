"use client" // Required for client-side only code in Next.js

import { IconMoon, IconSun } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  if (!theme) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2  bg-primary text-white rounded-md hover:bg-accent hover:text-primary"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default ThemeToggle
