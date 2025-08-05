import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';
import clientLogo1 from '@/assets/client-logo-1.jpg';
import clientLogo2 from '@/assets/client-logo-2.jpg';
import clientLogo3 from '@/assets/client-logo-3.jpg';
import clientLogo4 from '@/assets/client-logo-4.jpg';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#clients');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const clients = [
    {
      logo: clientLogo1,
      name: 'TechFlow Solutions',
      industry: 'Technology',
      result: '+250% Brand Awareness',
      description: 'Revolutionized their digital presence with cutting-edge content strategy.',
    },
    {
      logo: clientLogo2,
      name: 'Urban Lifestyle Co.',
      industry: 'E-commerce',
      result: '+180% Sales Growth',
      description: 'Transformed their online store into a community-driven brand experience.',
    },
    {
      logo: clientLogo3,
      name: 'HealthFirst Medical',
      industry: 'Healthcare',
      result: '+300% Patient Engagement',
      description: 'Built trust through educational content and authentic storytelling.',
    },
    {
      logo: clientLogo4,
      name: 'EcoGreen Ventures',
      industry: 'Sustainability',
      result: '+400% Social Reach',
      description: 'Amplified their environmental message across digital platforms.',
    },
    {
      logo: clientLogo1,
      name: 'Innovation Labs',
      industry: 'Startup',
      result: '+150% Funding Success',
      description: 'Created compelling pitch narratives that secured series A funding.',
    },
    {
      logo: clientLogo2,
      name: 'Global Finance Corp',
      industry: 'Financial Services',
      result: '+200% Lead Generation',
      description: 'Simplified complex financial concepts through engaging content.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="clients" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to established enterprises, we've helped brands across industries 
              elevate their voice and achieve remarkable growth.
            </p>
          </div>

          {/* Client Carousel */}
          <div className={`relative ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.2s' }}>
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {clients.map((client, index) => (
                  <div key={`${client.name}-${index}`} className="w-full flex-shrink-0">
                    <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border border-border/50 mx-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Client Info */}
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <img 
                              src={client.logo} 
                              alt={`${client.name} logo`}
                              className="w-16 h-16 rounded-xl object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <div>
                              <h3 className="text-2xl font-bold text-foreground">{client.name}</h3>
                              <p className="text-primary font-medium">{client.industry}</p>
                            </div>
                          </div>
                          
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {client.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-primary">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-bold text-lg">{client.result}</span>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative">
                          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                            <img 
                              src={client.logo} 
                              alt={`${client.name} showcase`}
                              className="w-32 h-32 rounded-2xl object-cover shadow-elevation hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {/* Floating elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full pulse-glow" />
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevation"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevation"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className={`flex justify-center mt-8 gap-2 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.4s' }}>
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.6s' }}>
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '2M+', label: 'Content Pieces' },
              { number: '150%', label: 'Avg. Growth' },
              { number: '98%', label: 'Retention Rate' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;