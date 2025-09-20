'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  FileText, 
  Download,
  Lock,
  Search,
  Calendar,
  User,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const whitePapers = [
  {
    id: 1,
    title: 'The Complete Guide to Explainable AI in Medical Imaging',
    description: 'A comprehensive technical guide covering XAI implementation, benefits, and best practices for healthcare organizations.',
    abstract: 'This whitepaper provides healthcare leaders with a detailed roadmap for implementing explainable AI in medical imaging workflows. Topics include technical architecture, integration strategies, compliance considerations, and ROI analysis.',
    pages: 42,
    publishedAt: '2024-12-01',
    author: 'Dr. Sarah Chen, CTO',
    category: 'AI Technology',
    downloadCount: '2,847',
    slug: 'explainable-ai-medical-imaging-guide',
    gated: true,
    featured: true
  },
  {
    id: 2,
    title: 'HIPAA Compliance for AI Diagnostic Systems',
    description: 'Essential compliance framework for healthcare organizations implementing AI diagnostic tools while maintaining patient privacy.',
    abstract: 'A detailed analysis of HIPAA requirements for AI systems in healthcare, including technical safeguards, administrative protocols, and audit procedures for maintaining compliance.',
    pages: 28,
    publishedAt: '2024-11-15',
    author: 'Lisa Wang, Chief Compliance Officer',
    category: 'Compliance',
    downloadCount: '1,923',
    slug: 'hipaa-compliance-ai-diagnostics',
    gated: true,
    featured: true
  },
  {
    id: 3,
    title: 'ROI Analysis: AI Implementation in Radiology Departments',
    description: 'Financial analysis framework for calculating return on investment for AI diagnostic tool implementation.',
    abstract: 'This paper presents a comprehensive methodology for evaluating the financial impact of AI diagnostic tools, including cost-benefit analysis, productivity metrics, and implementation timelines.',
    pages: 35,
    publishedAt: '2024-10-30',
    author: 'Dr. Michael Rodriguez, Healthcare Economist',
    category: 'Business',
    downloadCount: '3,156',
    slug: 'roi-analysis-ai-radiology',
    gated: true,
    featured: false
  },
  {
    id: 4,
    title: 'Multi-Center Validation Study: AI Chest X-ray Analysis',
    description: 'Research findings from our comprehensive validation study across 15 medical centers worldwide.',
    abstract: 'Results from the largest multi-center validation study of AI chest X-ray analysis, including accuracy metrics, bias analysis, and real-world performance data.',
    pages: 18,
    publishedAt: '2024-10-15',
    author: 'Dr. Ahmed Hassan, Research Director',
    category: 'Research',
    downloadCount: '1,647',
    slug: 'multi-center-validation-chest-xray',
    gated: true,
    featured: false
  },
  {
    id: 5,
    title: 'Integration Architecture: PACS and AI Diagnostic Tools',
    description: 'Technical guide for IT administrators on seamlessly integrating AI tools with existing healthcare infrastructure.',
    abstract: 'Detailed technical specifications and best practices for integrating AI diagnostic tools with PACS, RIS, and EMR systems, including DICOM workflows and security considerations.',
    pages: 31,
    publishedAt: '2024-09-20',
    author: 'Emily Foster, Technical Director',
    category: 'Technical',
    downloadCount: '2,234',
    slug: 'integration-architecture-pacs-ai',
    gated: true,
    featured: false
  }
]

const categories = ['All', 'AI Technology', 'Compliance', 'Business', 'Research', 'Technical']

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPaper, setSelectedPaper] = useState(null)
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  })

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = searchTerm === '' || 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPapers = filteredPapers.filter(paper => paper.featured)
  const regularPapers = filteredPapers.filter(paper => !paper.featured)

  const handleDownloadRequest = (paper) => {
    setSelectedPaper(paper)
    setShowDownloadForm(true)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Download request:', { paper: selectedPaper, formData })
    
    // Simulate download
    alert(`Thank you! The whitepaper "${selectedPaper.title}" will be sent to ${formData.email}`)
    setShowDownloadForm(false)
    setSelectedPaper(null)
    setFormData({ firstName: '', lastName: '', email: '', company: '', role: '' })
  }

  if (showDownloadForm && selectedPaper) {
    return (
      <Layout>
        <div className="min-h-screen py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h1 className="text-2xl font-bold mb-2">Download Whitepaper</h1>
                  <p className="text-muted-foreground">{selectedPaper.title}</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      placeholder="e.g., Radiologist, CIO, IT Manager"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowDownloadForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
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
                <FileText className="mr-2 h-3 w-3" />
                Technical Resources
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                <span className="text-primary">Whitepapers</span> & Research
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                In-depth technical guides, research findings, and best practices for implementing 
                AI diagnostic solutions in healthcare environments.
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
                placeholder="Search whitepapers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Whitepapers */}
        {featuredPapers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Whitepapers</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{paper.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                        {paper.gated && (
                          <Badge variant="outline" className="text-orange-600">
                            <Lock className="mr-1 h-3 w-3" />
                            Gated
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {paper.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {paper.description}
                      </p>
                      
                      <div className="bg-muted/50 p-4 rounded-lg mb-6">
                        <p className="text-sm italic leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{paper.pages}</div>
                          <div className="text-xs text-muted-foreground">Pages</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{paper.downloadCount}</div>
                          <div className="text-xs text-muted-foreground">Downloads</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">
                            {new Date(paper.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                          <div className="text-xs text-muted-foreground">Published</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {paper.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(paper.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          className="w-full"
                          onClick={() => handleDownloadRequest(paper)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Whitepapers */}
        {regularPapers.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">All Whitepapers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{paper.category}</Badge>
                        {paper.gated && (
                          <Badge variant="outline" className="text-orange-600 text-xs">
                            <Lock className="mr-1 h-2 w-2" />
                            Gated
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 leading-tight">
                        {paper.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                        {paper.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4 text-center">
                        <div className="bg-muted/50 p-2 rounded">
                          <div className="text-sm font-bold text-primary">{paper.pages}</div>
                          <div className="text-xs text-muted-foreground">Pages</div>
                        </div>
                        <div className="bg-muted/50 p-2 rounded">
                          <div className="text-sm font-bold text-primary">{paper.downloadCount}</div>
                          <div className="text-xs text-muted-foreground">Downloads</div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1 mb-1">
                          <User className="h-3 w-3" />
                          {paper.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(paper.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleDownloadRequest(paper)}
                      >
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPapers.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No whitepapers found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or selected category.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
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
              Stay Ahead with Our Research
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get access to the latest research, technical guides, and industry insights from our team of experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Contact Research Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}