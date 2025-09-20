'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrustBadge } from '@/components/ui/trust-badge'
import { InteractiveXAIDemo } from '@/components/interactive-xai-demo'
import { 
  Eye, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Lock,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react'

const platformFeatures = [
  {
    icon: Eye,
    title: 'Explainable AI (XAI)',
    description: 'See exactly where and why our AI identifies pathologies with transparent heatmap visualizations and detailed reasoning.',
    stats: ['94% Accuracy', 'Sub-second Analysis', '100% Transparent'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Instant diagnostic insights that integrate seamlessly into your existing workflow without disruption.',
    stats: ['<30s Processing', '24/7 Availability', 'Zero Downtime'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Network,
    title: 'PACS Integration',
    description: 'Native DICOM support with seamless integration into existing PACS and RIS systems.',
    stats: ['HL7 Compatible', 'DICOM Native', 'API-First'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'HIPAA and GDPR compliant with end-to-end encryption and zero-trust architecture.',
    stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Audit Trails'],
    color: 'from-red-500 to-pink-500'
  }
]

const integrationPartners = [
  { name: 'Epic', logo: '/api/placeholder/120/60', description: 'EMR Integration' },
  { name: 'Cerner', logo: '/api/placeholder/120/60', description: 'Healthcare IT' },
  { name: 'Philips', logo: '/api/placeholder/120/60', description: 'Medical Imaging' },
  { name: 'GE Healthcare', logo: '/api/placeholder/120/60', description: 'Diagnostic Systems' },
  { name: 'Siemens', logo: '/api/placeholder/120/60', description: 'Medical Technology' },
  { name: 'Canon Medical', logo: '/api/placeholder/120/60', description: 'Imaging Solutions' }
]

const securityFeatures = [
  { title: 'End-to-End Encryption', description: 'AES 256-bit encryption for data in transit and at rest' },
  { title: 'Zero-Trust Architecture', description: 'Every access request is verified and authenticated' },
  { title: 'HIPAA Compliance', description: 'Full compliance with healthcare data protection regulations' },
  { title: 'GDPR Compliance', description: 'European data protection standards implementation' },
  { title: 'SOC 2 Type II', description: 'Independent security audit and certification' },
  { title: 'Audit Logging', description: 'Comprehensive tracking of all system activities' }
]

export default function PlatformPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                AI-Powered Medical Diagnostics Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                The Future of <span className="text-primary">Diagnostic AI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the next generation of medical AI with complete transparency, 
                seamless integration, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Platform Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <TrustBadge icon="shield" text="HIPAA Compliant" />
                <TrustBadge icon="shield" text="GDPR Compliant" />
                <TrustBadge icon="check" text="SOC 2 Certified" />
                <TrustBadge icon="award" text="FDA 510(k) Pending" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-muted/30" id="features">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for healthcare professionals who demand accuracy, transparency, and seamless integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.stats.map((stat, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {stat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive XAI Demo */}
      <section className="py-24" id="xai">
        <div className="container">
          <InteractiveXAIDemo />
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-24 bg-muted/30" id="integration">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-muted-foreground">
              Native compatibility with leading healthcare systems and medical imaging platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrationPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-md transition-all duration-300">
                  <div className="w-full h-12 bg-muted rounded mb-3 flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {partner.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">
              View All Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24" id="security">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground">
              Your data security is our highest priority. Built with healthcare compliance at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="secondary">
              Download Security Whitepaper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Experience the Platform?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your free trial today and see how Skolyn can transform your diagnostic workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}