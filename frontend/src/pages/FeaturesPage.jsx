import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { GeometricBackground } from '@/components/ui/GeometricBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const additionalFeatures = [
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption protects your data. We use the same security standards as major financial institutions worldwide.',
    highlights: ['256-bit SSL encryption', 'Two-factor authentication', 'Biometric login', 'Real-time fraud monitoring'],
  },
  {
    title: 'Global Accessibility',
    description: 'Bank from anywhere in the world with our award-winning mobile and web platforms.',
    highlights: ['Available in 150+ countries', '30+ supported currencies', '24/7 customer support', 'Multi-language support'],
  },
  {
    title: 'Smart Analytics',
    description: 'AI-powered insights help you understand your spending patterns and make better financial decisions.',
    highlights: ['Spending categorization', 'Budget recommendations', 'Savings goals tracking', 'Bill reminders'],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden">
          <GeometricBackground variant="subtle" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
              Powerful Features for{' '}
              <span className="text-primary">Modern Banking</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover all the tools and features that make OsajeBank the preferred choice 
              for millions of customers worldwide.
            </p>
            <Button variant="premium" size="lg">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <FeaturesSection />

        {/* Detailed Features */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 justify-center lg:justify-start">
                          <CheckCircle2 className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full max-w-lg">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-2xl bg-card shadow-card border border-border flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
