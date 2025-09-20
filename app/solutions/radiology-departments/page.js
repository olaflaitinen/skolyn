'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3,
  Stethoscope
} from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Reduce Turnaround Time',
    description: 'Cut diagnostic reporting time by up to 60% with AI-assisted analysis',
    metric: '60% faster',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Increase Accuracy',
    description: 'Catch subtle findings that might be missed during high-volume periods',
    metric: '94% accuracy',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Support Your Team',
    description: 'Reduce radiologist burnout with intelligent workflow optimization',
    metric: '40% less fatigue',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: BarChart3,
    title: 'Improve Throughput',
    description: 'Handle increased case volumes without compromising quality',
    metric: '3x throughput',
    color: 'from-orange-500 to-red-500'
  }
]

const features = [
  {
    title: 'Seamless PACS Integration',
    description: 'Direct integration with your existing Picture Archiving and Communication System',
    icon: Shield
  },
  {
    title: 'Real-time Prioritization',
    description: 'Automatically flag urgent cases requiring immediate attention',
    icon: Zap
  },
  {
    title: 'Quality Assurance',
    description: 'Built-in quality checks and peer review capabilities',
    icon: CheckCircle
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training program and 24/7 technical support',
    icon: Stethoscope
  }
]

const caseStudy = {
  hospital: 'Metro General Hospital',
  location: 'Atlanta, GA',
  size: '500 beds, 8 radiologists',
  challenge: 'Overwhelming case volumes leading to delayed reports and radiologist burnout',
  solution: 'Implemented Skolyn AI across chest X-ray and CT workflows',
  results: [
    'Reduced average turnaround time from 48 hours to 18 hours',
    'Increased case throughput by 200% without additional staff',
    'Improved radiologist satisfaction scores by 45%',
    'Detected 23% more incidental findings'
  ]
}

export default function RadiologyDepartmentsPage() {
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
                Solutions for Radiology Departments
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Empower Your <span className="text-primary">Radiology Team</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your radiology department with AI that augments human expertise, 
                reduces burnout, and improves diagnostic confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  Schedule Department Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  ROI Calculator
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Measurable Impact for Your Department
            </h2>
            <p className="text-xl text-muted-foreground">
              See immediate improvements in efficiency, accuracy, and radiologist satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Built for Hospital Radiology Workflows
            </h2>
            <p className="text-xl text-muted-foreground">
              Every feature designed with input from radiologists and radiology administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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

      {/* Case Study Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Success Story
              </h2>
              <p className="text-xl text-muted-foreground">
                How one radiology department transformed their operations with Skolyn AI.
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{caseStudy.hospital}</h3>
                      <p className="text-muted-foreground">{caseStudy.location}</p>
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
                  <h4 className="font-semibold text-lg mb-6">Results After 6 Months</h4>
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
                      Read Full Case Study
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
              Simple Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From initial consultation to full deployment in as little as 4 weeks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {['Assessment', 'Integration', 'Training', 'Go-Live'].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && 'Technical assessment and workflow analysis'}
                    {index === 1 && 'PACS integration and system configuration'}
                    {index === 2 && 'Comprehensive staff training program'}
                    {index === 3 && 'Full deployment with ongoing support'}
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
              Ready to Transform Your Department?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join leading radiology departments who have improved their workflows with Skolyn AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Department Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Calculate ROI
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}