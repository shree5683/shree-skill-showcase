import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">&lt;</span>
            Shreeharsh Shinde
            <span className="text-primary">/&gt;</span>
            {" "}© {new Date().getFullYear()}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
