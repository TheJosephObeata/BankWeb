import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CardsSection } from '@/components/sections/CardsSection';
import { GeometricBackground } from '@/components/ui/GeometricBackground';
import { BankCard } from '@/components/ui/BankCard';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Gift, 
  Percent,
  CreditCard,
  Sparkles
} from 'lucide-react';

const cardBenefits = [
  {
    icon: Shield,
    title: 'Zero Liability Protection',
    description: 'Never pay for unauthorized charges on your OsajeBank cards.',
  },
  {
    icon: Globe,
    title: 'Worldwide Acceptance',
    description: 'Use your card at millions of locations in over 200 countries.',
  },
  {
    icon: Gift,
    title: 'Exclusive Rewards',
    description: 'Earn points on every purchase and redeem for travel, cashback, or gifts.',
  },
  {
    icon: Percent,
    title: 'Competitive Rates',
    description: 'Enjoy low interest rates and no hidden fees on any of our cards.',
  },
];

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden">
          <GeometricBackground variant="subtle" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <CreditCard className="w-4 h-4" />
                  Premium Cards
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
                  Cards That{' '}
                  <span className="text-primary">Reward You</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  From everyday purchases to dream vacations, our cards are designed 
                  to give you more rewards, more protection, and more freedom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="premium" size="lg">
                    Compare Cards
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Check Eligibility
                  </Button>
                </div>
              </div>

              {/* Card Stack Visual */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 left-8 opacity-40 scale-90 rotate-6">
                    <BankCard type="credit" />
                  </div>
                  <div className="relative z-10 -rotate-3">
                    <BankCard type="debit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <CardsSection />

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Card Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
                Why Choose OsajeBank Cards?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every OsajeBank card comes with premium benefits designed to make your life easier.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cardBenefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
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
