"use client"
import { navItems } from "@/constants"
import React from "react"
import ThemeToggle from "./ThemeToggle"
import { useRouter } from "next/navigation"

const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {
  const router = useRouter()

  const navlinks = navItems.map((links) => (
    <div
      key={links.name}
      className={`p-4 rounded-md cursor-pointer ${
        activeTab === links.name ? "bg-accent text-primary" : "text-gray-200"
      }`}
      onClick={() => setActiveTab(links.name)}
    >
      <links.Icon />
    </div>
  ))
  return (
    <div className="py-6 flex">
      <div className="flex flex-col justify-between items-center px-4 py-2 border-foreground/10 border-r-2 ">
        <div className="hidden md:flex" onClick={() => router.push("/inbox")}>
          <h2 className="text-3xl text-primary font-bold py-7">SY</h2>
        </div>

        <div className="flex flex-col gap-2">{navlinks}</div>

        <div className="hidden md:flex flex-col gap-2">
          <div className="rounded-full bg-accent text-primary p-4">
            <p className="text-xl">AP</p>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
