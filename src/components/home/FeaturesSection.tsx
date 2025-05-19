
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Atom, Cube, Circle, Square } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Discover Quantum Challenges
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interactive puzzles and visualizations that make quantum physics accessible
            and engaging for physics enthusiasts of all levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Atom className="h-10 w-10 text-primary" />}
            title="Daily Challenges" 
            description="New quantum physics puzzles every day to test your knowledge and intuition."
          />
          <FeatureCard 
            icon={<Cube className="h-10 w-10 text-secondary" />}
            title="3D Visualizations" 
            description="Interactive models that bring quantum concepts to life in three dimensions."
          />
          <FeatureCard 
            icon={<Circle className="h-10 w-10 text-quantum-pink" />}
            title="Challenge Rooms" 
            description="Create private rooms to challenge friends and colleagues to quantum duels."
          />
          <FeatureCard 
            icon={<Square className="h-10 w-10 text-quantum-blue" />}
            title="Leaderboards" 
            description="Compare your quantum problem-solving skills with physics enthusiasts worldwide."
          />
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">Explore All Features</Button>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow border-primary/10">
      <CardHeader className="space-y-1 pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
