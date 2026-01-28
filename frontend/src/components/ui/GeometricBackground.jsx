import { cn } from '@/lib/utils';

export const GeometricBackground = ({ className, variant = 'hero' }) => {
  if (variant === 'hero') {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        {/* Geometric shapes */}
        <svg 
          className="absolute w-full h-full opacity-30" 
          viewBox="0 0 1200 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large circle */}
          <circle 
            cx="1050" 
            cy="150" 
            r="300" 
            className="stroke-primary/20" 
            strokeWidth="1.5" 
            fill="none"
          />
          <circle 
            cx="1050" 
            cy="150" 
            r="250" 
            className="stroke-primary/10" 
            strokeWidth="1" 
            fill="none"
          />
          
          {/* Floating squares */}
          <rect 
            x="100" 
            y="500" 
            width="120" 
            height="120" 
            rx="16" 
            className="stroke-accent/20" 
            strokeWidth="1.5" 
            fill="none"
            transform="rotate(-15 100 500)"
          />
          <rect 
            x="150" 
            y="450" 
            width="80" 
            height="80" 
            rx="12" 
            className="fill-primary/5"
            transform="rotate(10 150 450)"
          />
          
          {/* Triangles */}
          <polygon 
            points="950,600 1050,750 850,750" 
            className="stroke-primary/15" 
            strokeWidth="1.5" 
            fill="none"
          />
          
          {/* Grid dots */}
          <g className="fill-primary/20">
            {[...Array(5)].map((_, i) => (
              [...Array(5)].map((_, j) => (
                <circle 
                  key={`${i}-${j}`} 
                  cx={80 + i * 40} 
                  cy={80 + j * 40} 
                  r="2"
                />
              ))
            ))}
          </g>
          
          {/* Lines */}
          <line 
            x1="200" 
            y1="200" 
            x2="400" 
            y2="100" 
            className="stroke-accent/10" 
            strokeWidth="2"
          />
          <line 
            x1="800" 
            y1="700" 
            x2="1000" 
            y2="650" 
            className="stroke-primary/10" 
            strokeWidth="2"
          />
          
          {/* Hexagon */}
          <polygon 
            points="300,300 350,330 350,390 300,420 250,390 250,330" 
            className="stroke-primary/15" 
            strokeWidth="1.5" 
            fill="none"
          />
          
          {/* Small decorative circles */}
          <circle cx="700" cy="200" r="8" className="fill-accent/20" />
          <circle cx="750" cy="180" r="4" className="fill-primary/30" />
          <circle cx="680" cy="250" r="6" className="fill-primary/15" />
        </svg>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <svg 
          className="absolute w-full h-full opacity-20" 
          viewBox="0 0 1200 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" className="stroke-primary/20" strokeWidth="1" fill="none" />
          <circle cx="1100" cy="500" r="100" className="stroke-accent/20" strokeWidth="1" fill="none" />
          <rect x="900" y="50" width="60" height="60" rx="8" className="stroke-primary/15" strokeWidth="1" fill="none" transform="rotate(30 900 50)" />
        </svg>
      </div>
    );
  }

  return null;
};
