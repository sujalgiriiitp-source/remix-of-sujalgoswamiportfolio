import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow blob */}
        <div className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-secondary/30 blob blob-animate" />
        {/* Blue blob */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 md:w-80 md:h-80 bg-primary/20 blob blob-animate" style={{ animationDelay: '-2s' }} />
        {/* Purple blob */}
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent/20 blob blob-animate" style={{ animationDelay: '-4s' }} />
        
        {/* Decorative lines */}
        <svg className="absolute top-1/4 right-10 w-32 h-32 text-secondary opacity-50" viewBox="0 0 100 100">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <svg className="absolute bottom-1/4 left-20 w-24 h-24 text-primary/30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6">
                👋 Welcome to my Portfolio
              </span>
            </div>
            
            <h1 className="animate-fade-in-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hello, I'm<br />
              <span className="gradient-text">Sujal Giri</span>
            </h1>
            
            <p className="animate-fade-in-up-delay-2 text-lg md:text-xl text-muted-foreground mb-4">
              Computer Science Student | Aspiring Data Analyst & Web Developer
            </p>
            
            <p className="animate-fade-in-up-delay-3 text-base text-muted-foreground mb-8 max-w-lg">
              I am a Computer Science student interested in data analytics and web development. 
              I am a fresher learning programming and building projects to grow my career.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" onClick={() => scrollToSection('#projects')}>
                View Portfolio
              </Button>
              <Button variant="heroOutline" onClick={() => scrollToSection('#contact')}>
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sujal-giri-9501253a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/sujalgiriiitp-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:sujalgiriiitp@gmail.com"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up">
              {/* Decorative circle behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="absolute -inset-2 bg-secondary/30 rounded-full blob-animate" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-card">
                <img
                  src={profilePhoto}
                  alt="Sujal Giri - Computer Science Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card px-4 py-2 float-animate">
                <span className="text-sm font-semibold text-foreground">🎓 Student</span>
              </div>
              <div className="absolute -bottom-2 -left-4 bg-card rounded-xl shadow-card px-4 py-2 float-animate" style={{ animationDelay: '-3s' }}>
                <span className="text-sm font-semibold text-foreground">💻 Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
