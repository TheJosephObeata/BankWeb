import { Button } from '@/components/ui/button';
import { GeometricBackground } from '@/components/ui/GeometricBackground';
import { BankCard } from '@/components/ui/BankCard';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      <GeometricBackground variant="hero" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Trusted by 2M+ customers worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              Secure Digital Banking{' '}
              <span className="text-primary relative">
                Made Simple
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 12" 
                  fill="none"
                >
                  <path 
                    d="M2 8C50 4 150 4 198 8" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Experience the future of banking with OsajeBank. Fast transfers, 
              secure payments, and 24/7 support — all from your smartphone.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button variant="premium" size="xl">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl">
                Login to Account
              </Button>
            </div>

            {/* Trust Badges */}
            <div 
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm">Global Access</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div 
            className="relative flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative">
              {/* Primary Card */}
              <div className="relative z-20 animate-float">
                <BankCard 
                  type="debit"
                  cardNumber="4532 •••• •••• 8741"
                  cardHolder="ALEX JOHNSON"
                  expiryDate="12/28"
                  showBalance
                  balance={24580.50}
                />
              </div>
              
              {/* Secondary Card (behind) */}
              <div 
                className="absolute -bottom-8 -left-8 z-10 opacity-60 scale-90"
                style={{ transform: 'rotate(-8deg) scale(0.9)' }}
              >
                <BankCard 
                  type="credit"
                  cardNumber="5412 •••• •••• 3297"
                  cardHolder="ALEX JOHNSON"
                  expiryDate="09/27"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-10 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
