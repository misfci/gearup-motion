import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full pulse-glow hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-primary/60 rounded-full pulse-glow hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full pulse-glow hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Animated Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8 rise-up" style={{ animationDelay: '0.1s' }}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Elevating Brands Since 2020</span>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our Content Creators{' '}
            <span className="text-gradient relative">
              Raise Your Brand's Voice
              {/* Animated Arrow */}
              <ArrowUpRight className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-bounce hidden lg:inline" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
            We craft compelling narratives that connect brands with audiences, 
            driving engagement and fostering meaningful relationships that propel your business upward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="premium" 
              size="xl"
              onClick={() => scrollToSection('#contact')}
              className="arrow-up group"
            >
              Start Your Journey
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('#about')}
            >
              Discover Our Story
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;