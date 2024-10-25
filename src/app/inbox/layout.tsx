"use client"
import Call from "@/components/Call"
import Messages from "@/components/Messages"
import Navbar from "@/components/Navbar"
import People from "@/components/People"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeTab, setActiveTab] = useState("Messages")

  const renderTab = () => {
    switch (activeTab) {
      case "Messages":
        return <Messages />
      case "People":
        return <People />
      case "Call":
        return <Call />
      default:
        return null
    }
  }

  return (
    <div className="w-full h-screen bg-background flex ">
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="w-[400px] bg-background  px-4 overflow-y-scroll pt-6">
        {renderTab()}
      </div>
      {children}
    </div>
  )
}
