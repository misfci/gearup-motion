import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Send,
  Zap,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours to discuss your project.",
      duration: 5000,
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@gearupmarketing.com',
      action: 'mailto:hello@gearupmarketing.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Marketing Street, Digital City, DC 12345',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM EST',
      action: '#',
    },
  ];

  const benefits = [
    'Free initial consultation',
    '24/7 project support',
    'Dedicated account manager',
    'Custom strategy development',
    'Transparent reporting',
    'Guaranteed results'
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Elevate Your Brand</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how we can help your brand reach new heights. 
              Get in touch for a free consultation and custom strategy proposal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 shadow-elevation">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                      placeholder="Tell us about your project, goals, and how we can help elevate your brand..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full arrow-up"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className={`p-4 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <a href={info.action} className="block">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Benefits Section */}
              <Card className={`p-6 bg-card/50 backdrop-blur-sm border border-border/50 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold mb-4 text-foreground">What You Get:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Call to Action */}
              <Card className={`p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '1s' }}>
                <h3 className="text-xl font-bold mb-3 text-gradient">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a free 30-minute consultation to discuss your project and discover 
                  how we can help elevate your brand's voice.
                </p>
                <Button variant="premium" size="lg" className="w-full arrow-up">
                  Schedule Free Consultation
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;