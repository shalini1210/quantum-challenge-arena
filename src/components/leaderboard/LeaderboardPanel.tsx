
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Medal, Trophy, Award } from "lucide-react";

interface LeaderboardUser {
  id: string;
  name: string;
  score: number;
  rank: number;
  badge?: string;
}

const SAMPLE_USERS: LeaderboardUser[] = [
  { id: "u1", name: "QuantumWizard", score: 1250, rank: 1, badge: "Quantum Master" },
  { id: "u2", name: "PhysicsNinja", score: 980, rank: 2, badge: "Theory Expert" },
  { id: "u3", name: "WaveFunction", score: 875, rank: 3, badge: "Challenge Champion" },
  { id: "u4", name: "ParticleExplorer", score: 720, rank: 4 },
  { id: "u5", name: "SpaceTimeBender", score: 650, rank: 5 },
  { id: "u6", name: "QuarkHunter", score: 590, rank: 6 },
  { id: "u7", name: "EntanglementPro", score: 520, rank: 7 },
  { id: "u8", name: "SchrödingersCat", score: 480, rank: 8 },
  { id: "u9", name: "QuantumComputer", score: 430, rank: 9 },
  { id: "u10", name: "PlanckConstant", score: 385, rank: 10 },
];

const RankIcon = ({ rank }: { rank: number }) => {
  if (rank === 1) {
    return <Trophy className="h-5 w-5 text-yellow-500" />;
  } else if (rank === 2) {
    return <Medal className="h-5 w-5 text-gray-300" />;
  } else if (rank === 3) {
    return <Award className="h-5 w-5 text-amber-700" />;
  }
  return <span className="w-5 h-5 inline-flex items-center justify-center">{rank}</span>;
};

export const LeaderboardPanel = () => {
  return (
    <Card className="w-full shadow-lg border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Trophy className="h-6 w-6 text-primary" />
          <CardTitle>Leaderboard</CardTitle>
        </div>
        <CardDescription>
          Top quantum physics champions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {SAMPLE_USERS.map((user) => (
            <div 
              key={user.id} 
              className={`flex items-center justify-between p-2 rounded-md ${
                user.rank <= 3 ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/30'
              } transition-all`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <RankIcon rank={user.rank} />
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  {user.badge && (
                    <Badge variant="outline" className="text-xs mt-1 bg-secondary/10">
                      {user.badge}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{user.score}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
