import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
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

    const element = document.getElementById('privacy');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="privacy" 
      className={`py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              🛡️ Privacy Policy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Gear Up Marketing Solutions, we are committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your personal information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 lg:p-12 space-y-8">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">1</span>
                Information We Collect
              </h3>
              <div className="pl-10 space-y-2">
                <p className="text-muted-foreground">
                  • Contact details (such as name, email, phone number) you provide through our contact forms or WhatsApp links.
                </p>
                <p className="text-muted-foreground">
                  • Basic analytics data collected through cookies or tracking tools to improve user experience.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">2</span>
                How We Use Your Information
              </h3>
              <div className="pl-10 space-y-2">
                <p className="text-muted-foreground">
                  • To respond to inquiries or requests submitted via the website.
                </p>
                <p className="text-muted-foreground">
                  • To improve our services and tailor content based on user interactions.
                </p>
                <p className="text-muted-foreground">
                  • To communicate with you if you express interest in our services.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">3</span>
                Sharing Your Information
              </h3>
              <div className="pl-10">
                <p className="text-muted-foreground">
                  We do not sell, trade, or share your personal data with third parties, unless required by law.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">4</span>
                Data Security
              </h3>
              <div className="pl-10">
                <p className="text-muted-foreground">
                  We implement security measures to protect your information from unauthorized access.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">5</span>
                Your Rights
              </h3>
              <div className="pl-10">
                <p className="text-muted-foreground">
                  You may request to view, edit, or delete your personal data by contacting us directly.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-center text-muted-foreground">
                For any questions about this Privacy Policy, please contact us through our website or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;