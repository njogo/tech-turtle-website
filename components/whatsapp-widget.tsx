"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "254720757786"

  const quickMessages = [
    {
      title: "Get Free Consultation",
      message:
        "Hello! I'd like to schedule a free consultation to discuss my business technology needs. When would be a good time to talk?",
    },
    {
      title: "ERP Solutions Inquiry",
      message:
        "Hi! I'm interested in learning more about your ERP solutions (Odoo/ERPNext). Could you provide more details about pricing and implementation?",
    },
    {
      title: "Website Development",
      message:
        "Hello! I need a professional website for my business. Can you share your website development packages and timeline?",
    },
    {
      title: "Cyber Security Services",
      message:
        "Hi! I'm concerned about my business security. Could you tell me more about your cybersecurity services and how you can help protect my company?",
    },
    {
      title: "General Inquiry",
      message:
        "Hello Turtle Technologies! I'm interested in your tech services. Could you please provide more information about your solutions?",
    },
  ]

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <Card className="mb-4 w-80 shadow-2xl border-0">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Turtle Technologies</h3>
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                <p className="text-sm text-gray-700 mb-2">👋 Hi there! Welcome to Turtle Technologies.</p>
                <p className="text-sm text-gray-700">How can we help transform your business today?</p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                <Clock className="h-3 w-3" />
                <span>Typically replies in minutes</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(item.message)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-200 transition-colors text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50 rounded-b-lg">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3" />
                  <span>+254720757786</span>
                </div>
                <span>Powered by WhatsApp</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl border-4 border-white transition-all duration-300"
        size="sm"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      )}
    </div>
  )
}
