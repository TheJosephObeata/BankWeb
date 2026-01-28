import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Apple } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="300" className="stroke-card/30" strokeWidth="1" fill="none" />
          <circle cx="1000" cy="100" r="200" className="stroke-card/20" strokeWidth="1" fill="none" />
          <rect x="800" y="250" width="100" height="100" rx="16" className="stroke-card/20" strokeWidth="1" fill="none" transform="rotate(15 800 250)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card">
              Available on iOS & Android
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-card mb-4">
            Ready to Start Banking{' '}
            <span className="text-primary">Smarter?</span>
          </h2>
          
          <p className="text-lg text-card/70 max-w-2xl mx-auto mb-10">
            Join over 2 million customers who trust OsajeBank for their everyday banking needs. 
            Open your free account in just 5 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="premium" size="xl">
              Open Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-card/10 border-card/20 text-card hover:bg-card/20 hover:text-card"
            >
              Download App
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-3 px-5 py-3 bg-card/10 rounded-xl border border-card/20 hover:bg-card/20 transition-colors"
            >
              <Apple className="w-8 h-8 text-card" />
              <div className="text-left">
                <p className="text-xs text-card/60">Download on the</p>
                <p className="text-sm font-semibold text-card">App Store</p>
              </div>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 px-5 py-3 bg-card/10 rounded-xl border border-card/20 hover:bg-card/20 transition-colors"
            >
              <svg className="w-8 h-8 text-card" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-card/60">Get it on</p>
                <p className="text-sm font-semibold text-card">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
