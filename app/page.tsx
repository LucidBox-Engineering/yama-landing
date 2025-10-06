import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Smartphone, Shield, Zap, CheckCircle, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Brainy Access Systems</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Reviews
            </Link>
            <Button className="bg-slate-900 hover:bg-slate-800 transition-colors">Get Quote</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-in fade-in-50 duration-1000">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Smart Building Technology
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Old Intercom Into a <span className="text-accent">Smart Access System</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    Upgrade your outdated dialer-based intercom system with modern smart technology. Enhanced security,
                    remote access, and seamless integration with your building management.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="hover:bg-slate-50 transition-colors bg-transparent">
                    View Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free Assessment</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Professional Installation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>1-Year Warranty</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-in fade-in-50 duration-1000 delay-300">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width="400"
                    height="400"
                    alt="Smart Intercom System"
                    className="aspect-square overflow-hidden rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">System Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Why Upgrade?</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Outdated to Outstanding</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Replace your old dialer system with cutting-edge smart technology that enhances security, convenience,
                  and building management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Integration</h3>
                  <p className="text-center text-slate-600">
                    Connect with smartphones, tablets, and building management systems for seamless access control.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Enhanced Security</h3>
                  <p className="text-center text-slate-600">
                    Advanced encryption, access logs, and remote monitoring keep your building secure 24/7.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Easy Installation</h3>
                  <p className="text-center text-slate-600">
                    Professional installation that works with your existing wiring. Minimal disruption, maximum results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Simple Process</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Transform Your System</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process ensures a smooth transition from your old dialer system to smart technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold">Assessment</h3>
                <p className="text-slate-600">
                  We evaluate your current intercom system and building requirements to design the perfect smart upgrade
                  solution.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold">Installation</h3>
                <p className="text-slate-600">
                  Professional installation using existing wiring where possible. Clean, efficient, and minimally
                  disruptive.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold">Activation</h3>
                <p className="text-slate-600">
                  System setup, user training, and ongoing support to ensure you get the most from your smart access
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline">Transformation</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Before vs After</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-red-500" />
                    <h3 className="text-xl font-bold text-red-700">Old Dialer System</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">Limited to basic calling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">No remote access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">Difficult maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">No access logs</span>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 border-green-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-bold text-green-700">Smart Access System</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Video calling & monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Remote access control</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Cloud-based management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Detailed access logs</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Customer Reviews</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600">
                    "The upgrade was seamless and the new system is incredible. Remote access has made property
                    management so much easier."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-slate-600">Property Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600">
                    "Professional installation and excellent support. Our old dialer system was replaced in just one
                    day."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Mike Chen</p>
                      <p className="text-sm text-slate-600">Building Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600">
                    "The security features and access logs give us peace of mind. Best investment we've made for our
                    building."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Lisa Rodriguez</p>
                      <p className="text-sm text-slate-600">Facility Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Upgrade Your Intercom System?
                </h2>
                <p className="mx-auto max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get a free assessment and quote for your smart access system upgrade. Professional installation with
                  1-year warranty included.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-slate-900" />
                  <Button type="submit" variant="secondary" className="hover:bg-slate-200 transition-colors">
                    Get Quote
                  </Button>
                </form>
                <p className="text-xs text-slate-400">Free assessment • No obligation • Professional consultation</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors bg-transparent"
                >
                  Schedule Assessment
                </Button>
                <Button size="lg" variant="secondary" className="hover:bg-slate-200 transition-colors">
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-slate-600">© 2024 Brainy Access Systems. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
