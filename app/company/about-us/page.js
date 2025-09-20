'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Award,
  BookOpen,
  Lightbulb,
  Shield,
  ArrowRight
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'Every feature we build is designed with patient outcomes and safety as the primary consideration.'
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'We believe in explainable AI that healthcare professionals can understand and trust.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with radiologists and healthcare institutions to build tools that truly serve their needs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of AI technology while maintaining the highest standards of medical accuracy.'
  }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    background: 'Former Chief of Radiology at Stanford Medical Center. MD from Harvard Medical School, PhD in Computer Science from MIT.',
    expertise: 'Medical AI, Radiology, Healthcare Leadership'
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Chief Technology Officer',
    background: 'Former Principal Scientist at Google Health. PhD in Machine Learning from Carnegie Mellon University.',
    expertise: 'Deep Learning, Medical Imaging, XAI'
  },
  {
    name: 'Lisa Wang',
    role: 'Chief Medical Officer',
    background: 'Board-certified radiologist with 15 years of clinical experience. Fellowship in Thoracic Imaging.',
    expertise: 'Clinical Radiology, Quality Assurance, Medical Education'
  },
  {
    name: 'Dr. Ahmed Hassan',
    role: 'Head of Research',
    background: 'Former Research Scientist at DeepMind Health. PhD in Biomedical Engineering from Johns Hopkins.',
    expertise: 'Computer Vision, Medical AI Research, Clinical Validation'
  }
]

const milestones = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Founded by a team of radiologists and AI researchers with a mission to make AI transparent and trustworthy.'
  },
  {
    year: '2022',
    title: 'First AI Model',
    description: 'Developed and validated our first chest X-ray analysis model with 94% accuracy.'
  },
  {
    year: '2023',
    title: 'Clinical Trials',
    description: 'Initiated multi-center clinical trials across 15 hospitals in North America and Europe.'
  },
  {
    year: '2024',
    title: 'FDA Submission',
    description: 'Submitted FDA 510(k) application for our AI diagnostic platform.'
  },
  {
    year: '2025',
    title: 'Commercial Launch',
    description: 'Launched commercial platform serving hospitals and radiology departments worldwide.'
  }
]

const stats = [
  { number: '50+', label: 'Healthcare Partners' },
  { number: '2.6M+', label: 'Images Analyzed' },
  { number: '23', label: 'Research Papers' },
  { number: '15', label: 'Countries Served' }
]

export default function AboutUsPage() {
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
                About Skolyn
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Pioneering <span className="text-primary">Transparent AI</span> in Healthcare
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to revolutionize medical diagnostics through explainable AI 
                that healthcare professionals can understand, trust, and rely on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To augment—not replace—the expertise of healthcare professionals with transparent AI 
                that provides clear, explainable insights into diagnostic decision-making. We believe 
                that the future of medical AI lies in collaboration between human expertise and 
                artificial intelligence.
              </p>
              <Button size="lg">
                Learn About Our Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where AI-powered medical diagnostics are universally accessible, completely 
                transparent, and trusted by healthcare professionals worldwide. We envision a future 
                where every diagnostic decision is supported by explainable AI that enhances human 
                judgment rather than obscuring it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Numbers that reflect our commitment to advancing medical AI.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

      {/* Team */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              World-class experts in AI, medicine, and healthcare technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {member.background}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.split(', ').map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
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

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform medical diagnostics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                      <Badge variant="outline">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a healthcare professional, researcher, or technology partner, 
              we'd love to work with you to advance the future of medical AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Explore Careers
                <Users className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Partnership Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}