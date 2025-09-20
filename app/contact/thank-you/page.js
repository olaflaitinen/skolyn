'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  CheckCircle, 
  Calendar, 
  Mail, 
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  MessageSquare
} from 'lucide-react'

const nextSteps = [
  {
    icon: Mail,
    title: 'Confirmation Email',
    description: 'You\'ll receive a confirmation email within the next few minutes with your demo request details.',
    timeframe: 'Within 5 minutes'
  },
  {
    icon: Users,
    title: 'Team Assignment',
    description: 'Our solutions engineer will review your request and prepare a customized demo for your organization.',
    timeframe: 'Within 4 hours'
  },
  {
    icon: Calendar,
    title: 'Demo Scheduling',
    description: 'We\'ll contact you within 24 hours to schedule your personalized demo at a time that works for you.',
    timeframe: 'Within 24 hours'
  },
  {
    icon: MessageSquare,
    title: 'Personalized Demo',
    description: 'Experience Skolyn AI live with relevant use cases specific to your radiology workflow and requirements.',
    timeframe: 'Within 48 hours'
  }
]

const relatedResources = [
  {
    title: 'Platform Overview',
    description: 'Learn more about our AI-powered diagnostic platform',
    href: '/platform',
    icon: BookOpen
  },
  {
    title: 'Case Studies',
    description: 'See how other organizations have transformed with Skolyn',
    href: '/resources/case-studies',
    icon: Users
  },
  {
    title: 'Technology Deep Dive',
    description: 'Understand the science behind our explainable AI',
    href: '/technology',
    icon: BookOpen
  }
]

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Main Thank You Message */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-4">
                  Thank You!
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                  We've received your demo request and our team is excited to show you 
                  how Skolyn AI can transform your radiology workflow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Next Steps</span>
                </div>
                <p className="text-muted-foreground">
                  Our solutions engineer will contact you within 24 hours to schedule 
                  your personalized demo. In the meantime, check your email for confirmation details.
                </p>
              </motion.div>
            </div>

            {/* What Happens Next */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">What Happens Next</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                              {step.timeframe}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Demo Preview */}
            <div className="mb-16">
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">What to Expect in Your Demo</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Live XAI Demo</h4>
                      <p className="text-sm text-muted-foreground">
                        See our explainable AI in action with real medical imaging cases
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold mb-2">Workflow Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn how Skolyn integrates with your existing PACS and RIS systems
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Q&A Session</h4>
                      <p className="text-sm text-muted-foreground">
                        Get answers to your specific questions about implementation and ROI
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Duration: 30-45 minutes • Format: Interactive online session • 
                    Customized to your organization's needs
                  </p>
                </div>
              </Card>
            </div>

            {/* Related Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                While You Wait, Explore More
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                          <resource.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {resource.description}
                          </p>
                          <Link href={resource.href}>
                            <Button variant="ghost" size="sm" className="p-0 h-auto">
                              Learn More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <Card className="p-8 bg-muted/30">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-6">
                  If you have urgent questions or need to modify your demo request, 
                  don't hesitate to contact our team directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email: hello@skolyn.se
                  </Button>
                  <Button variant="outline">
                    Phone: +46 (0) 8-123-4567
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}