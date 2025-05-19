
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Users, Trophy, Star } from "lucide-react";

interface RoomProps {
  id: string;
  name: string;
  participants: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  topic: string;
}

const SAMPLE_ROOMS: RoomProps[] = [
  {
    id: "room-1",
    name: "Quantum Beginners",
    participants: 8,
    difficulty: "Easy",
    topic: "Fundamentals of Quantum Physics"
  },
  {
    id: "room-2",
    name: "Schrödinger's Club",
    participants: 12,
    difficulty: "Medium",
    topic: "Wave Functions & Probability"
  },
  {
    id: "room-3",
    name: "Heisenberg's Uncertainty",
    participants: 6,
    difficulty: "Hard",
    topic: "Uncertainty Principle & Measurement"
  },
  {
    id: "room-4",
    name: "Quantum Entanglement Masters",
    participants: 4,
    difficulty: "Expert",
    topic: "Quantum Entanglement & Bell's Theorem"
  }
];

const DifficultyBadge = ({ level }: { level: string }) => {
  const colorMap = {
    "Easy": "bg-green-500/20 text-green-400 border-green-500/30",
    "Medium": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Hard": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Expert": "bg-red-500/20 text-red-400 border-red-500/30"
  };
  
  const color = colorMap[level as keyof typeof colorMap] || colorMap["Medium"];
  
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${color}`}>
      {level}
    </span>
  );
};

export const ChallengeRoom = () => {
  const handleJoinRoom = (roomId: string, roomName: string) => {
    toast.success(`Joined room: ${roomName}`);
  };
  
  const handleCreateRoom = () => {
    toast.info("Create your own challenge room");
  };
  
  return (
    <Card className="w-full shadow-lg border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Challenge Rooms</CardTitle>
          </div>
          <Button onClick={handleCreateRoom} size="sm">Create Room</Button>
        </div>
        <CardDescription>
          Join a room and compete with other physics enthusiasts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {SAMPLE_ROOMS.map((room) => (
            <div key={room.id} className="flex items-center justify-between p-3 border border-primary/10 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{room.name}</h3>
                  <DifficultyBadge level={room.difficulty} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{room.topic}</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Users className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{room.participants} participants</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleJoinRoom(room.id, room.name)}>
                Join
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>Join rooms to earn points and climb the leaderboard!</span>
        </div>
      </CardFooter>
    </Card>
  );
};
