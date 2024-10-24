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
      className="p-4  text-primary rounded-md hover:text-foreground"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default ThemeToggle
