import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Let's Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h3>
          <p className="text-muted-foreground mb-12 text-lg">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            a project idea, or just want to say hi, feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:shreeharshshinde006@gmail.com"
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground text-sm font-mono">shreeharshshinde006@gmail.com</p>
            </a>

            <a
              href="tel:+919850941105"
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-muted-foreground text-sm font-mono">+91 9850941105</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://linkedin.com/in/shreeharsh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/shreeharsh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <Button variant="hero" size="xl" asChild>
            <a href="mailto:shreeharshshinde006@gmail.com">
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
