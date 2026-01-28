import { BankCard } from '@/components/ui/BankCard';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const cardFeatures = {
  debit: [
    'No monthly maintenance fees',
    'Free ATM withdrawals worldwide',
    'Instant transaction notifications',
    'Contactless payments',
    'Freeze/unfreeze anytime',
  ],
  credit: [
    'Up to 3% cashback rewards',
    '0% intro APR for 15 months',
    'No foreign transaction fees',
    'Extended warranty protection',
    'Travel insurance included',
  ],
};

export const CardsSection = () => {
  return (
    <section id="cards" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Cards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Cards Designed for{' '}
            <span className="text-primary">Modern Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium debit and credit cards, each packed with features to enhance your financial freedom.
          </p>
        </div>

        {/* Cards Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Debit Card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
              <BankCard 
                type="debit"
                cardNumber="4532 •••• •••• 8741"
                cardHolder="YOUR NAME"
                expiryDate="MM/YY"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                OsajeBank Debit
              </h3>
              <p className="text-muted-foreground mb-6">
                Your everyday spending companion with zero hidden fees.
              </p>
              
              <ul className="space-y-3 mb-8">
                {cardFeatures.debit.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="default" size="lg">
                Get Debit Card
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Credit Card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
              <BankCard 
                type="credit"
                cardNumber="5412 •••• •••• 3297"
                cardHolder="YOUR NAME"
                expiryDate="MM/YY"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                OsajeBank Credit
              </h3>
              <p className="text-muted-foreground mb-6">
                Premium rewards and protection for life&apos;s bigger purchases.
              </p>
              
              <ul className="space-y-3 mb-8">
                {cardFeatures.credit.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="premium" size="lg">
                Apply for Credit Card
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
