import Navbar from "@/components/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-screen bg-background flex py-4">
      <Navbar />
      {children}
    </div>
  )
}
