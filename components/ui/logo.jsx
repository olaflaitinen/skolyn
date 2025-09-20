export function SkolynLogo({ className = "w-8 h-8", textClassName = "text-xl font-bold" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg 
          viewBox="0 0 40 40" 
          className="w-8 h-8"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#030f4f" />
              <stop offset="100%" stopColor="#00A99D" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A99D" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          
          {/* Main Circle with Neural Network Pattern */}
          <circle 
            cx="20" 
            cy="20" 
            r="18" 
            fill="url(#primaryGradient)"
            stroke="url(#accentGradient)"
            strokeWidth="1"
          />
          
          {/* Neural Network Pattern */}
          <g opacity="0.9">
            {/* Central Node */}
            <circle cx="20" cy="20" r="2" fill="white" />
            
            {/* Outer Nodes */}
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.8" />
            <circle cx="28" cy="12" r="1.5" fill="white" opacity="0.8" />
            <circle cx="12" cy="28" r="1.5" fill="white" opacity="0.8" />
            <circle cx="28" cy="28" r="1.5" fill="white" opacity="0.8" />
            <circle cx="8" cy="20" r="1.5" fill="white" opacity="0.6" />
            <circle cx="32" cy="20" r="1.5" fill="white" opacity="0.6" />
            <circle cx="20" cy="8" r="1.5" fill="white" opacity="0.6" />
            <circle cx="20" cy="32" r="1.5" fill="white" opacity="0.6" />
            
            {/* Connections */}
            <g stroke="white" strokeWidth="0.5" opacity="0.4">
              <line x1="20" y1="20" x2="12" y2="12" />
              <line x1="20" y1="20" x2="28" y2="12" />
              <line x1="20" y1="20" x2="12" y2="28" />
              <line x1="20" y1="20" x2="28" y2="28" />
              <line x1="20" y1="20" x2="8" y2="20" />
              <line x1="20" y1="20" x2="32" y2="20" />
              <line x1="20" y1="20" x2="20" y2="8" />
              <line x1="20" y1="20" x2="20" y2="32" />
            </g>
          </g>
          
          {/* Stylized 'S' in the center */}
          <text 
            x="20" 
            y="26" 
            textAnchor="middle" 
            className="fill-white font-bold text-lg"
            style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif' }}
          >
            S
          </text>
        </svg>
      </div>
      <span className={textClassName}>Skolyn</span>
    </div>
  )
}