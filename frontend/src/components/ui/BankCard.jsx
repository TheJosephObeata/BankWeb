import { cn } from '@/lib/utils';
import { Wifi } from 'lucide-react';

export const BankCard = ({ 
  type = 'debit', 
  cardNumber = '**** **** **** 4532',
  cardHolder = 'JOHN DOE',
  expiryDate = '12/28',
  balance,
  className,
  showBalance = false
}) => {
  const isCredit = type === 'credit';
  
  return (
    <div 
      className={cn(
        "relative w-full max-w-[380px] aspect-[1.586/1] rounded-2xl p-6 overflow-hidden",
        "shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
        isCredit 
          ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" 
          : "bg-gradient-to-br from-primary via-primary-light to-accent",
        className
      )}
    >
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="50" r="150" fill="currentColor" className="text-card/20" />
          <circle cx="50" cy="200" r="100" fill="currentColor" className="text-card/10" />
          <rect x="200" y="100" width="80" height="80" rx="10" transform="rotate(45 200 100)" fill="currentColor" className="text-card/10" />
        </svg>
      </div>

      {/* Geometric Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" strokeWidth="1" className="text-card" />
          <line x1="0" y1="170" x2="400" y2="170" stroke="currentColor" strokeWidth="1" className="text-card" />
          <line x1="100" y1="0" x2="100" y2="250" stroke="currentColor" strokeWidth="1" className="text-card" />
          <line x1="300" y1="0" x2="300" y2="250" stroke="currentColor" strokeWidth="1" className="text-card" />
        </svg>
      </div>

      <div className="relative h-full flex flex-col justify-between text-primary-foreground">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs opacity-70 mb-1">
              {isCredit ? 'Credit Card' : 'Debit Card'}
            </p>
            <p className="text-lg font-bold font-display">OsajeBank</p>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-6 h-6 rotate-90" />
          </div>
        </div>

        {/* Chip */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-9 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center">
            <div className="w-8 h-6 rounded-sm bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300/50" />
          </div>
          {showBalance && balance && (
            <div>
              <p className="text-xs opacity-70">Balance</p>
              <p className="text-lg font-bold">${balance.toLocaleString()}</p>
            </div>
          )}
        </div>

        {/* Card Number */}
        <div>
          <p className="text-lg sm:text-xl font-mono tracking-widest mb-4">
            {cardNumber}
          </p>
          
          {/* Bottom Info */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] opacity-60 mb-0.5">CARD HOLDER</p>
              <p className="text-sm font-medium tracking-wide">{cardHolder}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] opacity-60 mb-0.5">EXPIRES</p>
              <p className="text-sm font-medium">{expiryDate}</p>
            </div>
            <div className="flex -space-x-3">
              <div className={cn(
                "w-8 h-8 rounded-full",
                isCredit ? "bg-red-500" : "bg-primary-foreground/30"
              )} />
              <div className={cn(
                "w-8 h-8 rounded-full",
                isCredit ? "bg-orange-500" : "bg-primary-foreground/20"
              )} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
