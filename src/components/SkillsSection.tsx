import { Code, Database, Globe, GitBranch, Brain, Lightbulb, BookOpen } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', level: 40, icon: Code, color: 'primary' },
  { name: 'Data Analytics', level: 35, icon: Database, color: 'accent' },
  { name: 'HTML & CSS', level: 50, icon: Globe, color: 'secondary' },
  { name: 'Basic SQL', level: 30, icon: Database, color: 'primary' },
  { name: 'Git & GitHub', level: 45, icon: GitBranch, color: 'accent' },
];

const softSkills = [
  { name: 'Problem Solving', icon: Brain },
  { name: 'Logical Thinking', icon: Lightbulb },
  { name: 'Continuous Learning', icon: BookOpen },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical & Soft <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through continuous learning and hands-on practice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code size={20} className="text-primary" />
              </span>
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        skill.color === 'primary' ? 'bg-primary/10' :
                        skill.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-accent/10'
                      }`}>
                        <skill.icon size={16} className={
                          skill.color === 'primary' ? 'text-primary' :
                          skill.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        } />
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        skill.color === 'primary' ? 'bg-primary' :
                        skill.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Level indicator */}
                  <span className="text-xs text-muted-foreground mt-1 inline-block">
                    {skill.level <= 40 ? 'Beginner' : skill.level <= 60 ? 'Intermediate' : 'Advanced'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Brain size={20} className="text-secondary" />
              </span>
              Soft Skills
            </h3>

            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 border border-border hover-lift group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && 'Breaking down complex problems into manageable solutions'}
                        {index === 1 && 'Applying structured thinking to reach optimal outcomes'}
                        {index === 2 && 'Always eager to learn new technologies and concepts'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info card */}
            <div className="mt-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Currently learning:</span> Advanced Python, 
                Data Visualization with Matplotlib/Seaborn, React.js fundamentals, and Database Management Systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
