"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Mock data for available e-waste items
const mockItems = [
  {
    id: 1,
    title: "Dell XPS 15 Laptop",
    category: "Laptop",
    condition: "Working",
    quantity: 1,
    location: "San Francisco, CA",
    distance: 5.2,
    image: "/placeholder.svg?height=200&width=300",
    seller: "TechRecycle Inc.",
    listed: "2 days ago",
  },
  {
    id: 2,
    title: "iPhone 12 Pro",
    category: "Smartphone",
    condition: "Working",
    quantity: 3,
    location: "Oakland, CA",
    distance: 8.7,
    image: "/placeholder.svg?height=200&width=300",
    seller: "GreenTech Solutions",
    listed: "1 day ago",
  },
  {
    id: 3,
    title: 'Samsung Monitors (24")',
    category: "Monitor",
    condition: "Working",
    quantity: 5,
    location: "San Jose, CA",
    distance: 15.3,
    image: "/placeholder.svg?height=200&width=300",
    seller: "Office Liquidators",
    listed: "3 days ago",
  },
  {
    id: 4,
    title: "Computer Parts Bundle",
    category: "Computer Parts",
    condition: "For Parts Only",
    quantity: 1,
    location: "Palo Alto, CA",
    distance: 12.1,
    image: "/placeholder.svg?height=200&width=300",
    seller: "TechHarvest",
    listed: "5 hours ago",
  },
  {
    id: 5,
    title: "HP LaserJet Printer",
    category: "Printer",
    condition: "Partially Working",
    quantity: 2,
    location: "San Francisco, CA",
    distance: 3.8,
    image: "/placeholder.svg?height=200&width=300",
    seller: "Office Depot Recycling",
    listed: "1 week ago",
  },
  {
    id: 6,
    title: "Server Equipment Rack",
    category: "Server Equipment",
    condition: "Working",
    quantity: 1,
    location: "Mountain View, CA",
    distance: 18.5,
    image: "/placeholder.svg?height=200&width=300",
    seller: "DataCenter Decommission",
    listed: "2 days ago",
  },
]

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [maxDistance, setMaxDistance] = useState([50])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])

  const categories = ["Laptop", "Smartphone", "Monitor", "Printer", "Computer Parts", "Server Equipment"]
  const conditions = ["Working", "Partially Working", "Not Working", "For Parts Only"]

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition],
    )
  }

  const filteredItems = mockItems.filter((item) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by distance
    const matchesDistance = item.distance <= maxDistance[0]

    // Filter by category
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category)

    // Filter by condition
    const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(item.condition)

    return matchesSearch && matchesDistance && matchesCategory && matchesCondition
  })

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedConditions([])
    setMaxDistance([50])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Browse E-Waste</h1>
          <p className="text-muted-foreground">Find and purchase e-waste items that match your requirements</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4 flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, category, or keyword..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Items</SheetTitle>
                <SheetDescription>Narrow down your search with specific criteria</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <Label>Maximum Distance</Label>
                  <div className="flex items-center gap-4">
                    <Slider value={maxDistance} min={1} max={100} step={1} onValueChange={setMaxDistance} />
                    <span className="w-12 text-sm">{maxDistance[0]} mi</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Categories</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Condition</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {conditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={`condition-${condition}`}
                          checked={selectedConditions.includes(condition)}
                          onCheckedChange={() => toggleCondition(condition)}
                        />
                        <label
                          htmlFor={`condition-${condition}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-full md:w-1/4">
          <Tabs defaultValue="all">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">
                All
              </TabsTrigger>
              <TabsTrigger value="nearby" className="flex-1">
                Nearby
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex-1">
                Recent
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedCategories.map((category) => (
          <Badge key={category} variant="secondary" className="flex gap-1 items-center">
            {category}
            <button className="ml-1 rounded-full hover:bg-gray-200 p-0.5" onClick={() => toggleCategory(category)}>
              ✕
            </button>
          </Badge>
        ))}
        {selectedConditions.map((condition) => (
          <Badge key={condition} variant="secondary" className="flex gap-1 items-center">
            {condition}
            <button className="ml-1 rounded-full hover:bg-gray-200 p-0.5" onClick={() => toggleCondition(condition)}>
              ✕
            </button>
          </Badge>
        ))}
        {(selectedCategories.length > 0 || selectedConditions.length > 0) && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge
                    variant={
                      item.condition === "Working"
                        ? "default"
                        : item.condition === "Partially Working"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {item.condition}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{item.category}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.location}</span>
                  <span className="text-muted-foreground">{item.distance} miles away</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Seller: {item.seller}</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Listed: {item.listed}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No items found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any items matching your criteria. Try adjusting your filters or search query.
            </p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

