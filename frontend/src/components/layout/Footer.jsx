import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  product: [
    { name: 'Features', path: '/features' },
    { name: 'Cards', path: '/cards' },
    { name: 'Mobile App', path: '#' },
    { name: 'Security', path: '#' },
  ],
  company: [
    { name: 'About Us', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Contact', path: '/contact' },
  ],
  resources: [
    { name: 'Help Center', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'API Docs', path: '#' },
    { name: 'Status', path: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
    { name: 'Cookie Policy', path: '#' },
    { name: 'Compliance', path: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-primary/10 rounded-2xl p-6 sm:p-8 mb-12 border border-primary/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-card mb-2">
                Stay Updated
              </h3>
              <p className="text-card/70 text-sm sm:text-base">
                Subscribe to our newsletter for the latest updates and features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card/10 border-card/20 text-card placeholder:text-card/50 focus:border-primary sm:w-64"
              />
              <Button variant="premium" className="whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">O</span>
              </div>
              <span className="text-xl font-bold font-display text-card">
                Osaje<span className="text-primary">Bank</span>
              </span>
            </Link>
            <p className="text-card/70 text-sm mb-6 max-w-sm">
              Secure digital banking made simple. Experience the future of finance with OsajeBank&apos;s innovative platform.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-card mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 py-8 border-t border-card/10 mb-8">
          <div className="flex items-center gap-3 text-card/70">
            <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-card/50">Email</p>
              <p className="text-sm text-card">support@osajebank.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-card/70">
            <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-card/50">Phone</p>
              <p className="text-sm text-card">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-card/70">
            <div className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-card/50">Address</p>
              <p className="text-sm text-card">123 Finance Street, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-card/10">
          <p className="text-card/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} OsajeBank. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-card/50 text-xs">Secured by</span>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-card/10">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-card/70">256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
