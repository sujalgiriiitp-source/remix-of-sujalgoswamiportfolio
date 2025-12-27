import { Code, LineChart, Globe, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Beginner Python Projects',
    description: 'Simple Python programs and scripts for automation, data processing, and problem-solving exercises.',
    color: 'primary',
  },
  {
    icon: Globe,
    title: 'Basic Web Development',
    description: 'Clean and responsive websites using HTML, CSS, and basic JavaScript for personal or small business needs.',
    color: 'secondary',
  },
  {
    icon: LineChart,
    title: 'Data Analytics Practice',
    description: 'Basic data analysis and visualization projects using Python libraries like Pandas and Matplotlib.',
    color: 'accent',
  },
];

const workingProcess = [
  { step: '01', title: 'Learning', description: 'Understanding new concepts and technologies' },
  { step: '02', title: 'Planning', description: 'Breaking down problems into manageable tasks' },
  { step: '03', title: 'Building', description: 'Implementing solutions with clean code' },
  { step: '04', title: 'Improving', description: 'Iterating and learning from feedback' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Can <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Currently building skills and projects as a student. Open to learning opportunities, internships, and collaboration.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 border border-border hover-lift text-center"
            >
              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                service.color === 'secondary' ? 'bg-secondary/20 group-hover:bg-secondary/30' :
                'bg-accent/10 group-hover:bg-accent/20'
              }`}>
                <service.icon size={36} className={
                  service.color === 'primary' ? 'text-primary' :
                  service.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                } />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className={`w-12 h-1 mx-auto mt-6 rounded-full transition-all duration-300 group-hover:w-20 ${
                service.color === 'primary' ? 'bg-primary' :
                service.color === 'secondary' ? 'bg-secondary' :
                'bg-accent'
              }`} />
            </div>
          ))}
        </div>

        {/* Working Process */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Process
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            My Working <span className="gradient-text">Process</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingProcess.map((process, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < workingProcess.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}

              <div className="relative bg-background rounded-2xl p-6 border border-border text-center hover-lift z-10">
                {/* Step number */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">{process.step}</span>
                </div>

                {/* Title */}
                <h4 className="font-bold text-foreground mb-2">{process.title}</h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full px-6 py-3 border border-border">
            <Lightbulb size={20} className="text-secondary" />
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Open to opportunities:</span> Internships, collaborations, and learning experiences
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
