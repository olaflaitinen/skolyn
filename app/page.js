'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrustBadge } from '@/components/ui/trust-badge'
import { InteractiveXAIDemo } from '@/components/interactive-xai-demo'
import { 
  Shield, 
  Zap, 
  Eye, 
  Users, 
  TrendingUp, 
  Clock,
  ChevronRight,
  Play,
  Award,
  CheckCircle
} from 'lucide-react'

const problemStats = [
  {
    icon: Users,
    title: 'Overwhelming Caseloads',
    stat: '300% increase',
    description: 'in radiology case volumes over the past decade, while radiologist numbers remain stagnant.'
  },
  {
    icon: Clock,
    title: 'Diagnostic Delays',
    stat: '48-72 hours',
    description: 'average turnaround time for complex cases, impacting patient outcomes and satisfaction.'
  },
  {
    icon: Eye,
    title: 'Human Error Risk',
    stat: '3-5% miss rate',
    description: 'for subtle findings due to visual fatigue and cognitive overload in high-volume environments.'
  }
]

const solutionFeatures = [
  {
    icon: Eye,
    title: 'Explainable AI Analysis',
    description: 'See exactly where and why our AI identifies potential pathologies with transparent heatmap visualizations.',
    stat: '94% accuracy'
  },
  {
    icon: Zap,
    title: 'Instant Second Opinion',
    description: 'Get immediate AI-powered insights that augment your diagnostic confidence and catch subtle findings.',
    stat: '< 30 seconds'
  },
  {
    icon: TrendingUp,
    title: 'Workflow Integration',
    description: 'Seamlessly integrates with existing PACS and RIS systems through standard DICOM protocols.',
    stat: 'Zero disruption'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">Skolyn</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">Platform</a>
            <a href="#technology" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
            <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Request Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6">
                Clarity in the <span className="text-primary">Complex</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Skolyn is a clinical co-pilot, leveraging transparent AI to augment diagnostic 
                accuracy and efficiency for radiologists and improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg px-8 py-3">
                  Request a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch 2-Min Overview
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <TrustBadge icon="shield" text="HIPAA Compliant" />
                <TrustBadge icon="shield" text="GDPR Compliant" />
                <TrustBadge icon="award" text="Peer-Reviewed" />
                <TrustBadge icon="check" text="FDA 510(k) Pending" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              The Unseen Challenges in Modern Radiology
            </h2>
            <p className="text-xl text-muted-foreground">
              Healthcare systems worldwide are struggling with unprecedented diagnostic demands, 
              while radiologists face increasing pressure to maintain accuracy and speed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problemStats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {item.stat}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive XAI Demo Section */}
      <section className="py-24">
        <div className="container">
          <InteractiveXAIDemo />
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Your Intelligent Co-Pilot for Diagnostic Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Skolyn augments human expertise with transparent AI, ensuring you never miss critical findings 
              while maintaining full diagnostic control.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <Badge variant="secondary">{feature.stat}</Badge>
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Diagnostic Workflow?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join leading healthcare institutions worldwide who trust Skolyn to augment 
              their diagnostic capabilities with transparent, explainable AI.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule Your Personalized Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">Skolyn</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Augmenting diagnostic excellence through transparent AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">XAI Technology</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integration</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Radiology Departments</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Hospital Networks</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Teleradiology</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Skolyn. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}