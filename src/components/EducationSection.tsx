import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'BTech in Computer Science & Engineering (CSE)',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: '2024 – Present',
    status: 'Currently Pursuing',
    color: 'primary',
  },
  {
    degree: 'BS in Computer Science & Data Analytics (CSDA)',
    institution: 'IIT Patna',
    period: '2025 – Present',
    status: 'Currently Pursuing',
    color: 'secondary',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building strong foundations in computer science through prestigious institutions
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-card rounded-2xl p-6 shadow-card border border-border hover-lift ${
                    edu.color === 'primary' ? 'hover:border-primary/30' : 'hover:border-secondary/30'
                  }`}>
                    {/* Status badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      edu.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/20 text-secondary-foreground'
                    }`}>
                      {edu.status}
                    </span>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{edu.institution}</span>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Icon for larger screens */}
                <div className="hidden md:flex md:w-1/2 items-start justify-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    edu.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/20'
                  }`}>
                    <GraduationCap size={32} className={edu.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
