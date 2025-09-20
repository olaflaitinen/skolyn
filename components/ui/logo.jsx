export function SkolynLogo({ className = "", showTagline = false, size = "normal" }) {
  const logoSize = size === "large" ? "h-12" : size === "small" ? "h-6" : "h-8"
  const textSize = size === "large" ? "text-3xl" : size === "small" ? "text-lg" : "text-xl"
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Skolyn Spiral Logo */}
      <div className="relative">
        <svg 
          viewBox="0 0 60 60" 
          className={`${logoSize} w-auto`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="skolynBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          
          {/* Spiral Pattern - inspired by the logo design */}
          <g fill="url(#skolynBlue)">
            {/* Outer spiral curves */}
            <path d="M10 30 Q15 15, 30 20 Q45 25, 40 40 Q35 50, 25 45 Q15 40, 20 30 Q25 25, 30 30" 
                  strokeWidth="0" opacity="0.9"/>
            
            {/* Inner spiral curves */}
            <path d="M15 30 Q20 20, 30 25 Q40 30, 35 40 Q30 45, 25 40 Q20 35, 25 30" 
                  strokeWidth="0" opacity="0.7"/>
            
            {/* Center flowing lines */}
            <path d="M20 30 Q25 25, 30 30 Q35 35, 30 35 Q25 35, 25 30" 
                  strokeWidth="0" opacity="0.8"/>
            
            {/* Additional flowing elements */}
            <ellipse cx="18" cy="25" rx="2" ry="4" transform="rotate(45 18 25)" opacity="0.6"/>
            <ellipse cx="25" cy="20" rx="1.5" ry="3" transform="rotate(30 25 20)" opacity="0.5"/>
            <ellipse cx="35" cy="25" rx="2" ry="4" transform="rotate(-30 35 25)" opacity="0.6"/>
            <ellipse cx="30" cy="40" rx="1.5" ry="3" transform="rotate(60 30 40)" opacity="0.5"/>
            <ellipse cx="22" cy="38" rx="2" ry="3" transform="rotate(-45 22 38)" opacity="0.6"/>
          </g>
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-bold text-[#1e3a8a] ${textSize} leading-none`}>
          Skolyn
        </span>
        {showTagline && (
          <span className="text-xs text-[#1e3a8a] opacity-75 font-medium tracking-wide mt-0.5">
            Early. Accurate. Trusted.
          </span>
        )}
      </div>
    </div>
  )
}