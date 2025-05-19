
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Trophy, Star, Atom, Molecule } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Daily Challenges",
    description: "Solve a new quantum physics puzzle every day to sharpen your knowledge."
  },
  {
    icon: Users,
    title: "Challenge Rooms",
    description: "Create or join private rooms to compete with friends and colleagues."
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Climb the rankings and showcase your expertise in quantum physics."
  },
  {
    icon: Atom,
    title: "3D Visualizations",
    description: "Explore interactive 3D models of quantum phenomena and concepts."
  },
  {
    icon: Star,
    title: "Achievement System",
    description: "Earn badges and certificates as you master various physics topics."
  },
  {
    icon: Molecule,
    title: "Learning Resources",
    description: "Access curated materials to deepen your understanding of quantum mechanics."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Features</h2>
          <p className="text-muted-foreground">
            Everything you need to explore, understand, and master quantum physics concepts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/10 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
