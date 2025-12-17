import { ExternalLink, Github, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "moviegyan.in",
    techStack: ["React.js", "JavaScript", "HTML", "CSS"],
    description: [
      "Created a responsive movie recommendation web app with dynamic search and filter features",
      "Optimized UI for mobile and desktop, achieving 95% positive user feedback",
      "Deployed as a live project with real-time features",
    ],
    icon: Globe,
    link: "https://moviegyan.in",
    featured: true,
  },
  {
    title: "Student Record Management System",
    subtitle: "Academic Management Tool",
    techStack: ["Core Java", "SQL", "MySQL"],
    description: [
      "Built a CRUD-based console application to manage student data",
      "Achieved 98% data accuracy using JDBC and robust validation",
      "Handled 500+ test records without data loss",
    ],
    icon: Database,
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            What I've Built
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in building real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <div className="mt-8">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4" />
                        Visit Live Site
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
