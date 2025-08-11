"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Globe,
  MessageSquare,
  Database,
  Phone,
  Camera,
  Network,
  Smartphone,
  FolderKanban,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Zap,
  MessageCircle,
} from "lucide-react"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function HomePage() {
  const services = [
    {
      icon: Database,
      title: "Odoo Integration",
      description:
        "Complete Odoo ERP implementation and customization tailored for East African businesses. Transform your operations with integrated modules for accounting, inventory, sales, and HR management.",
      image: "/images/odoo-integration.webp",
      features: [
        "Custom module development",
        "Data migration & training",
        "Multi-company setup",
        "Mobile app integration",
      ],
      details:
        "Streamline your business processes with Odoo's comprehensive suite of applications. Our certified consultants ensure seamless integration with your existing systems.",
    },
    {
      icon: Database,
      title: "ERPNext Solutions",
      description:
        "Open-source ERP implementation with full customization and ongoing support. Perfect for manufacturing, retail, and service businesses looking for cost-effective solutions.",
      image: "/images/erpnext-logo.png",
      features: ["Manufacturing workflows", "Financial accounting", "CRM & sales pipeline", "Inventory management"],
      details:
        "Leverage the power of open-source technology with ERPNext. Reduce licensing costs while maintaining enterprise-grade functionality.",
    },
    {
      icon: Phone,
      title: "3CX Installation",
      description:
        "Professional VoIP phone system setup and configuration for modern businesses. Reduce communication costs while improving customer service and team collaboration.",
      image: "/images/3cx-system.png",
      features: [
        "Cloud & on-premise deployment",
        "Mobile & desktop apps",
        "Call recording & analytics",
        "Video conferencing",
      ],
      details:
        "Cut your phone bills by up to 80% with our 3CX implementations. Includes training for your team and ongoing technical support.",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets from evolving cyber threats. Safeguard your business with enterprise-grade security measures.",
      image: "/images/cyber-security.jpg",
      features: [
        "Security audits & assessments",
        "Firewall configuration",
        "Threat monitoring & response",
        "Employee security training",
      ],
      details:
        "Protect your business from cyber attacks with our multi-layered security approach. Regular vulnerability assessments and 24/7 monitoring included.",
    },
    {
      icon: Globe,
      title: "Website Building",
      description:
        "Modern, responsive websites designed specifically for East African businesses. From corporate sites to e-commerce platforms, we create digital experiences that convert.",
      image: "/images/website-development.webp",
      features: ["E-commerce integration", "Mobile-first design", "SEO optimization", "Content management systems"],
      details:
        "Stand out online with professionally designed websites. Includes hosting setup, SSL certificates, and ongoing maintenance support.",
    },
    {
      icon: MessageSquare,
      title: "ChatBots & WhatsApp Integration",
      description:
        "Automated customer service solutions with WhatsApp Business API integration. Provide 24/7 customer support and streamline your communication workflows.",
      image: "/images/chatbot-platform.png",
      features: [
        "24/7 automated responses",
        "Multi-language support",
        "CRM integration",
        "Order processing automation",
      ],
      details:
        "Automate up to 80% of customer inquiries with intelligent chatbots. Seamlessly hand over complex queries to human agents when needed.",
    },
    {
      icon: Database,
      title: "Zoho Integration & Support",
      description:
        "Complete Zoho suite implementation and ongoing support for CRM, accounting, and business automation. Streamline your entire business ecosystem.",
      image: "/images/zoho-crm.png",
      features: [
        "CRM setup & customization",
        "Workflow automation",
        "Custom app development",
        "Third-party integrations",
      ],
      details:
        "Maximize your Zoho investment with expert configuration and training. Custom workflows designed for your specific business processes.",
    },
    {
      icon: Camera,
      title: "CCTV Installation",
      description:
        "Professional security camera systems for businesses and residential properties. High-definition surveillance with remote monitoring capabilities.",
      image: "/images/cctv-installation.jpg",
      features: ["4K HD cameras", "Remote mobile monitoring", "Cloud storage backup", "Night vision technology"],
      details:
        "Secure your premises with state-of-the-art surveillance systems. Professional installation with comprehensive warranty coverage.",
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description:
        "Enterprise-grade network infrastructure design and implementation. Reliable, secure, and scalable networking solutions for growing businesses.",
      image: "/images/networking-solutions.jpg",
      features: ["LAN/WAN configuration", "WiFi 6 solutions", "Network security", "Performance optimization"],
      details:
        "Build a robust network foundation for your business growth. Includes network documentation and staff training on best practices.",
    },
    {
      icon: Smartphone,
      title: "Bulk SMS & API Integration",
      description:
        "Mass messaging solutions with robust API integration for marketing campaigns, notifications, and customer communication at scale.",
      image: "/images/bulk-sms.png",
      features: ["99.9% delivery rates", "Custom API development", "Real-time analytics", "Two-way messaging"],
      details:
        "Reach thousands of customers instantly with our reliable SMS platform. Advanced analytics help you optimize your messaging campaigns.",
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description:
        "End-to-end project management services for technology implementations. Ensure successful delivery with our proven methodologies and experienced team.",
      image: "/images/project-management.webp",
      features: [
        "Agile methodology",
        "Timeline & milestone tracking",
        "Quality assurance testing",
        "Stakeholder communication",
      ],
      details:
        "From planning to deployment, we manage every aspect of your tech projects. Regular progress reports and transparent communication throughout.",
    },
  ]

  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Zap, value: "24/7", label: "Support Available" },
    { icon: MapPin, value: "5+", label: "Countries Served" },
  ]

  const sendServiceWhatsApp = (serviceTitle: string) => {
    const message = `Hi! I'm interested in learning more about your ${serviceTitle} service. Could you provide more details about pricing, implementation timeline, and how it can benefit my business?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254720757786?text=${encodedMessage}`, "_blank")
  }

  const sendConsultationWhatsApp = () => {
    const message =
      "Hello! I'd like to schedule a free consultation to discuss my business technology needs. When would be a good time to talk?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254720757786?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/turtle-logo.jpg"
                alt="Turtle Technologies Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white" onClick={sendConsultationWhatsApp}>
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
            🇰🇪 Based in Kenya, Serving East Africa
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simply Tech
            <span className="block">With The Best</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From ERP solutions to cybersecurity, we provide comprehensive technology services that help East African
            businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              onClick={sendConsultationWhatsApp}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed for the unique needs of East African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} illustration`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-amber-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-800 text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-3">{service.details}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-slate-600">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
                      onClick={() => sendServiceWhatsApp(service.title)}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" />
                      WhatsApp Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're proud to partner with some of East Africa's most innovative companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/placeholder.svg?height=64&width=64&text=PS"
                    alt="PowerStar Supermarket logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">PowerStar Supermarket</h3>
                <p className="text-slate-600 mb-4">
                  "Turtle Technologies transformed our retail operations with their comprehensive ERP solution and POS
                  integration."
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-4 w-4 text-amber-500" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/placeholder.svg?height=64&width=64&text=AS"
                    alt="Appleton School logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Appleton School</h3>
                <p className="text-slate-600 mb-4">
                  "Their networking solutions and security systems have greatly enhanced our educational
                  infrastructure."
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-4 w-4 text-amber-500" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/placeholder.svg?height=64&width=64&text=AL"
                    alt="Amitruck Limited logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Amitruck Limited</h3>
                <p className="text-slate-600 mb-4">
                  "The fleet management system and API integrations have streamlined our logistics operations
                  significantly."
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-4 w-4 text-amber-500" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-6">Join these successful companies and transform your business today</p>
            <Button className="bg-amber-600 hover:bg-amber-700">
              View More Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Turtle Technologies?</h2>
              <p className="text-lg text-slate-600 mb-6">
                Based in Kenya with deep understanding of the East African market, we combine global technology
                standards with local expertise to deliver solutions that work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Local Expertise</h3>
                    <p className="text-slate-600">Deep understanding of East African business needs and challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Comprehensive Solutions</h3>
                    <p className="text-slate-600">End-to-end technology services from consultation to support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">24/7 Support</h3>
                    <p className="text-slate-600">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Turtle+Technologies+Team"
                alt="Turtle Technologies team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get in touch with our team of experts and let's discuss how we can help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-slate-300">info@turtletechnologies.co.ke</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-slate-300">+254720757786</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp Us</h3>
              <a
                href="https://wa.me/254720757786?text=Hello%20Turtle%20Technologies!%20I'm%20interested%20in%20your%20tech%20services.%20Could%20you%20please%20provide%20more%20information%20about%20your%20solutions?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                +254720757786
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-300">The Bazaar 10th Floor</p>
              <p className="text-slate-300 text-sm">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={sendConsultationWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Free WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/images/turtle-logo.jpg" alt="Turtle Technologies Logo" className="h-8 w-auto object-contain" />
            </div>
            <div className="text-slate-400 text-sm">© 2024 Turtle Technologies. All rights reserved.</div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  )
}
