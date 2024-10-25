"use client"

import { IconMoon, IconSun } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      const defaultTheme = prefersDark ? "dark" : "light"
      setTheme(defaultTheme)
      document.documentElement.setAttribute("data-theme", defaultTheme)
    }
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

  return (
    <button
      onClick={toggleTheme}
      className="p-4 text-primary rounded-md hover:text-foreground"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default ThemeToggle
