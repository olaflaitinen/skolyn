'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Rocket, 
  Heart, 
  Globe, 
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Mail,
  Coffee,
  Laptop,
  Award,
  TrendingUp
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Patient Impact',
    description: 'Every line of code we write has the potential to save lives and improve patient outcomes.'
  },
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description: 'We believe diverse perspectives and open collaboration drive the best innovations.'
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'The medical AI field evolves rapidly, and we invest heavily in our team\'s growth.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our work reaches healthcare providers and patients around the world.'
  }
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Top-tier salaries plus equity participation in our mission'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and work-life balance'
  },
  {
    icon: Laptop,
    title: 'Equipment & Tools',
    description: 'Latest hardware and software tools to do your best work'
  },
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description: 'Conference attendance, courses, and continuous learning budget'
  },
  {
    icon: Award,
    title: 'Stock Options',
    description: 'Equity participation in the future success of the company'
  }
]

const openPositions = [
  {
    id: 1,
    title: 'Senior AI Research Engineer',
    department: 'Engineering',
    location: 'Stockholm, Sweden / Remote',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Lead development of next-generation medical AI models with focus on explainability and clinical validation.',
    requirements: [
      'PhD in Computer Science, Machine Learning, or related field',
      '5+ years experience in deep learning and computer vision',
      'Experience with medical imaging and DICOM standards',
      'Strong Python programming skills and ML frameworks (PyTorch, TensorFlow)',
      'Publications in top-tier AI/ML conferences preferred'
    ],
    responsibilities: [
      'Design and implement explainable AI models for medical imaging',
      'Collaborate with clinical partners on model validation',
      'Lead research initiatives and publish findings',
      'Mentor junior researchers and engineers'
    ],
    slug: 'senior-ai-research-engineer'
  },
  {
    id: 2,
    title: 'Full-Stack Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Build and scale our medical AI platform, working across the full technology stack from backend APIs to frontend interfaces.',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years full-stack development experience',
      'Proficiency in JavaScript/TypeScript, React, Node.js',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Knowledge of healthcare data standards (DICOM, HL7) is a plus'
    ],
    responsibilities: [
      'Develop and maintain platform frontend and backend systems',
      'Implement HIPAA-compliant data handling and security measures',
      'Collaborate with AI team to integrate ML models into production',
      'Build scalable APIs and user interfaces for healthcare professionals'
    ],
    slug: 'full-stack-software-engineer'
  },
  {
    id: 3,
    title: 'Clinical Affairs Manager',
    department: 'Clinical',
    location: 'Stockholm, Sweden',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Lead clinical validation studies and regulatory affairs for our AI diagnostic products.',
    requirements: [
      'MD or equivalent medical degree',
      'Board certification in Radiology preferred',
      '5+ years clinical research experience',
      'Experience with FDA regulatory processes',
      'Strong project management and communication skills'
    ],
    responsibilities: [
      'Design and execute clinical validation studies',
      'Manage regulatory submissions and FDA interactions',
      'Collaborate with clinical partners and KOLs',
      'Develop clinical evidence and publication strategy'
    ],
    slug: 'clinical-affairs-manager'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Build and maintain secure, scalable infrastructure for our medical AI platform with focus on compliance and reliability.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years DevOps/Infrastructure experience',
      'Experience with Kubernetes, Docker, and cloud platforms',
      'Knowledge of HIPAA compliance and healthcare security requirements',
      'Strong scripting skills (Python, Bash, etc.)'
    ],
    responsibilities: [
      'Manage cloud infrastructure and deployment pipelines',
      'Implement security and compliance monitoring',
      'Optimize system performance and reliability',
      'Automate deployment and scaling processes'
    ],
    slug: 'devops-engineer'
  },
  {
    id: 5,
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'Stockholm, Sweden / Remote',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Drive go-to-market strategy and positioning for our medical AI products, working closely with clinical and sales teams.',
    requirements: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      '3+ years product marketing experience, preferably in healthcare/medical devices',
      'Strong understanding of healthcare decision-making processes',
      'Excellent communication and presentation skills',
      'Experience with B2B healthcare sales cycles'
    ],
    responsibilities: [
      'Develop product positioning and messaging strategies',
      'Create marketing materials and sales enablement content',
      'Conduct competitive analysis and market research',
      'Support sales team with customer presentations and demos'
    ],
    slug: 'product-marketing-manager'
  }
]

export default function CareersPage() {
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
                Join Our Mission
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                Shape the Future of <span className="text-primary">Medical AI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join a team of world-class researchers, engineers, and healthcare professionals 
                building AI solutions that save lives and improve patient outcomes globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Recruiting
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our work and unite our team in pursuing our mission.
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

      {/* Benefits */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer competitive benefits and a supportive environment where you can do your best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our growing team and help us revolutionize medical diagnostics with AI.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.experience}</Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {position.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Key Requirements</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {position.requirements.slice(0, 3).map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {position.responsibilities.slice(0, 3).map((resp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <Button className="w-full mb-3">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see the right position? We're always looking for exceptional talent.
            </p>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join us in building the future of medical AI and help improve healthcare outcomes for millions of patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                View All Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Contact Recruiting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}