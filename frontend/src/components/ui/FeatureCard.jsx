import { cn } from '@/lib/utils';

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "group relative p-6 sm:p-8 rounded-2xl bg-card border border-border",
        "hover:border-primary/30 hover:shadow-card transition-all duration-300",
        "animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon Container */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold font-display text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
