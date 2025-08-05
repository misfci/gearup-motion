import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CEO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      content: 'Gear Up Marketing Solutions transformed our brand presence completely. Their content strategy increased our brand awareness by 250% in just six months. The team\'s creativity and strategic thinking are unmatched.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Marketing Director, Urban Lifestyle Co.',
      company: 'Urban Lifestyle Co.',
      content: 'Working with Gear Up has been a game-changer for our e-commerce brand. They don\'t just create content; they craft experiences that resonate with our customers. Our sales grew by 180% since partnering with them.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Dr. Emily Watson',
      position: 'CMO, HealthFirst Medical',
      company: 'HealthFirst Medical',
      content: 'The team at Gear Up understands the healthcare industry like no other agency we\'ve worked with. Their authentic storytelling approach helped us increase patient engagement by 300% while maintaining the highest professional standards.',
      rating: 5,
      avatar: '👩‍⚕️',
    },
    {
      name: 'David Kim',
      position: 'Founder, EcoGreen Ventures',
      company: 'EcoGreen Ventures',
      content: 'Gear Up Marketing Solutions didn\'t just help us reach our audience – they helped us build a movement. Their strategic approach to sustainability messaging increased our social reach by 400% and attracted like-minded investors.',
      rating: 5,
      avatar: '🌱',
    },
    {
      name: 'Jessica Thompson',
      position: 'VP Marketing, Innovation Labs',
      company: 'Innovation Labs',
      content: 'As a startup, we needed partners who understood our vision and could translate it into compelling narratives. Gear Up helped us secure Series A funding by creating pitch-perfect content that resonated with investors.',
      rating: 5,
      avatar: '🚀',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Love</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about their journey with Gear Up Marketing Solutions.
            </p>
          </div>

          {/* Main Testimonial Slider */}
          <div className={`relative ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border border-border/50 shadow-elevation">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].position}</div>
                    <div className="text-primary font-medium">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevation"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevation"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className={`flex justify-center mt-8 gap-2 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.4s' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Smaller Testimonial Cards Grid */}
          <div className={`grid md:grid-cols-3 gap-6 mt-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.6s' }}>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card 
                key={`mini-${index}`}
                className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;