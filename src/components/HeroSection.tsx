import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create resume content
    const resumeContent = `SHREEHARSH SHINDE
Computer Engineer

Contact: +91 9850941105
Email: shreeharshshinde006@gmail.com
LinkedIn: linkedin.com/in/shreeharsh-shinde
GitHub: github.com/shreeharsh-shinde

PROFESSIONAL SUMMARY
Passionate Developer with internship and hands-on experience in React.js, Node.js, JavaScript, and Java. Skilled at building responsive, mobile-first web apps and eager to deliver robust solutions in dynamic environments.

SKILLS
Languages: JavaScript (ES6+), Core Java, SQL, Object Oriented Programming
Frontend: HTML5, CSS3, React.Js
Backend: Node.Js, Express.Js, REST APIs, MongoDB
Tools & Platforms: Git, GitHub, VS Code, Eclipse IDE, Jira, MySQL
Others: Problem Solving, Responsive Design, Agile Workflow, Deployment, SDLC

EXPERIENCE
Jr. Software Developer | Creazione Software | July 2025 – Present
• Completed 2 months of professional training on web development fundamentals
• Designed and enhanced a dashboard page for a gaming website using React, JavaScript, and CSS
• Focused on responsive design and collaborated with team members to Enhanced UI consistency across devices

Web Development Intern | Tech-Place Solution | January 2023 - March 2023
• Designed and implemented 5+ responsive UI modules using HTML, CSS, Bootstrap, and media queries
• Integrated backend logic using Node.js and MySQL, improving data flow efficiency by 40%
• Collaborated in a 4-member team to deliver two full client modules, reducing delivery timeline by 25%
• Used Git and Jira for code collaboration, version control, and sprint planning

PROJECTS
Student Record Management System
Tech Stack: Core Java, SQL, MySQL
• Built a CRUD-based console application to manage student data for academic purposes
• Achieved 98% data accuracy using JDBC and robust validation with exception handling
• Connected to MySQL for persistent data storage, handling 500+ test records without data loss

Movie Recommendation System | moviegyan.in
Tech Stack: React.js, JavaScript, HTML, CSS
• Created a responsive movie recommendation web app with dynamic search and filter features
• Optimized UI for mobile and desktop, achieving 95% positive user feedback
• Deployed as a live project with real-time features, Improving performance and user experience

EDUCATION
Savitribai Phule Pune University
B.E in Computer Engineering | January 2021 – June 2024
Final Year CGPA: 8.5`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Shreeharsh_Shinde_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="gradient-text">Shreeharsh Shinde</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-mono" style={{ animationDelay: "0.1s" }}>
            &lt;Computer Engineer /&gt;
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Passionate Full Stack Developer specializing in{" "}
            <span className="text-primary font-medium">React.js</span>,{" "}
            <span className="text-primary font-medium">Node.js</span>, and modern web technologies.
            Building responsive, user-centric applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={handleDownloadResume}>
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://linkedin.com/in/shreeharsh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/shreeharsh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:shreeharshshinde006@gmail.com"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
