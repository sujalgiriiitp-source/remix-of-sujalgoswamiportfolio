import { ExternalLink, Github, Code, Folder } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Python Mini Projects',
    description: 'A collection of beginner-level Python programs focused on logic building, data handling, and problem-solving. Includes calculators, games, and utility scripts.',
    tech: ['Python', 'Logic Building', 'Data Handling'],
    category: 'Python',
    featured: true,
  },
  {
    title: 'Basic Portfolio Website',
    description: 'A simple personal portfolio website built with HTML and CSS to showcase projects and skills.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    category: 'Web Development',
    link: 'https://sujalgiriiitp-source.github.io/portfolio/',
    featured: true,
  },
  {
    title: 'Data Analysis Practice',
    description: 'Practice projects involving data cleaning, basic analysis, and visualization using Python libraries.',
    tech: ['Python', 'Pandas', 'Data Analysis'],
    category: 'Data Analytics',
    featured: false,
  },
];

const categories = ['All', 'Python', 'Web Development', 'Data Analytics'];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Digital Product <span className="gradient-text">Showcases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built while learning and growing as a developer
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift"
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Folder size={64} className="text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <button className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github size={20} />
                  </button>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Code size={18} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
