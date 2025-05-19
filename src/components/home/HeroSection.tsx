
import { Button } from "@/components/ui/button";
import { QuantumScene } from "../quantum/QuantumScene";

export const HeroSection = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Background particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 bg-secondary/20 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 left-60 w-80 h-80 bg-quantum-pink/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Explore the World of <span className="text-primary">Quantum Physics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Challenge yourself with daily quantum puzzles, compete with other
              physics enthusiasts, and visualize quantum concepts in 3D.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="animate-pulse-glow">
                Start Exploring
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="text-primary font-medium">1,000+</span> physics enthusiasts
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg filter blur-xl opacity-30"></div>
            <div className="relative bg-card/30 backdrop-blur border border-primary/20 rounded-lg shadow-lg overflow-hidden">
              <QuantumScene className="w-full h-[400px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
