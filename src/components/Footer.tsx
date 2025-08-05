import { ArrowUp, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = {
    services: [
      { label: 'Brand Identity', href: '#services' },
      { label: 'Content Creation', href: '#services' },
      { label: 'SEO & Analytics', href: '#services' },
      { label: 'Digital Strategy', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Case Studies', href: '#clients' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Blog', href: '#contact' },
      { label: 'Support', href: '#contact' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-secondary/20 border-t border-border/50 footer-slide-up">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6 fade-in-up">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shadow-glow pulse-glow">
                  <ArrowUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-gradient">
                  Gear Up Marketing
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
                Elevating brands through authentic storytelling and strategic content creation. 
                We help businesses connect with their audiences and achieve remarkable growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href="mailto:hello@gearupmarketing.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  hello@gearupmarketing.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  +1 (555) 123-4567
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Digital City, DC 12345
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest insights on content marketing and brand strategy.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/50 border border-border/50 rounded-md text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <Button variant="premium" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links & Bottom Bar */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Media Links */}
              <div className="flex items-center gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/50 border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-elevation"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <Button 
                variant="hero" 
                size="sm"
                onClick={scrollToTop}
                className="fade-in-up hover:shadow-glow"
                style={{ animationDelay: '0.7s' }}
              >
                Back to Top
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-border/50 fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-muted-foreground text-sm">
                © 2024 Gear Up Marketing Solutions. All rights reserved. 
                <span className="mx-2">|</span>
                <button className="hover:text-primary transition-colors duration-300">Privacy Policy</button>
                <span className="mx-2">|</span>
                <button className="hover:text-primary transition-colors duration-300">Terms of Service</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;