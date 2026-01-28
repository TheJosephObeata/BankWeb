import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BankCard } from '@/components/ui/BankCard';
import { StatCard } from '@/components/ui/StatCard';
import { TransactionItem } from '@/components/ui/TransactionItem';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet, 
  TrendingUp, 
  CreditCard, 
  PiggyBank,
  Send,
  Plus,
  ArrowDownLeft,
  ShoppingCart,
  Utensils,
  Car,
  Wifi,
  Home,
  Film,
  Plane
} from 'lucide-react';

// Mock data
const accountData = {
  balance: 24580.50,
  savings: 8450.00,
  spent: 3240.75,
  income: 12500.00,
};

const transactions = [
  {
    id: 1,
    type: 'expense',
    title: 'Amazon Purchase',
    description: 'Electronics & Gadgets',
    amount: 299.99,
    date: 'Today, 2:30 PM',
    icon: ShoppingCart,
  },
  {
    id: 2,
    type: 'income',
    title: 'Salary Deposit',
    description: 'Monthly Salary - TechCorp Inc.',
    amount: 5200.00,
    date: 'Yesterday, 9:00 AM',
    icon: ArrowDownLeft,
  },
  {
    id: 3,
    type: 'expense',
    title: 'Restaurant',
    description: 'The Golden Fork',
    amount: 85.50,
    date: 'Dec 18, 7:45 PM',
    icon: Utensils,
  },
  {
    id: 4,
    type: 'expense',
    title: 'Uber Ride',
    description: 'Trip to Airport',
    amount: 45.00,
    date: 'Dec 18, 3:20 PM',
    icon: Car,
  },
  {
    id: 5,
    type: 'expense',
    title: 'Netflix Subscription',
    description: 'Monthly subscription',
    amount: 15.99,
    date: 'Dec 17, 12:00 AM',
    icon: Film,
  },
  {
    id: 6,
    type: 'expense',
    title: 'Internet Bill',
    description: 'Comcast Xfinity',
    amount: 89.99,
    date: 'Dec 16, 10:00 AM',
    icon: Wifi,
  },
  {
    id: 7,
    type: 'income',
    title: 'Freelance Payment',
    description: 'Design Project - ClientXYZ',
    amount: 1500.00,
    date: 'Dec 15, 4:30 PM',
    icon: ArrowDownLeft,
  },
  {
    id: 8,
    type: 'expense',
    title: 'Rent Payment',
    description: 'December Rent',
    amount: 1800.00,
    date: 'Dec 1, 9:00 AM',
    icon: Home,
  },
];

const quickActions = [
  { icon: Send, label: 'Send Money', color: 'bg-primary' },
  { icon: Plus, label: 'Add Funds', color: 'bg-accent' },
  { icon: CreditCard, label: 'Pay Bills', color: 'bg-chart-3' },
  { icon: Plane, label: 'Travel', color: 'bg-chart-4' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTransactions = transactions.filter(t => {
    if (activeTab === 'all') return true;
    if (activeTab === 'income') return t.type === 'income';
    if (activeTab === 'expenses') return t.type === 'expense';
    return true;
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-2">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your accounts today.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Card & Stats */}
            <div className="lg:col-span-2 space-y-8">
              {/* Card Section */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <BankCard 
                    type="debit"
                    cardNumber="4532 •••• •••• 8741"
                    cardHolder="ALEX JOHNSON"
                    expiryDate="12/28"
                    showBalance
                    balance={accountData.balance}
                    className="shrink-0"
                  />
                  
                  {/* Quick Actions */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {quickActions.map((action) => (
                        <button
                          key={action.label}
                          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
                            <action.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <span className="text-xs font-medium text-foreground">
                            {action.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Balance"
                  value={`$${accountData.balance.toLocaleString()}`}
                  change="+12.5%"
                  changeType="positive"
                  icon={Wallet}
                />
                <StatCard
                  title="Savings"
                  value={`$${accountData.savings.toLocaleString()}`}
                  change="+8.2%"
                  changeType="positive"
                  icon={PiggyBank}
                />
                <StatCard
                  title="This Month"
                  value={`-$${accountData.spent.toLocaleString()}`}
                  change="-5.1%"
                  changeType="negative"
                  icon={TrendingUp}
                />
                <StatCard
                  title="Income"
                  value={`$${accountData.income.toLocaleString()}`}
                  change="+15.3%"
                  changeType="positive"
                  icon={ArrowDownLeft}
                />
              </div>

              {/* Transactions */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-semibold font-display text-foreground">
                    Recent Transactions
                  </h2>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="income">Income</TabsTrigger>
                      <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-3">
                  {filteredTransactions.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      type={transaction.type}
                      title={transaction.title}
                      description={transaction.description}
                      amount={transaction.amount}
                      date={transaction.date}
                      icon={transaction.icon}
                    />
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View All Transactions
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="space-y-6">
              {/* Spending Summary */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  Spending Summary
                </h3>
                
                <div className="space-y-4">
                  {[
                    { category: 'Shopping', amount: 850, color: 'bg-primary', percent: 35 },
                    { category: 'Food & Dining', amount: 420, color: 'bg-accent', percent: 18 },
                    { category: 'Transportation', amount: 280, color: 'bg-chart-4', percent: 12 },
                    { category: 'Entertainment', amount: 180, color: 'bg-chart-3', percent: 8 },
                    { category: 'Bills & Utilities', amount: 650, color: 'bg-chart-5', percent: 27 },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{item.category}</span>
                        <span className="text-sm font-medium text-foreground">${item.amount}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-500`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Spent</span>
                    <span className="text-lg font-bold text-foreground">$2,380</span>
                  </div>
                </div>
              </div>

              {/* Savings Goal */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  Savings Goal
                </h3>
                
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        className="stroke-muted"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        className="stroke-primary"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${0.68 * 352} 352`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">68%</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Vacation Fund</p>
                  <p className="text-lg font-semibold text-foreground">$8,450 / $12,500</p>
                </div>

                <Button variant="default" className="w-full">
                  Add to Savings
                </Button>
              </div>

              {/* Promo Card */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">
                  Upgrade to Premium
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Get unlimited transactions, priority support, and exclusive rewards.
                </p>
                <Button variant="white" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
