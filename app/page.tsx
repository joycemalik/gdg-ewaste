import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Shield, Truck, Award, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">EcoCycle</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-green-50">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Transform E-Waste into Value</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl">
              Our AI-powered platform connects e-waste sellers with buyers, ensuring efficient recycling and creating a
              sustainable circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup?role=seller">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Sell E-Waste <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup?role=buyer">
                <Button size="lg" variant="outline">
                  Join as Buyer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Instantly categorize e-waste through image recognition technology for accurate listings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                <p className="text-gray-600">
                  Our algorithm connects sellers with the perfect buyers based on specific requirements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Logistics Integration</h3>
                <p className="text-gray-600">
                  Seamless coordination of bulk collections with optimized routes and tracking.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rewards System</h3>
                <p className="text-gray-600">
                  Earn tokens for active participation and responsible recycling practices.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Circular Economy</h3>
                <p className="text-gray-600">
                  Create value at every step by efficiently recycling or repurposing e-waste.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Traceability</h3>
                <p className="text-gray-600">
                  Track every transaction and item movement for transparency and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">For Sellers</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Upload Images</h4>
                      <p className="text-gray-600">
                        Take photos of your e-waste and our AI will categorize it automatically.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Create Listings</h4>
                      <p className="text-gray-600">
                        Add details about condition and quantity to complete your listing.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Get Matched</h4>
                      <p className="text-gray-600">Our system connects you with interested buyers automatically.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule Pickup</h4>
                      <p className="text-gray-600">Arrange collection through our integrated logistics system.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Earn Rewards</h4>
                      <p className="text-gray-600">Receive tokens for your contribution to sustainable recycling.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">For Buyers</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Set Requirements</h4>
                      <p className="text-gray-600">Specify the types and quantities of e-waste you're looking for.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Browse Matches</h4>
                      <p className="text-gray-600">Review seller listings that match your specific requirements.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Confirm Transactions</h4>
                      <p className="text-gray-600">Select the listings you want and confirm the transaction.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule Collection</h4>
                      <p className="text-gray-600">Arrange bulk collection with optimized routes for efficiency.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Track Sustainability Impact</h4>
                      <p className="text-gray-600">Monitor your environmental impact through our dashboard.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Recycle className="h-5 w-5 text-green-600" />
            <span className="font-bold">EcoCycle</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} EcoCycle. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

