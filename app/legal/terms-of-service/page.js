'use client'

import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Scale, 
  FileText, 
  Shield, 
  AlertCircle,
  Calendar,
  CheckCircle
} from 'lucide-react'

const sections = [
  {
    id: 'acceptance-terms',
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    content: `
      <p>By accessing and using the Skolyn medical AI diagnostic platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h4>Agreement Scope</h4>
      <p>These Terms of Service ("Terms") govern your use of our Service operated by Skolyn AB ("us", "we", or "our"). This includes:</p>
      <ul>
        <li>Access to our AI diagnostic platform and related services</li>
        <li>Use of our explainable AI models and analysis tools</li>
        <li>Integration with your existing healthcare systems</li>
        <li>Access to support, training, and documentation</li>
      </ul>
      
      <h4>Professional Use Only</h4>
      <p>Our Service is intended exclusively for use by qualified healthcare professionals and authorized healthcare institutions. By using our Service, you represent that you are:</p>
      <ul>
        <li>A licensed healthcare professional or authorized institutional user</li>
        <li>Using the Service in accordance with applicable healthcare regulations</li>
        <li>Responsible for all clinical decisions and patient care</li>
      </ul>
    `
  },
  {
    id: 'use-license',
    title: 'Use License & Restrictions',
    icon: Scale,
    content: `
      <h4>License Grant</h4>
      <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our Service for your professional healthcare activities.</p>
      
      <h4>Permitted Uses</h4>
      <ul>
        <li>Clinical diagnostic support and analysis</li>
        <li>Integration with authorized healthcare systems</li>
        <li>Professional education and training purposes</li>
        <li>Quality assurance and workflow optimization</li>
      </ul>
      
      <h4>Prohibited Uses</h4>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
        <li>Attempt to reverse engineer, decompile, or disassemble our AI models</li>
        <li>Use the Service to provide unauthorized diagnostic services</li>
        <li>Share access credentials with unauthorized personnel</li>
        <li>Use the Service in any manner that could damage or impair our systems</li>
      </ul>
      
      <h4>Clinical Responsibility</h4>
      <p><strong>Important:</strong> Our Service provides diagnostic assistance and should not replace professional medical judgment. Healthcare professionals remain fully responsible for all clinical decisions and patient care.</p>
    `
  },
  {
    id: 'data-privacy',
    title: 'Data Handling & Privacy',
    icon: Shield,
    content: `
      <h4>Data Protection</h4>
      <p>We are committed to protecting the privacy and security of all data processed through our Service, including Protected Health Information (PHI).</p>
      
      <h4>HIPAA Compliance</h4>
      <p>For healthcare providers subject to HIPAA:</p>
      <ul>
        <li>We serve as a Business Associate under HIPAA regulations</li>
        <li>A separate Business Associate Agreement (BAA) governs PHI handling</li>
        <li>We implement appropriate technical and administrative safeguards</li>
        <li>Data is encrypted in transit and at rest using industry-standard methods</li>
      </ul>
      
      <h4>Data Retention</h4>
      <p>We retain data only as necessary to provide our Service and comply with legal requirements:</p>
      <ul>
        <li>Medical imaging data is processed and returned without permanent storage</li>
        <li>Aggregated, anonymized data may be retained for service improvement</li>
        <li>Audit logs are maintained per healthcare compliance requirements</li>
      </ul>
      
      <h4>International Data Transfers</h4>
      <p>Data processing occurs within secure, compliant data centers. Cross-border transfers are conducted in accordance with applicable privacy laws including GDPR.</p>
    `
  },
  {
    id: 'service-availability',
    title: 'Service Availability & Support',
    icon: FileText,
    content: `
      <h4>Service Level</h4>
      <p>We strive to maintain high availability of our Service:</p>
      <ul>
        <li>Target uptime of 99.9% for production services</li>
        <li>Regular maintenance windows with advance notice</li>
        <li>24/7 technical support for critical issues</li>
        <li>Disaster recovery and business continuity planning</li>
      </ul>
      
      <h4>Service Modifications</h4>
      <p>We may modify or discontinue the Service with reasonable notice:</p>
      <ul>
        <li>Feature updates and improvements</li>
        <li>Security patches and compliance updates</li>
        <li>Changes to pricing or service tiers</li>
        <li>Discontinuation of legacy features or integrations</li>
      </ul>
      
      <h4>User Responsibilities</h4>
      <p>To ensure optimal service performance, users must:</p>
      <ul>
        <li>Maintain compatible systems and network connectivity</li>
        <li>Follow integration guidelines and best practices</li>
        <li>Report technical issues promptly</li>
        <li>Participate in scheduled maintenance activities</li>
      </ul>
    `
  },
  {
    id: 'liability-disclaimers',
    title: 'Liability & Disclaimers',
    icon: AlertCircle,
    content: `
      <h4>Service Disclaimer</h4>
      <p><strong>IMPORTANT MEDICAL DISCLAIMER:</strong> Our Service provides diagnostic assistance tools and should not be used as the sole basis for clinical decisions. Healthcare professionals must:</p>
      <ul>
        <li>Exercise independent clinical judgment</li>
        <li>Verify AI-generated findings through appropriate clinical evaluation</li>
        <li>Consider patient history, symptoms, and other clinical factors</li>
        <li>Follow established medical standards and protocols</li>
      </ul>
      
      <h4>Limitation of Liability</h4>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>We provide the Service "as is" without warranties of any kind</li>
        <li>We disclaim all warranties, express or implied, including merchantability and fitness for purpose</li>
        <li>Our total liability shall not exceed the amount paid for the Service in the preceding 12 months</li>
        <li>We are not liable for indirect, consequential, or punitive damages</li>
      </ul>
      
      <h4>Indemnification</h4>
      <p>You agree to indemnify and hold us harmless from claims arising from:</p>
      <ul>
        <li>Your use of the Service in violation of these Terms</li>
        <li>Clinical decisions made using our diagnostic assistance</li>
        <li>Violation of applicable laws or regulations</li>
        <li>Infringement of third-party rights</li>
      </ul>
      
      <h4>Regulatory Compliance</h4>
      <p>Users are responsible for ensuring their use of the Service complies with all applicable healthcare regulations, including but not limited to FDA requirements, local medical device regulations, and professional licensing requirements.</p>
    `
  },
  {
    id: 'termination-governing-law',
    title: 'Termination & Governing Law',
    icon: Scale,
    content: `
      <h4>Termination</h4>
      <p>Either party may terminate this agreement:</p>
      <ul>
        <li>With 30 days written notice for convenience</li>
        <li>Immediately for material breach of terms</li>
        <li>Immediately if required by regulatory authorities</li>
        <li>Upon insolvency or cessation of business operations</li>
      </ul>
      
      <h4>Effect of Termination</h4>
      <p>Upon termination:</p>
      <ul>
        <li>Access to the Service will be discontinued</li>
        <li>Data will be returned or destroyed per agreement terms</li>
        <li>Outstanding fees remain due and payable</li>
        <li>Confidentiality obligations survive termination</li>
      </ul>
      
      <h4>Governing Law</h4>
      <p>These Terms are governed by the laws of Sweden, without regard to conflict of law principles. Any disputes shall be resolved through:</p>
      <ul>
        <li>Good faith negotiations between the parties</li>
        <li>Mediation through agreed mediator if negotiations fail</li>
        <li>Binding arbitration under Swedish Arbitration Act</li>
        <li>Jurisdiction of Swedish courts for matters not subject to arbitration</li>
      </ul>
      
      <h4>Severability</h4>
      <p>If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
      
      <h4>Entire Agreement</h4>
      <p>These Terms, together with our Privacy Policy and any applicable service agreements, constitute the entire agreement between you and Skolyn regarding the Service.</p>
    `
  }
]

export default function TermsOfServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Scale className="mr-2 h-3 w-3" />
              Legal Documentation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              These terms govern your use of Skolyn's AI diagnostic platform. Please read carefully 
              as they contain important information about your rights and responsibilities.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Version 2.1</span>
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

      {/* Terms Sections */}
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
                <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@skolyn.se</p>
                  <p><strong>Address:</strong> Skolyn AB, Stockholm, Sweden</p>
                  <p><strong>Phone:</strong> +46 (0) 8-123-4567</p>
                </div>
              </div>
            </Card>

            {/* Medical Disclaimer */}
            <Card className="p-8 bg-orange-50 border-orange-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">
                    Important Medical Disclaimer
                  </h3>
                  <p className="text-orange-700 leading-relaxed">
                    Skolyn AI diagnostic tools are designed to assist healthcare professionals and should not be used 
                    as the sole basis for clinical decisions. All diagnostic interpretations must be verified by 
                    qualified healthcare professionals in accordance with established medical standards and protocols. 
                    Healthcare providers remain fully responsible for patient care and clinical outcomes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}