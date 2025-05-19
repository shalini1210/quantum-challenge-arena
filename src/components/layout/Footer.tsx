
import { Atom } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Atom className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Quantum Challenge Arena</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center max-w-md">
          A platform for physics enthusiasts to explore quantum concepts, 
          solve challenges, and compete with fellow physicists.
        </p>
        
        <div className="flex items-center gap-6 mt-2">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        
        <div className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Quantum Challenge Arena. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
