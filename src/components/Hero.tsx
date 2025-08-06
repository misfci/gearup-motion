import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Zap, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/258460d7-cee5-43b2-a62d-10f8205f9c8e.png')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation with Logo */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <img 
              src="/lovable-uploads/75ee6f9d-a26d-40bf-b147-f463f58e9b70.png" 
              alt="Company Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Pattern/Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Top left corner elements */}
        <div className="absolute top-16 left-16">
          <ArrowUpRight className="w-8 h-8 text-lime-400 opacity-60" />
        </div>
        
        {/* Top right corner elements */}
        <div className="absolute top-20 right-20">
          <TrendingUp className="w-6 h-6 text-lime-400 opacity-40" />
        </div>
        
        {/* Bottom left corner elements */}
        <div className="absolute bottom-32 left-20">
          <Zap className="w-5 h-5 text-lime-400 opacity-50" />
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4">
          <div className="w-2 h-2 bg-lime-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <div className="w-3 h-3 bg-lime-400 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Brand Text */}
          <div className="mb-8">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2 fade-in-up" style={{ animationDelay: '0.1s' }}>
              Gear Up
            </div>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-lime-400">Marketing</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
              Solutions
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-400 mb-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
            Our Content Creators
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 mb-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
            Raise Your Brand's Voice
          </h1>

          {/* Description Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
            We transform brands through strategic storytelling, dynamic content creation, and data-driven marketing solutions that elevate your presence in the digital landscape.
          </p>

          {/* CTA Button */}
          <div className="mb-16 fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#about')}
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
            <ChevronDown className="w-6 h-6 text-lime-400 mx-auto animate-bounce" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;