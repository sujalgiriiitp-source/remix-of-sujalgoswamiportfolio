import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold">
              Sujal<span className="text-secondary">.</span>
            </a>
            <p className="text-sm text-muted mt-2 opacity-70">
              © {currentYear} Sujal Giri. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm opacity-70">
            <span>Made with</span>
            <Heart size={16} className="text-destructive fill-destructive animate-pulse-soft" />
            <span>| Student Portfolio</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sujal-giri-9501253a0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/sujalgiriiitp-source"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:sujalgiriiitp@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
