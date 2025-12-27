import { CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const highlights = [
  { icon: Target, text: 'Goal-Oriented' },
  { icon: Lightbulb, text: 'Quick Learner' },
  { icon: TrendingUp, text: 'Growth Mindset' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Designing Solutions, Not<br />
            <span className="gradient-text">Just Visuals</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration Side */}
          <div className="relative">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-secondary/20 rounded-3xl" />
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 bg-primary/10 rounded-3xl" />
              
              {/* Main content card */}
              <div className="relative bg-card rounded-3xl shadow-card p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-2xl p-6 text-center hover-lift">
                    <span className="text-3xl font-bold text-primary">2+</span>
                    <p className="text-sm text-muted-foreground mt-1">Years Learning</p>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center hover-lift">
                    <span className="text-3xl font-bold text-secondary">5+</span>
                    <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 hover-lift">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <CheckCircle className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Always Learning</p>
                        <p className="text-sm text-muted-foreground">Building new skills every day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am currently pursuing a <span className="text-foreground font-medium">BTech in Computer Science and Engineering</span> and 
              a <span className="text-foreground font-medium">BS degree in Computer Science & Data Analytics</span>. I am focused on building 
              strong fundamentals in programming, analytics, and web technologies while working on practical projects to prepare for future opportunities.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              My passion lies in understanding data patterns and creating meaningful web experiences. 
              I believe in continuous learning and am always eager to take on new challenges that help me grow as a developer.
            </p>

            {/* Highlight Cards */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
                >
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
