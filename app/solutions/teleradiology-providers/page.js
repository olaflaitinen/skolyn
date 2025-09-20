'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Satellite, 
  Clock, 
  Globe, 
  Shield, 
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Monitor,
  HeartHandshake,
  Users
} from 'lucide-react'

const teleradBenefits = [
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'AI-powered preliminary reads enable faster turnaround times across all time zones',
    metric: '24/7 coverage',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Scale Efficiently',
    description: 'Handle increased case volumes without proportional staffing increases',
    metric: '300% capacity',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'AI-powered second opinions and quality checks ensure consistent accuracy',
    metric: '99.5% accuracy',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serve clients worldwide with consistent quality and rapid response times',
    metric: 'Worldwide',
    color: 'from-orange-500 to-red-500'
  }
]

const teleradFeatures = [
  {
    title: 'Preliminary AI Reads',
    description: 'Instant preliminary reports that radiologists can quickly review and finalize',
    icon: Zap
  },
  {
    title: 'Priority Flagging',
    description: 'Automatic identification and prioritization of urgent cases requiring immediate attention',
    icon: Monitor
  },
  {
    title: 'Quality Metrics',
    description: 'Comprehensive quality tracking and reporting for client satisfaction and compliance',
    icon: TrendingUp
  },
  {
    title: 'Client Integration',
    description: 'Seamless integration with client PACS systems and reporting workflows',
    icon: HeartHandshake
  }
]

const workflowSteps = [
  {
    title: 'Case Receipt',
    description: 'Studies automatically received and processed from client facilities',
    icon: Satellite,
    time: '< 1 min'
  },
  {
    title: 'AI Analysis',
    description: 'Comprehensive AI analysis with preliminary findings and priority scoring',
    icon: Zap,
    time: '< 30 sec'
  },
  {
    title: 'Radiologist Review',
    description: 'Radiologist reviews AI findings and provides final interpretation',
    icon: Users,
    time: '5-15 min'
  },
  {
    title: 'Report Delivery',
    description: 'Final report delivered to client with full audit trail',
    icon: ArrowRight,
    time: '< 1 min'
  }
]

const caseStudy = {
  company: 'Global Teleradiology Partners',
  scope: 'Serving 200+ hospitals across 15 countries',
  size: '150 radiologists, 50,000 studies/month',
  challenge: 'Increasing demand for rapid turnaround times while maintaining diagnostic accuracy across diverse case types',
  solution: 'Integrated Skolyn AI for preliminary reads and intelligent case prioritization',
  results: [
    'Reduced average turnaround time from 45 minutes to 18 minutes',
    'Increased monthly case capacity by 200% without additional radiologists',
    'Improved client satisfaction scores by 40%',
    'Reduced miss rate for critical findings by 65%',
    'Achieved 24/7 preliminary coverage for all client time zones'
  ]
}

export default function TeleradiologyProvidersPage() {
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
                Solutions for Teleradiology Providers
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Scale <span className="text-primary">Global Operations</span> with AI
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Enhance your teleradiology services with AI-powered preliminary reads, 
                intelligent prioritization, and 24/7 quality assurance across all time zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  Schedule Demo
                  <Satellite className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Capacity Calculator
                  <TrendingUp className="ml-2 h-5 w-5" />
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
              Competitive Advantages for Teleradiology
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay ahead of the competition with AI-enhanced services that clients demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teleradBenefits.map((benefit, index) => (
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

      {/* Workflow Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              AI-Enhanced Workflow
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamlined process that accelerates turnaround times while maintaining quality.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      {step.time}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Teleradiology-Specific Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Purpose-built capabilities for remote radiology operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teleradFeatures.map((feature, index) => (
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

      {/* Case Study */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Teleradiology Success Story
              </h2>
              <p className="text-xl text-muted-foreground">
                How a global teleradiology provider transformed their operations with AI.
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{caseStudy.company}</h3>
                      <p className="text-muted-foreground">{caseStudy.scope}</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Scale Your Operations?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join leading teleradiology providers who have enhanced their services with Skolyn AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Demo
                <Satellite className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Partnership Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}