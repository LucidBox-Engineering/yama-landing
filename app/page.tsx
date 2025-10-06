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
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 bg-primary rounded-md p-1">
						<Image
							src="/yama-logo-tmp.png?height=32&width=400"
							width="400"
							height="32"
							alt="Yama"
							className="h-8 w-auto"
						/>
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
            <Button className="bg-slate-900 hover:bg-slate-800 transition-colors">Get Quote</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-in fade-in-50 duration-1000">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Old Intercom Into a <span className="bg-accent rounded-lg px-2 py-0 text-accent-foreground whitespace-nowrap leading-[1.5]">Smart Access System</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    Upgrade your outdated dialer-based intercom system without a hardware switch. Enhanced security,
                    remote access, and seamless integration with your building management.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Virtual Doors</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Web-based Door Assignments</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Broad Integrations</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-in fade-in-50 duration-1000 delay-300">
                <div className="relative">
                  <Image
                    src="/wireframe-building.png?height=400&width=400"
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
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Why Upgrade?</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Yama Difference</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Replace your old intercom system with cutting-edge smart technology that enhances security, convenience,
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
                    Connect with your building management systems for seamless access control.
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
                    Rotating keys, audit logs, and easy management keep your building secure 24/7.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Easy Setup</h3>
                  <p className="text-center text-slate-600">
										Simply point you old intercom at Yama's smart numbers and experience access control simplified.
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
									We evaluate your current dialer intercom to see if it's a candidate for a Yama upgrade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold">Onboarding</h3>
                <p className="text-slate-600">
									Use the Yama web interface to associate tenant phone numbers with doors. Set up advanced
									access controls, or integrate with your existing property manegement systems.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold">Switch</h3>
                <p className="text-slate-600">
									Point your existing dialer to the associated Yama numbers, and enjoy the comfort of a smart access system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
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
                      <span className="text-slate-600">No maintenance credentials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">Difficult move in/out</span>
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
                    <h3 className="text-xl font-bold text-green-700">Yama</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Smart keys and Integrations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Easy/auditable access for maintenance/cleaning</span>
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to <span className="text-accent-foreground">Upgrade</span> Your Intercom System?
                </h2>
                <p className="mx-auto max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Schedule a call with one of our access control experts, and get ready for reliable, smart access controls without the headache.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-slate-900" />
                </form>
                <p className="text-xs text-slate-400">Free assessment • No obligation • Learn more</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-accent-foreground hover:bg-white hover:text-slate-900 transition-colors bg-transparent"
                >
                  Schedule a Call
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
        <p className="text-xs text-slate-600">© 2025 Yama Inc. All rights reserved.</p>
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
