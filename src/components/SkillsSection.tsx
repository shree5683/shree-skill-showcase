import { Code2, Database, Wrench, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "Core Java", "SQL", "OOP"],
  },
  {
    title: "Frontend",
    icon: Lightbulb,
    skills: ["HTML5", "CSS3", "React.js", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jira", "Agile", "SDLC"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.02]" />
      
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            What I Work With
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover-lift hover-glow animate-on-scroll stagger-${index + 1} ${isVisible ? "visible" : ""}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
