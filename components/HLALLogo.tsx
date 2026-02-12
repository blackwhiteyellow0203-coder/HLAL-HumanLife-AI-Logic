import React from 'react';

interface LogoProps {
  color: string;
  size?: number;
  className?: string;
}

const HLALLogo: React.FC<LogoProps> = ({ color, size = 40, className }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="HLAL Logo"
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        
        {/* --- LEFT BRAIN (Organic) --- */}
        {/* Main Outer Lobe */}
        <path d="M42 20C30 15 12 25 12 50C12 75 30 85 42 80" />
        
        {/* Inner Convolutions - Top */}
        <path d="M42 30C34 30 28 34 24 40" />
        <path d="M24 40C22 43 22 47 24 50" />
        
        {/* Inner Convolutions - Bottom */}
        <path d="M42 70C34 70 28 66 24 60" />
        <path d="M24 60C22 57 22 53 24 50" />
        
        {/* Extra Organic Details */}
        <path d="M18 35C20 32 24 30 28 30" strokeWidth="1.5" />
        <path d="M18 65C20 68 24 70 28 70" strokeWidth="1.5" />
        <path d="M34 50H42" />

        {/* --- RIGHT BRAIN (Circuit) --- */}
        {/* Main Outer Shape (Geometric) */}
        <path d="M58 20 L68 20 L84 32 L88 50 L84 68 L68 80 L58 80" />

        {/* Circuit Traces - Connections to Chip */}
        <path d="M58 35 H66 L72 30" />
        <circle cx="72" cy="30" r="1.5" fill={color} stroke="none" />

        <path d="M58 65 H66 L72 70" />
        <circle cx="72" cy="70" r="1.5" fill={color} stroke="none" />

        {/* Vertical Bus Lines */}
        <path d="M50 38 V28" />
        <path d="M50 62 V72" />
        <circle cx="50" cy="28" r="1.5" fill={color} stroke="none" />
        <circle cx="50" cy="72" r="1.5" fill={color} stroke="none" />

        {/* Side Circuitry */}
        <path d="M88 50 H80" />
        <circle cx="80" cy="50" r="1.5" fill={color} stroke="none" />
        
        <path d="M76 40 L82 40" />
        <circle cx="76" cy="40" r="1.5" fill={color} stroke="none" />
        
        <path d="M76 60 L82 60" />
        <circle cx="76" cy="60" r="1.5" fill={color} stroke="none" />

        {/* --- CENTER AI CHIP --- */}
        {/* The Chip Body */}
        <rect x="38" y="38" width="24" height="24" rx="4" strokeWidth="2.5" />
        
        {/* Chip Pins/Details */}
        <path d="M38 45H35" strokeWidth="1.5" />
        <path d="M38 55H35" strokeWidth="1.5" />
        <path d="M62 45H65" strokeWidth="1.5" />
        <path d="M62 55H65" strokeWidth="1.5" />
      </g>
      
      {/* Text AI */}
      <text 
        x="50" 
        y="50" 
        dy=".35em" 
        textAnchor="middle" 
        fontSize="12" 
        fontWeight="900" 
        fill={color} 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        letterSpacing="-0.5px"
      >
        AI
      </text>
    </svg>
  );
};

export default HLALLogo;