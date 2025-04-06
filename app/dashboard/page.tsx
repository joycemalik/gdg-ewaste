"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Package, Recycle, Truck, Users, Award } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockStats = {
  totalListings: 24,
  activeListings: 18,
  completedTransactions: 42,
  ecoTokens: 156,
  recycledWeight: 320, // in kg
  co2Saved: 480, // in kg
}

export default function Dashboard() {
  const [progress, setProgress] = useState(0)
  const [userRole, setUserRole] = useState("seller") // This would come from auth in a real app

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your recycling activity.</p>
        </div>
        {userRole === "seller" ? (
          <Link href="/dashboard/upload">
            <Button className="bg-green-600 hover:bg-green-700">
              Upload New Item <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard/browse">
            <Button className="bg-green-600 hover:bg-green-700">
              Browse Available Items <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "seller" ? "Active Listings" : "Available Items"}
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.activeListings}</div>
            <p className="text-xs text-muted-foreground">
              {userRole === "seller" ? "+2 from last week" : "Matching your requirements"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Transactions</CardTitle>
            <Recycle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.completedTransactions}</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eco Tokens</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.ecoTokens}</div>
            <p className="text-xs text-muted-foreground">+24 from recent activities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.co2Saved} kg</div>
            <p className="text-xs text-muted-foreground">Through your recycling efforts</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recycling Impact</CardTitle>
            <CardDescription>Your contribution to the circular economy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Monthly Goal Progress</div>
                  <div className="text-sm text-muted-foreground">{progress}%</div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Total E-Waste Recycled</div>
                  <div className="text-sm font-medium">{mockStats.recycledWeight} kg</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Equivalent to saving {(mockStats.recycledWeight * 0.02).toFixed(1)} trees
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest transactions and listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userRole === "seller" ? (
                <>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                      <Package className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">New listing created</p>
                      <p className="text-xs text-muted-foreground">Laptop (Dell XPS 15) - 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Matched with buyer</p>
                      <p className="text-xs text-muted-foreground">Computer parts - 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Pickup scheduled</p>
                      <p className="text-xs text-muted-foreground">Old monitors (x3) - 5 days ago</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                      <Package className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">New match found</p>
                      <p className="text-xs text-muted-foreground">Server equipment - 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                      <Recycle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Transaction completed</p>
                      <p className="text-xs text-muted-foreground">Mixed electronics - 4 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Bulk collection completed</p>
                      <p className="text-xs text-muted-foreground">Office equipment - 6 days ago</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Activities</CardTitle>
              <CardDescription>Scheduled pickups and pending transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userRole === "seller" ? (
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Scheduled Pickup</div>
                      <div className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</div>
                    </div>
                    <div className="mt-2 text-sm">Items: 2x Laptops, 1x Printer</div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Bulk Collection</div>
                      <div className="text-sm text-muted-foreground">Friday, 10:00 AM</div>
                    </div>
                    <div className="mt-2 text-sm">5 locations, estimated 120kg of e-waste</div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        View Route
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Listings</CardTitle>
              <CardDescription>Your current items in the marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userRole === "seller" ? (
                  <>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Dell XPS 15 Laptop</div>
                        <div className="text-sm text-green-600">3 interested buyers</div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Listed 2 days ago • Condition: Used (Working)
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Offers
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Computer Parts Bundle</div>
                        <div className="text-sm text-green-600">1 interested buyer</div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">Listed 3 days ago • Condition: Mixed</div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Offers
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Server Equipment</div>
                        <div className="text-sm text-green-600">Matched yesterday</div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        5 items from 2 sellers • Total weight: ~45kg
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Contact Sellers
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700" size="sm">
                          Confirm Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Mixed Electronics</div>
                        <div className="text-sm text-amber-600">Pending confirmation</div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        12 items from 4 sellers • Total weight: ~80kg
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700" size="sm">
                          Schedule Pickup
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Transactions</CardTitle>
              <CardDescription>Your recycling history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Office Equipment Bundle</div>
                    <div className="text-sm text-muted-foreground">Completed on April 2, 2025</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {userRole === "seller"
                      ? "Earned: 24 Eco Tokens • CO₂ Saved: 35kg"
                      : "Total weight: 65kg • CO₂ Saved: 95kg"}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Certificate
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Smartphones Collection</div>
                    <div className="text-sm text-muted-foreground">Completed on March 15, 2025</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {userRole === "seller"
                      ? "Earned: 18 Eco Tokens • CO₂ Saved: 22kg"
                      : "Total weight: 40kg • CO₂ Saved: 60kg"}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

