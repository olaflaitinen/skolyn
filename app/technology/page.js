'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Microscope,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
  Download,
  Eye,
  Layers,
  Zap
} from 'lucide-react'

const aiModels = [
  {
    name: 'SkolynVision-Chest',
    accuracy: 94,
    description: 'Specialized for chest X-ray analysis including nodule detection, cardiomegaly, and pleural effusions.',
    pathologies: ['Pulmonary Nodules', 'Cardiomegaly', 'Pleural Effusion', 'Pneumothorax'],
    datasetSize: '1.2M images',
    validation: 'Multi-center validation across 15 hospitals'
  },
  {
    name: 'SkolynVision-CT',
    accuracy: 91,
    description: 'Advanced CT scan analysis for abdominal and thoracic imaging with 3D volumetric assessment.',
    pathologies: ['Liver Lesions', 'Lung Nodules', 'Kidney Stones', 'Abdominal Masses'],
    datasetSize: '800K scans',
    validation: 'Validated against radiologist consensus'
  },
  {
    name: 'SkolynVision-MRI',
    accuracy: 89,
    description: 'Brain MRI analysis for neurological conditions and structural abnormalities.',
    pathologies: ['Brain Tumors', 'Stroke', 'Multiple Sclerosis', 'Vascular Abnormalities'],
    datasetSize: '600K studies',
    validation: 'Clinical trial validated'
  }
]

const technologyStack = [
  {
    icon: Brain,
    title: 'Deep Learning Architecture',
    description: 'State-of-the-art convolutional neural networks optimized for medical imaging analysis.',
    details: ['ResNet-152 backbone', 'Attention mechanisms', 'Multi-scale feature extraction']
  },
  {
    icon: Eye,
    title: 'Explainable AI (XAI)',
    description: 'Grad-CAM and LIME-based visualization for transparent decision-making.',
    details: ['Gradient-weighted Class Activation Mapping', 'Local interpretable explanations', 'Feature importance scoring']
  },
  {
    icon: Database,
    title: 'Data Pipeline',
    description: 'Robust data processing pipeline with automated quality control and bias detection.',
    details: ['DICOM preprocessing', 'Data augmentation', 'Bias mitigation algorithms']
  },
  {
    icon: Zap,
    title: 'Inference Engine',
    description: 'Optimized inference engine for real-time analysis with GPU acceleration.',
    details: ['TensorRT optimization', 'Model quantization', 'Edge deployment ready']
  }
]

const researchMetrics = [
  { metric: 'Peer-Reviewed Papers', value: '23', growth: '+8 this year' },
  { metric: 'Clinical Trials', value: '5', growth: 'Ongoing' },
  { metric: 'Research Partnerships', value: '12', growth: 'Top institutions' },
  { metric: 'Dataset Size', value: '2.6M+', growth: 'Growing daily' }
]

const publications = [
  {
    title: 'Explainable AI for Chest X-ray Analysis: A Multi-Center Validation Study',
    journal: 'Nature Digital Medicine',
    year: '2024',
    impact: 'High Impact',
    authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, et al.'
  },
  {
    title: 'Bias Mitigation in Medical AI: A Comprehensive Framework',
    journal: 'Journal of Medical Internet Research',
    year: '2024',
    impact: 'Q1 Journal',
    authors: 'Dr. Lisa Wang, Dr. James Thompson, et al.'
  },
  {
    title: 'Real-time Pulmonary Nodule Detection with Uncertainty Quantification',
    journal: 'Medical Image Analysis',
    year: '2023',
    impact: 'Top Tier',
    authors: 'Dr. Ahmed Hassan, Dr. Emily Foster, et al.'
  }
]

export default function TechnologyPage() {
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
                Cutting-Edge AI Technology
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
                The Science of <span className="text-primary">Transparent AI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover the advanced AI technology powering Skolyn's diagnostic capabilities, 
                built on years of research and validated across multiple clinical settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  Technical Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Research Papers
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-24 bg-muted/30" id="models">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              AI Model Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized AI models trained on diverse, high-quality medical datasets 
              with rigorous validation protocols.
            </p>
          </div>

          <div className="space-y-8">
            {aiModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold">{model.name}</h3>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {model.accuracy}% Accuracy
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {model.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Detected Pathologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {model.pathologies.map((pathology, i) => (
                              <Badge key={i} variant="outline" className="text-sm">
                                {pathology}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Dataset Size</p>
                            <p className="text-lg font-semibold">{model.datasetSize}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Validation</p>
                            <p className="text-lg font-semibold">{model.validation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-primary mb-2">{model.accuracy}%</div>
                        <p className="text-sm text-muted-foreground">Diagnostic Accuracy</p>
                      </div>
                      <Progress value={model.accuracy} className="h-3 mb-4" />
                      <Button variant="outline" className="w-full">
                        View Model Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24" id="pipeline">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Technology Architecture
            </h2>
            <p className="text-xl text-muted-foreground">
              Built on modern AI infrastructure with focus on performance, scalability, and interpretability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <tech.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                      <ul className="space-y-1">
                        {tech.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="py-24 bg-muted/30" id="research">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Research Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to advancing medical AI through rigorous research and clinical validation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {researchMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="font-semibold mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.growth}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Publications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Recent Publications</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                        <p className="text-muted-foreground mb-2">{pub.authors}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-medium">{pub.journal}</span>
                          <span className="text-muted-foreground">{pub.year}</span>
                          <Badge variant="secondary">{pub.impact}</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Paper
                      </Button>
                    </div>
                  </Card>
                </motion.div>
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
              Explore Our Technology
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Dive deeper into our research, access technical documentation, or collaborate with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Technical Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Research Collaboration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}