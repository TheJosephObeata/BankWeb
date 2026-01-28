import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export const TransactionItem = ({ 
  type = 'expense',
  title,
  description,
  amount,
  date,
  icon: Icon,
  status = 'completed',
  className 
}) => {
  const isIncome = type === 'income';
  
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-4 rounded-xl bg-card border border-border",
        "hover:border-primary/20 hover:shadow-sm transition-all duration-200",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          isIncome 
            ? "bg-success/10 text-success" 
            : "bg-muted text-muted-foreground"
        )}>
          {Icon ? (
            <Icon className="w-5 h-5" />
          ) : isIncome ? (
            <ArrowDownLeft className="w-5 h-5" />
          ) : (
            <ArrowUpRight className="w-5 h-5" />
          )}
        </div>

        {/* Info */}
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Amount & Date */}
      <div className="text-right">
        <p className={cn(
          "font-semibold",
          isIncome ? "text-success" : "text-foreground"
        )}>
          {isIncome ? '+' : '-'}${Math.abs(amount).toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};
