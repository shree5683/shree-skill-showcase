import { Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Jr. Software Developer",
    company: "Creazione Software",
    period: "July 2025 – Present",
    description: [
      "Completed 2 months of professional training on web development fundamentals",
      "Designed and enhanced a dashboard page for a gaming website using React, JavaScript, and CSS",
      "Focused on responsive design and collaborated with team members to Enhanced UI consistency across devices",
    ],
    current: true,
  },
  {
    title: "Web Development Intern",
    company: "Tech-Place Solution",
    period: "January 2023 - March 2023",
    description: [
      "Designed and implemented 5+ responsive UI modules using HTML, CSS, Bootstrap, and media queries",
      "Integrated backend logic using Node.js and MySQL, improving data flow efficiency by 40%",
      "Collaborated in a 4-member team to deliver two full client modules, reducing delivery timeline by 25%",
      "Used Git and Jira for code collaboration, version control, and sprint planning",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute left-1/4 top-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Where I've Worked
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 md:mb-16 animate-on-scroll stagger-${index + 1} ${isVisible ? "visible" : ""} ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 mt-2 ${
                    exp.current ? "animate-pulse" : ""
                  }`}
                >
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover-glow hover-lift group">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-primary">{exp.company}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                    
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-last" : ""}`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;
