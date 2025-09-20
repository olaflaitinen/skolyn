'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Network, 
  BarChart3, 
  Shield, 
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe,
  Database,
  Settings
} from 'lucide-react'

const networkBenefits = [
  {
    icon: Network,
    title: 'Centralized Management',
    description: 'Manage AI diagnostics across all facilities from a single dashboard',
    metric: 'Single pane of glass',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Network Analytics',
    description: 'Comprehensive analytics and benchmarking across all locations',
    metric: 'Real-time insights',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Resource Optimization',
    description: 'Optimize radiologist allocation and case distribution network-wide',
    metric: '40% efficiency gain',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Shield,
    title: 'Unified Compliance',
    description: 'Ensure consistent HIPAA and regulatory compliance across all sites',
    metric: '100% compliant',
    color: 'from-orange-500 to-red-500'
  }
]

const networkFeatures = [
  {
    title: 'Multi-Site Deployment',
    description: 'Seamless rollout across multiple hospitals with centralized configuration management',
    icon: Building2
  },
  {
    title: 'Load Balancing',
    description: 'Automatically distribute cases based on capacity and specialist availability',
    icon: BarChart3
  },
  {
    title: 'Unified Reporting',
    description: 'Network-wide reporting and analytics with facility-specific drill-down capabilities',
    icon: Database
  },
  {
    title: 'Standardized Workflows',
    description: 'Ensure consistent diagnostic protocols and quality standards across all locations',
    icon: Settings
  }
]

const networkStats = [
  { number: '50+', label: 'Hospital Networks' },
  { number: '500+', label: 'Connected Facilities' },
  { number: '2,000+', label: 'Network Radiologists' },
  { number: '99.9%', label: 'Network Uptime' }
]

const caseStudy = {
  network: 'HealthSystem Regional',
  locations: '15 hospitals across 3 states',
  size: '2,500 beds, 45 radiologists',
  challenge: 'Inconsistent diagnostic protocols and uneven workload distribution across network facilities',
  solution: 'Implemented Skolyn AI with centralized management and cross-site case sharing',
  results: [
    'Standardized diagnostic protocols across all 15 facilities',
    'Reduced average report turnaround time by 35% network-wide',
    'Improved radiologist utilization by 60% through intelligent load balancing',
    'Achieved 99.5% uptime across the entire network',
    'Reduced operational costs by $2.3M annually'
  ]
}

export default function HospitalNetworksPage() {
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
                Solutions for Hospital Networks
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Scale AI Across Your <span className="text-primary">Entire Network</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Deploy Skolyn AI across multiple facilities with centralized management, 
                unified analytics, and consistent quality standards throughout your healthcare network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  Schedule Network Demo
                  <Globe className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Network ROI Calculator
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Network-Wide Transformation
            </h2>
            <p className="text-xl text-muted-foreground">
              Achieve unprecedented efficiency and consistency across your entire healthcare network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} text-white flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Features */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Enterprise Network Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Built specifically for large healthcare networks with complex operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {networkFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Proven at Scale
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Trusted by the largest healthcare networks worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {networkStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Network Success Story
              </h2>
              <p className="text-xl text-muted-foreground">
                How a major healthcare network transformed operations across 15 facilities.
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{caseStudy.network}</h3>
                      <p className="text-muted-foreground">{caseStudy.locations}</p>
                      <p className="text-sm text-muted-foreground mt-1">{caseStudy.size}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-lg mb-6">Results After 12 Months</h4>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{result}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button variant="outline">
                      Read Full Network Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Network Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Structured rollout across your entire network with minimal disruption.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {['Assessment', 'Pilot Site', 'Rollout', 'Optimization'].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && 'Network assessment and site prioritization'}
                    {index === 1 && 'Deploy at lead site and validate approach'}
                    {index === 2 && 'Systematic rollout across all facilities'}
                    {index === 3 && 'Network-wide optimization and tuning'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Transform Your Entire Network
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join leading healthcare networks who have successfully deployed AI diagnostics at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Network Demo
                <Globe className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Download Network Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}