import Link from 'next/link'
import { TrustBadge } from '@/components/ui/trust-badge'

const footerSections = {
  platform: {
    title: 'Platform',
    links: [
      { title: 'XAI Technology', href: '/platform#xai' },
      { title: 'Integration', href: '/platform#integration' },
      { title: 'Security', href: '/platform#security' },
      { title: 'API Documentation', href: '/platform#api' },
    ]
  },
  solutions: {
    title: 'Solutions',
    links: [
      { title: 'Radiology Departments', href: '/solutions/radiology-departments' },
      { title: 'Hospital Networks', href: '/solutions/hospital-networks' },
      { title: 'Teleradiology Providers', href: '/solutions/teleradiology-providers' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/resources/blog' },
      { title: 'Case Studies', href: '/resources/case-studies' },
      { title: 'Whitepapers', href: '/resources/whitepapers' },
      { title: 'Webinars', href: '/resources/webinars' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/company/about-us' },
      { title: 'Careers', href: '/company/careers' },
      { title: 'Press', href: '/company/press' },
      { title: 'Contact', href: '/contact' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/legal/privacy-policy' },
      { title: 'Terms of Service', href: '/legal/terms-of-service' },
      { title: 'HIPAA Compliance', href: '/legal/hipaa-compliance' },
      { title: 'GDPR Compliance', href: '/legal/gdpr-compliance' },
    ]
  }
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">Skolyn</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Augmenting diagnostic excellence through transparent AI technology. 
              Empowering radiologists with explainable AI for better patient outcomes.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <TrustBadge icon="shield" text="HIPAA Compliant" />
              <TrustBadge icon="shield" text="GDPR Compliant" />
              <TrustBadge icon="award" text="Peer-Reviewed Research" />
              <TrustBadge icon="check" text="FDA 510(k) Pending" />
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href} 
                      className="hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2025 Skolyn. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
            <p className="max-w-4xl">
              <strong>Important:</strong> Skolyn is an AI-powered diagnostic assistance tool designed to augment, 
              not replace, professional medical judgment. All diagnostic decisions should be made by qualified 
              healthcare professionals. This software is for investigational use only and has not been cleared 
              or approved by the FDA for diagnostic use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}