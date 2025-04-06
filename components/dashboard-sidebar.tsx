"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Upload,
  Package,
  History,
  Award,
  Settings,
  HelpCircle,
  LogOut,
  Recycle,
  Search,
} from "lucide-react"

const sellerNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload Item",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "My Listings",
    href: "/dashboard/listings",
    icon: Package,
  },
  {
    title: "Transaction History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Rewards",
    href: "/dashboard/rewards",
    icon: Award,
  },
]

const buyerNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Items",
    href: "/dashboard/browse",
    icon: Search,
  },
  {
    title: "Active Purchases",
    href: "/dashboard/purchases",
    icon: Package,
  },
  {
    title: "Transaction History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Impact Report",
    href: "/dashboard/impact",
    icon: Recycle,
  },
]

const bottomNavItems = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  // This would come from auth in a real app
  const userRole = "seller"
  const navItems = userRole === "seller" ? sellerNavItems : buyerNavItems

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="font-bold">EcoCycle</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">Main</h2>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className={cn("w-full justify-start", pathname === item.href && "bg-green-50 text-green-700")}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className="mt-auto p-2">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">Settings</h2>
          <div className="space-y-1">
            {bottomNavItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

