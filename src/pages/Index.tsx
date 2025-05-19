
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { DailyChallenge } from "@/components/challenge/DailyChallenge";
import { ChallengeRoom } from "@/components/challenge/ChallengeRoom";
import { LeaderboardPanel } from "@/components/leaderboard/LeaderboardPanel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        
        <section id="challenges" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Daily Challenge</h2>
            <DailyChallenge />
          </div>
        </section>
        
        <section id="rooms" className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Challenge Rooms</h2>
            <ChallengeRoom />
          </div>
        </section>
        
        <section id="leaderboard" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Leaderboard</h2>
            <LeaderboardPanel />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
