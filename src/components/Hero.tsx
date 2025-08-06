const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto py-20">

          {/* Stacked Header Lines */}
          <div className="mb-8">
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
              Gear Up
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight fade-in-up" style={{ animationDelay: '0.2s' }}>
              Marketing
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight fade-in-up" style={{ animationDelay: '0.3s' }}>
              Solutions
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight fade-in-up" style={{ animationDelay: '0.4s' }}>
              Our Content Creators
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-wide fade-in-up" style={{ animationDelay: '0.5s' }}>
            Raise Your Brand's Voice
          </h1>

          {/* Description Paragraph */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
            We transform brands through strategic storytelling, dynamic content creation, and data-driven marketing solutions that elevate your presence in the digital landscape.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;