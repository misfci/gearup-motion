import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  PenTool, 
  Search, 
  BarChart3, 
  Video, 
  Megaphone,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Comprehensive branding solutions that establish your unique market presence and visual identity.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Style Guides'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with your audience across all platforms.',
      features: ['Blog Writing', 'Social Media Content', 'Copywriting', 'Email Campaigns'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Search,
      title: 'SEO & Optimization',
      description: 'Strategic SEO solutions that improve your visibility and drive organic traffic to your brand.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: BarChart3,
      title: 'Digital Strategy',
      description: 'Data-driven strategies that align with your business goals and maximize your digital impact.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'KPI Tracking'],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content that captivates your audience and elevates your brand message.',
      features: ['Promotional Videos', 'Social Media Clips', 'Explainer Videos', 'Animation'],
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Complete social media management that builds communities and drives engagement.',
      features: ['Content Planning', 'Community Management', 'Paid Advertising', 'Analytics'],
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Services That <span className="text-gradient">Elevate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive marketing solutions 
              that drive growth and build lasting connections with your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group cursor-pointer ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature}
                      className={`text-sm text-muted-foreground flex items-center gap-2 transition-all duration-300 ${
                        hoveredService === index ? 'translate-x-2' : ''
                      }`}
                      style={{ 
                        transitionDelay: hoveredService === index ? `${featureIndex * 50}ms` : '0ms' 
                      }}
                    >
                      <ArrowUpRight className="w-3 h-3 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button 
                  onClick={scrollToContact}
                  className="text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-300 flex items-center gap-1 group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </button>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Elevate Your Brand</span>?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive marketing solutions can help 
                your brand reach new heights and connect with your ideal audience.
              </p>
              <Button 
                variant="premium" 
                size="xl"
                onClick={scrollToContact}
                className="arrow-up"
              >
                Start Your Journey
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;