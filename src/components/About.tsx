import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Lightbulb, Target } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: TrendingUp,
      title: 'Growth-Driven',
      description: 'Every strategy we create is designed to elevate your brand and drive measurable results.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work as an extension of your team, ensuring seamless integration and shared success.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'We stay ahead of trends and technologies to keep your brand at the forefront of your industry.',
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Our success is measured by your success. We deliver outcomes that matter to your business.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A team of passionate content creators, strategists, and storytellers 
              dedicated to elevating brands through authentic and engaging narratives.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className={`${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
                Crafting Stories That Connect
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Gear Up Marketing Solutions, we believe every brand has a unique story waiting to be told. 
                  Our mission is to uncover that story and amplify it across the digital landscape.
                </p>
                <p>
                  Founded in 2020, we've grown from a small team of content enthusiasts to a full-service 
                  marketing agency that specializes in creating authentic connections between brands and their audiences.
                </p>
                <p>
                  We don't just create content – we build communities, foster engagement, and drive meaningful 
                  interactions that translate into sustainable business growth.
                </p>
              </div>
            </div>

            {/* Team Image */}
            <div className={`${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '0.4s' }}>
              <div className="relative group">
                <img 
                  src={teamPhoto} 
                  alt="Gear Up Marketing Solutions Team" 
                  className="w-full h-96 object-cover rounded-2xl shadow-elevation transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Creative Team</h4>
                  <p className="text-muted-foreground">
                    Passionate professionals dedicated to your brand's success
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="mb-4">
                  <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className={`text-center mt-20 ${isVisible ? 'scroll-fade in-view' : 'scroll-fade'}`} style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                "To empower brands with compelling narratives that resonate with their audiences, 
                foster authentic connections, and drive sustainable growth in an ever-evolving digital landscape."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;