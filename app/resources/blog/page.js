'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users
} from 'lucide-react'

// Sample blog posts - in production these would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Explainable AI in Medical Imaging',
    excerpt: 'Exploring how transparent AI systems are revolutionizing diagnostic confidence and patient outcomes in radiology departments worldwide.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Medical Officer',
    publishedAt: '2024-12-15',
    readTime: '8 min read',
    category: 'AI Technology',
    tags: ['XAI', 'Medical Imaging', 'Deep Learning'],
    featured: true,
    slug: 'future-explainable-ai-medical-imaging'
  },
  {
    id: 2,
    title: 'Reducing Radiologist Burnout with AI Assistance',
    excerpt: 'How AI-powered diagnostic tools are helping radiologists manage increasing workloads while maintaining diagnostic accuracy and job satisfaction.',
    author: 'Dr. Michael Rodriguez',
    authorRole: 'Radiology Director',
    publishedAt: '2024-12-10',
    readTime: '6 min read',
    category: 'Workforce',
    tags: ['Burnout', 'Workflow', 'Radiology'],
    featured: false,
    slug: 'reducing-radiologist-burnout-ai-assistance'
  },
  {
    id: 3,
    title: 'HIPAA Compliance in AI Medical Diagnostics',
    excerpt: 'Understanding the regulatory landscape and best practices for implementing AI diagnostic tools while maintaining patient privacy and data security.',
    author: 'Lisa Wang',
    authorRole: 'Compliance Officer',
    publishedAt: '2024-12-05',
    readTime: '10 min read',
    category: 'Compliance',
    tags: ['HIPAA', 'Privacy', 'Security'],
    featured: false,
    slug: 'hipaa-compliance-ai-medical-diagnostics'
  },
  {
    id: 4,
    title: 'ROI Analysis: AI Implementation in Radiology',
    excerpt: 'A comprehensive analysis of return on investment when implementing AI diagnostic tools in hospital radiology departments.',
    author: 'James Thompson',
    authorRole: 'Healthcare Economist',
    publishedAt: '2024-11-28',
    readTime: '12 min read',
    category: 'Business',
    tags: ['ROI', 'Implementation', 'Economics'],
    featured: false,
    slug: 'roi-analysis-ai-implementation-radiology'
  },
  {
    id: 5,
    title: 'Multi-Center Validation of AI Chest X-ray Analysis',
    excerpt: 'Results from our latest research study validating AI diagnostic accuracy across diverse patient populations and imaging equipment.',
    author: 'Dr. Ahmed Hassan',
    authorRole: 'Research Director',
    publishedAt: '2024-11-20',
    readTime: '15 min read',
    category: 'Research',
    tags: ['Validation', 'Research', 'Chest X-ray'],
    featured: true,
    slug: 'multi-center-validation-ai-chest-xray'
  },
  {
    id: 6,
    title: 'Integration Guide: PACS and AI Diagnostic Tools',
    excerpt: 'A technical guide for IT administrators on seamlessly integrating AI diagnostic tools with existing PACS infrastructure.',
    author: 'Emily Foster',
    authorRole: 'Technical Director',
    publishedAt: '2024-11-15',
    readTime: '9 min read',
    category: 'Technical',
    tags: ['PACS', 'Integration', 'DICOM'],
    featured: false,
    slug: 'integration-guide-pacs-ai-diagnostic-tools'
  }
]

const categories = ['All', 'AI Technology', 'Workforce', 'Compliance', 'Business', 'Research', 'Technical']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
                <BookOpen className="mr-2 h-3 w-3" />
                Insights & Research
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                The <span className="text-primary">Skolyn Blog</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Insights, research, and best practices for implementing AI in medical imaging 
                and radiology workflows.
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
                placeholder="Search articles..."
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        <Link 
                          href={`/resources/blog/${post.slug}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/resources/blog/${post.slug}`}>
                            Read More
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

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <Badge variant="outline" className="w-fit mb-4">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-3 leading-tight">
                        <Link 
                          href={`/resources/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed flex-1 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{post.author}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/resources/blog/${post.slug}`}>
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
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
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
    </Layout>
  )
}