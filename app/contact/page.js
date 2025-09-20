'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Calendar,
  Users,
  Building,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@skolyn.se',
    description: 'Get in touch for general inquiries'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Speak with our team directly'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Stockholm, Sweden',
    description: 'Schedule an in-person meeting'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri 9AM-6PM CET',
    description: 'We typically respond within 2 hours'
  }
]

const demoFeatures = [
  'Live walkthrough of the XAI interface',
  'Analysis of relevant sample cases',
  'Seamless integration overview',
  'ROI calculation for your facility',
  'Q&A with our medical AI experts',
  'Custom deployment timeline'
]

const testimonial = {
  quote: "The Skolyn demo was incredibly impressive. Seeing the AI's reasoning process in real-time gave me the confidence that this technology could truly augment our diagnostic capabilities.",
  author: "Dr. Sarah Chen, MD",
  role: "Chief of Radiology",
  hospital: "Metro General Hospital"
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    departmentSize: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We've received your request and will be in touch within 24 hours to schedule your personalized demo.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Request
              </Button>
            </motion.div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                Get Started Today
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Experience <span className="text-primary">Skolyn AI</span> Live
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Schedule a personalized demo to see how Skolyn can transform your radiology workflow 
                with transparent, explainable AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Request Your Demo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll contact you within 24 hours to schedule 
                  a personalized demonstration of Skolyn's AI diagnostic platform.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john.smith@hospital.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    required
                    value={formData.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    placeholder="Metro General Hospital"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Select onValueChange={(value) => handleChange('role', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="radiologist">Radiologist</SelectItem>
                        <SelectItem value="radiology-director">Radiology Director</SelectItem>
                        <SelectItem value="cio-cto">CIO/CTO</SelectItem>
                        <SelectItem value="administrator">Hospital Administrator</SelectItem>
                        <SelectItem value="it-manager">IT Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="departmentSize">Department Size</Label>
                    <Select onValueChange={(value) => handleChange('departmentSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 radiologists</SelectItem>
                        <SelectItem value="6-15">6-15 radiologists</SelectItem>
                        <SelectItem value="16-30">16-30 radiologists</SelectItem>
                        <SelectItem value="30+">30+ radiologists</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <Select onValueChange={(value) => handleChange('inquiryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Product Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="integration">Technical Integration</SelectItem>
                      <SelectItem value="trial">Free Trial</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your current radiology workflow and what you'd like to see in the demo..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  {!isSubmitting && <Calendar className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* What to Expect */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                What to Expect in Your Demo
              </h3>
              <ul className="space-y-3">
                {demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 bg-muted/30">
              <MessageSquare className="h-8 w-8 text-secondary mb-4" />
              <blockquote className="text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.hospital}</p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <info.icon className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{info.title}</p>
                      <p className="text-sm text-primary">{info.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}