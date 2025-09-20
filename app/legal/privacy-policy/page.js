'use client'

import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  FileText,
  Calendar
} from 'lucide-react'

const sections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: Database,
    content: `
      <h4>Personal Information</h4>
      <p>We collect information you provide directly to us, such as when you:</p>
      <ul>
        <li>Create an account or request a demo</li>
        <li>Use our AI diagnostic platform</li>
        <li>Contact us for support or information</li>
        <li>Subscribe to our newsletters or marketing communications</li>
      </ul>
      
      <h4>Medical Data</h4>
      <p>When healthcare providers use our platform, we may process protected health information (PHI) and medical imaging data in accordance with HIPAA regulations and our Business Associate Agreements.</p>
      
      <h4>Technical Information</h4>
      <p>We automatically collect certain technical information, including:</p>
      <ul>
        <li>Device and browser information</li>
        <li>IP addresses and location data</li>
        <li>Usage patterns and system performance metrics</li>
        <li>Log files and diagnostic data</li>
      </ul>
    `
  },
  {
    id: 'information-use',
    title: 'How We Use Information',
    icon: Eye,
    content: `
      <h4>Primary Uses</h4>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and improve our AI diagnostic services</li>
        <li>Process and analyze medical imaging data</li>
        <li>Communicate with users and provide customer support</li>
        <li>Ensure platform security and prevent unauthorized access</li>
      </ul>
      
      <h4>Research and Development</h4>
      <p>We may use anonymized and aggregated data to:</p>
      <ul>
        <li>Improve AI model accuracy and performance</li>
        <li>Conduct medical research and publish findings</li>
        <li>Develop new diagnostic capabilities</li>
      </ul>
      
      <h4>Legal and Compliance</h4>
      <p>We process information to comply with legal obligations, including healthcare regulations like HIPAA and GDPR.</p>
    `
  },
  {
    id: 'data-protection',
    title: 'Data Protection & Security',
    icon: Shield,
    content: `
      <h4>Security Measures</h4>
      <p>We implement comprehensive security measures including:</p>
      <ul>
        <li>End-to-end encryption (AES 256-bit) for data in transit and at rest</li>
        <li>Multi-factor authentication and access controls</li>
        <li>Regular security audits and penetration testing</li>
        <li>SOC 2 Type II compliance and monitoring</li>
      </ul>
      
      <h4>Data Minimization</h4>
      <p>We collect and process only the minimum amount of data necessary to provide our services and comply with healthcare regulations.</p>
      
      <h4>Data Retention</h4>
      <p>We retain personal data only as long as necessary for the purposes outlined in this policy or as required by applicable law. Medical data retention follows healthcare industry standards and regulatory requirements.</p>
    `
  },
  {
    id: 'sharing-disclosure',
    title: 'Information Sharing',
    icon: FileText,
    content: `
      <h4>Limited Sharing</h4>
      <p>We do not sell personal information. We may share information only in these limited circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
        <li><strong>Healthcare Partners:</strong> With healthcare institutions as part of our diagnostic services</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
      </ul>
      
      <h4>Research Collaboration</h4>
      <p>For medical research purposes, we may share anonymized and aggregated data with academic institutions and research partners, always in compliance with applicable privacy laws.</p>
      
      <h4>Business Transfers</h4>
      <p>In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction, subject to the same privacy protections.</p>
    `
  },
  {
    id: 'user-rights',
    title: 'Your Rights & Choices',
    icon: Lock,
    content: `
      <h4>Access and Control</h4>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate or incomplete data</li>
        <li>Request deletion of your data (subject to legal requirements)</li>
        <li>Object to or restrict certain processing activities</li>
      </ul>
      
      <h4>Healthcare Provider Rights</h4>
      <p>Healthcare providers have additional rights regarding PHI, including:</p>
      <ul>
        <li>Right to audit data processing activities</li>
        <li>Right to receive data breach notifications</li>
        <li>Right to terminate data processing agreements</li>
      </ul>
      
      <h4>Communication Preferences</h4>
      <p>You can opt out of marketing communications at any time by using the unsubscribe link in emails or contacting us directly.</p>
    `
  }
]

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Shield className="mr-2 h-3 w-3" />
              Legal Documentation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your privacy and data security are fundamental to our mission. This policy explains 
              how we collect, use, and protect your information in accordance with healthcare 
              regulations and privacy laws.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA & GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-sm"
                  >
                    <section.icon className="h-4 w-4 text-primary" />
                    <span>{index + 1}. {section.title}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id}>
                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div 
                    className="prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    style={{
                      '--tw-prose-headings': 'hsl(var(--foreground))',
                      '--tw-prose-body': 'hsl(var(--muted-foreground))',
                      '--tw-prose-lists': 'hsl(var(--muted-foreground))',
                    }}
                  />
                </Card>
              </div>
            ))}

            {/* Contact Information */}
            <Card className="p-8 bg-muted/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact our Privacy Officer.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@skolyn.se</p>
                  <p><strong>Address:</strong> Skolyn AB, Stockholm, Sweden</p>
                  <p><strong>Phone:</strong> +46 (0) 8-123-4567</p>
                </div>
              </div>
            </Card>

            {/* Compliance Badges */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Shield className="mr-2 h-4 w-4" />
                  HIPAA Compliant
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Shield className="mr-2 h-4 w-4" />
                  GDPR Compliant
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Shield className="mr-2 h-4 w-4" />
                  SOC 2 Type II
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}