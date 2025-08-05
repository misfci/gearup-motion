import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 header-slide-down ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elevation border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 fade-in-up">
            <img 
              src={logo} 
              alt="Gear Up Marketing Solutions" 
              className="w-10 h-10 object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            />
            <span className="text-xl font-bold text-gradient">
              Gear Up Marketing Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-foreground hover:text-primary transition-all duration-500 relative group fade-in-up transform hover:scale-105 hover:shadow-glow`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full shadow-glow"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="arrow-up"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="mt-4"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;