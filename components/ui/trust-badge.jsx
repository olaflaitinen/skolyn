import { Shield, Award, CheckCircle } from 'lucide-react'

const iconMap = {
  shield: Shield,
  award: Award,
  check: CheckCircle,
}

export function TrustBadge({ icon = 'check', text, className = '' }) {
  const Icon = iconMap[icon] || CheckCircle
  
  return (
    <div className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}>
      <Icon className="h-4 w-4 text-secondary" />
      <span>{text}</span>
    </div>
  )
}