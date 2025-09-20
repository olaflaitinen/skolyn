'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SkolynLogo } from '@/components/ui/logo'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = {
  platform: {
    title: 'Platform',
    href: '/platform',
    description: 'Explore our AI-powered diagnostic platform',
    items: [
      { title: 'XAI Technology', href: '/platform#xai', description: 'Explainable AI for medical imaging' },
      { title: 'Integration', href: '/platform#integration', description: 'Seamless PACS & RIS integration' },
      { title: 'Security & Compliance', href: '/platform/security-and-compliance', description: 'HIPAA & GDPR compliance' },
    ]
  },
  technology: {
    title: 'Technology',
    href: '/technology',
    description: 'Deep dive into our AI technology',
    items: [
      { title: 'Explainable AI', href: '/technology/explainable-ai', description: 'Transparent AI decision-making' },
      { title: 'AI Models', href: '/technology#models', description: 'Our diagnostic AI models' },
      { title: 'Data Pipeline', href: '/technology#pipeline', description: 'Secure data processing' },
      { title: 'Research', href: '/technology#research', description: 'Latest research & publications' },
    ]
  },
  solutions: {
    title: 'Solutions',
    href: '/solutions',
    description: 'Tailored solutions for healthcare',
    items: [
      { title: 'Radiology Departments', href: '/solutions/radiology-departments', description: 'For hospital radiology teams' },
      { title: 'Hospital Networks', href: '/solutions/hospital-networks', description: 'Multi-facility implementations' },
      { title: 'Teleradiology Providers', href: '/solutions/teleradiology-providers', description: 'Remote diagnostic services' },
    ]
  },
  resources: {
    title: 'Resources',
    href: '/resources',
    description: 'Learn more about AI in radiology',
    items: [
      { title: 'Blog', href: '/resources/blog', description: 'Latest insights & updates' },
      { title: 'Case Studies', href: '/resources/case-studies', description: 'Real-world implementations' },
      { title: 'White Papers', href: '/resources/white-papers', description: 'Technical documentation' },
      { title: 'Webinars', href: '/resources/webinars', description: 'Educational content' },
    ]
  },
  company: {
    title: 'Company',
    href: '/company',
    description: 'Learn about Skolyn',
    items: [
      { title: 'About Us', href: '/company/about-us', description: 'Our mission and team' },
      { title: 'Careers', href: '/company/careers', description: 'Join our team' },
      { title: 'Press & Media', href: '/company/press-and-media', description: 'News and media resources' },
    ]
  }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const ListItem = ({ title, href, description, ...props }) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            props.className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <SkolynLogo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {Object.entries(navigation).map(([key, section]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger className="h-9">
                  {section.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href={section.href}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {section.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {section.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {section.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        description={item.description}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            
            <NavigationMenuItem>
              <Link href="/company/about-us" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Company
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contact">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-4 mt-8">
              {Object.entries(navigation).map(([key, section]) => (
                <div key={key} className="space-y-2">
                  <Link 
                    href={section.href}
                    className="text-lg font-semibold block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.title}
                  </Link>
                  <div className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link 
                href="/company/about-us" 
                className="text-lg font-semibold block py-2"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Request Demo</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}