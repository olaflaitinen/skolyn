'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Metro General Hospital: 60% Reduction in Turnaround Time',
    excerpt: 'How a 500-bed hospital transformed their radiology workflow with AI-powered diagnostics, achieving faster reporting without compromising accuracy.',
    organization: 'Metro General Hospital',
    location: 'Atlanta, GA',
    size: '500 beds, 8 radiologists',
    industry: 'Academic Medical Center',
    publishedAt: '2024-12-01',
    metrics: [
      { label: 'Turnaround Time', value: '60% reduction', icon: Clock },
      { label: 'Case Volume', value: '200% increase', icon: TrendingUp },
      { label: 'Accuracy', value: '94% maintained', icon: CheckCircle },
      { label: 'Staff Satisfaction', value: '45% improvement', icon: Users }
    ],
    challenges: [
      'Overwhelming case volumes leading to delayed reports',
      'Radiologist burnout and turnover',
      'Pressure to reduce costs while maintaining quality',
      'Need for 24/7 preliminary coverage'
    ],
    solutions: [
      'Implemented Skolyn AI for chest X-ray and CT analysis',
      'Integrated with existing PACS workflow',
      'Trained staff on XAI interpretation',
      'Established quality assurance protocols'
    ],
    results: [
      'Reduced average turnaround time from 48 hours to 18 hours',
      'Increased case throughput by 200% without additional staff',
      'Improved radiologist satisfaction scores by 45%',
      'Detected 23% more incidental findings',
      'Achieved ROI within 8 months'
    ],
    slug: 'metro-general-hospital-turnaround-time',
    featured: true
  },
  {
    id: 2,
    title: 'HealthSystem Regional: Network-Wide AI Deployment Success',
    excerpt: 'A 15-hospital network standardized diagnostic protocols and achieved unprecedented efficiency through centralized AI implementation.',
    organization: 'HealthSystem Regional',
    location: 'Multi-State Network',
    size: '15 hospitals, 45 radiologists',
    industry: 'Healthcare Network',
    publishedAt: '2024-11-15',
    metrics: [
      { label: 'Network Efficiency', value: '35% improvement', icon: TrendingUp },
      { label: 'Cost Savings', value: '$2.3M annually', icon: Building2 },
      { label: 'Uptime', value: '99.5%', icon: CheckCircle },
      { label: 'Standardization', value: '100% protocols', icon: Users }
    ],
    challenges: [
      'Inconsistent diagnostic protocols across facilities',
      'Uneven workload distribution',
      'High operational costs',
      'Difficulty maintaining quality standards'
    ],
    solutions: [
      'Deployed Skolyn AI across all 15 facilities',
      'Implemented centralized management dashboard',
      'Standardized workflows and protocols',
      'Established network-wide quality metrics'
    ],
    results: [
      'Standardized diagnostic protocols across all facilities',
      'Improved radiologist utilization by 60%',
      'Reduced operational costs by $2.3M annually',
      'Achieved 99.5% network uptime',
      'Enhanced patient satisfaction scores'
    ],
    slug: 'healthsystem-regional-network-deployment',
    featured: true
  },
  {
    id: 3,
    title: 'Global Teleradiology Partners: Scaling Worldwide Operations',
    excerpt: 'International teleradiology provider enhanced global services with AI-powered preliminary reads and 24/7 quality assurance.',
    organization: 'Global Teleradiology Partners',
    location: 'Worldwide Operations',
    size: '150 radiologists, 50K studies/month',
    industry: 'Teleradiology Services',
    publishedAt: '2024-10-30',
    metrics: [
      { label: 'Capacity', value: '200% increase', icon: TrendingUp },
      { label: 'Response Time', value: '18 minutes avg', icon: Clock },
      { label: 'Accuracy', value: '99.5%', icon: CheckCircle },
      { label: 'Client Satisfaction', value: '40% improvement', icon: Users }
    ],
    challenges: [
      'Increasing demand for rapid turnaround times',
      'Global time zone coverage requirements',
      'Maintaining quality across diverse case types',
      'Competitive pressure from other providers'
    ],
    solutions: [
      'Integrated AI for preliminary reads',
      'Implemented intelligent case prioritization',
      'Deployed 24/7 quality monitoring',
      'Established client-specific workflows'
    ],
    results: [
      'Reduced turnaround time from 45 to 18 minutes',
      'Increased capacity by 200% without new hires',
      'Improved client satisfaction by 40%',
      'Reduced critical finding miss rate by 65%',
      'Achieved 24/7 global coverage'
    ],
    slug: 'global-teleradiology-partners-scaling',
    featured: false
  },
  {
    id: 4,
    title: 'Regional Cancer Center: Early Detection Breakthrough',
    excerpt: 'Specialized cancer center leveraged AI to improve early detection rates and reduce diagnostic delays for oncology patients.',
    organization: 'Regional Cancer Center',
    location: 'Phoenix, AZ',
    size: '200 beds, Oncology Focus',
    industry: 'Specialized Cancer Care',
    publishedAt: '2024-10-15',
    metrics: [
      { label: 'Early Detection', value: '30% improvement', icon: TrendingUp },
      { label: 'Diagnostic Delay', value: '50% reduction', icon: Clock },
      { label: 'Patient Outcomes', value: '25% better', icon: CheckCircle },
      { label: 'Screening Efficiency', value: '3x faster', icon: Users }
    ],
    challenges: [
      'Need for earlier cancer detection',
      'High-volume screening programs',
      'Specialist radiologist shortage',
      'Complex oncological imaging'
    ],
    solutions: [
      'Deployed AI for lung cancer screening',
      'Implemented automated nodule tracking',
      'Integrated with oncology workflows',
      'Established multidisciplinary review process'
    ],
    results: [
      'Improved early-stage detection by 30%',
      'Reduced time to diagnosis by 50%',
      'Enhanced patient survival rates by 25%',
      'Tripled screening program efficiency',
      'Reduced radiologist workload by 40%'
    ],
    slug: 'regional-cancer-center-early-detection',
    featured: false
  }
]

const industries = ['All', 'Academic Medical Center', 'Healthcare Network', 'Teleradiology Services', 'Specialized Cancer Care']

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.organization.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry
    
    return matchesSearch && matchesIndustry
  })

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured)
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured)

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
                <Building2 className="mr-2 h-3 w-3" />
                Real Results
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                <span className="text-primary">Success Stories</span> from Healthcare Leaders
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how leading healthcare organizations have transformed their operations 
                with Skolyn AI diagnostic solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container pb-24">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
                className="text-sm"
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{study.industry}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        <Link 
                          href={`/resources/case-studies/${study.slug}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {study.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.excerpt}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {study.organization}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {study.location}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{study.size}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.metrics.slice(0, 4).map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                            <metric.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                            <div className="text-lg font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          {new Date(study.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/resources/case-studies/${study.slug}`}>
                            Read Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Case Studies */}
        {regularCaseStudies.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">All Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <Badge variant="outline" className="w-fit mb-4">
                        {study.industry}
                      </Badge>
                      
                      <h3 className="text-xl font-semibold mb-3 leading-tight">
                        <Link 
                          href={`/resources/case-studies/${study.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {study.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                        {study.excerpt}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Building2 className="h-3 w-3" />
                          {study.organization}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {study.location}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {study.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="text-center p-2 bg-muted/50 rounded">
                            <div className="text-sm font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <Calendar className="inline h-3 w-3 mr-1" />
                          {new Date(study.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/resources/case-studies/${study.slug}`}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or selected industry.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedIndustry('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join these leading healthcare organizations and transform your operations with Skolyn AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}