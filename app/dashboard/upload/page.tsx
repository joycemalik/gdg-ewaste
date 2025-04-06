"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload, Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UploadPage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [detectedCategory, setDetectedCategory] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    condition: "",
    quantity: "1",
    description: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview URL
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)

      // Simulate upload and AI analysis
      setIsUploading(true)
      setTimeout(() => {
        setIsUploading(false)
        setUploadComplete(true)
        setIsAnalyzing(true)

        setTimeout(() => {
          // Simulate AI detection results
          const categories = ["Laptop", "Smartphone", "Monitor", "Printer", "Computer Parts"]
          const randomCategory = categories[Math.floor(Math.random() * categories.length)]
          setDetectedCategory(randomCategory)
          setFormData((prev) => ({ ...prev, category: randomCategory }))

          setIsAnalyzing(false)
          setAnalysisComplete(true)
        }, 2000)
      }, 1500)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload E-Waste Item</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>
              Take clear photos of your e-waste item. Our AI will analyze and categorize it automatically.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!previewUrl ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Drag and drop your images here, or click to browse</p>
                  <p className="text-xs text-gray-500 mb-4">Supports JPG, PNG - Max 5MB</p>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="image-upload">
                    <Button variant="outline" className="cursor-pointer" as="span">
                      Select Image
                    </Button>
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="Item preview"
                    className="w-full h-64 object-contain border rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white"
                      onClick={() => {
                        setPreviewUrl(null)
                        setSelectedFile(null)
                        setUploadComplete(false)
                        setAnalysisComplete(false)
                        setDetectedCategory(null)
                      }}
                    >
                      Change
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {isUploading && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Uploading image...
                    </div>
                  )}

                  {uploadComplete && !isAnalyzing && !analysisComplete && (
                    <div className="flex items-center text-sm text-green-600">
                      <Check className="h-4 w-4 mr-2" />
                      Upload complete
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      AI analyzing image...
                    </div>
                  )}

                  {analysisComplete && (
                    <div className="flex items-center text-sm text-green-600">
                      <Check className="h-4 w-4 mr-2" />
                      Analysis complete
                    </div>
                  )}
                </div>

                {analysisComplete && detectedCategory && (
                  <Alert className="bg-green-50 border-green-200">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertTitle>AI Detection Results</AlertTitle>
                    <AlertDescription>
                      We've detected this item as: <span className="font-medium">{detectedCategory}</span>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>Provide information about your e-waste item</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Item Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Dell XPS 15 Laptop"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Laptop">Laptop</SelectItem>
                      <SelectItem value="Smartphone">Smartphone</SelectItem>
                      <SelectItem value="Monitor">Monitor</SelectItem>
                      <SelectItem value="Printer">Printer</SelectItem>
                      <SelectItem value="Computer Parts">Computer Parts</SelectItem>
                      <SelectItem value="Tablet">Tablet</SelectItem>
                      <SelectItem value="TV">TV</SelectItem>
                      <SelectItem value="Audio Equipment">Audio Equipment</SelectItem>
                      <SelectItem value="Gaming Console">Gaming Console</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleSelectChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Working">Working</SelectItem>
                      <SelectItem value="Partially Working">Partially Working</SelectItem>
                      <SelectItem value="Not Working">Not Working</SelectItem>
                      <SelectItem value="For Parts Only">For Parts Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Provide details about the item, including age, specifications, and any defects"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={!analysisComplete}>
                Create Listing
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

