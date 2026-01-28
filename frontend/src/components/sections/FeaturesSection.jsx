import { FeatureCard } from '@/components/ui/FeatureCard';
import { GeometricBackground } from '@/components/ui/GeometricBackground';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Headphones,
  CreditCard,
  PiggyBank,
  Globe,
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Transfers',
    description: 'Send money instantly to anyone, anywhere in the world with zero delays and competitive rates.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Advanced encryption and biometric authentication keep your transactions safe 24/7.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Banking',
    description: 'Manage your finances on the go with our award-winning mobile app for iOS and Android.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to help you with any questions or concerns.',
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    description: 'Create unlimited virtual cards for secure online shopping and subscription management.',
  },
  {
    icon: PiggyBank,
    title: 'Smart Savings',
    description: 'Automated savings goals and competitive interest rates help your money grow faster.',
  },
  {
    icon: Globe,
    title: 'Multi-Currency',
    description: 'Hold and exchange 30+ currencies with real exchange rates and no hidden fees.',
  },
  {
    icon: BarChart3,
    title: 'Insights',
    description: 'AI-powered spending insights and budgeting tools to help you make smarter financial decisions.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-muted/50">
      <GeometricBackground variant="subtle" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Everything You Need to{' '}
            <span className="text-primary">Bank Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to simplify your financial life and help you achieve your goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
