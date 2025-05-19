
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Atom } from "lucide-react";

const SAMPLE_CHALLENGE = {
  id: 'qc-001',
  title: "Quantum Superposition",
  question: "In quantum mechanics, a particle can exist in multiple states simultaneously. If a quantum system can be in two states with equal probability, what is the probability of measuring the system in the first state?",
  hint: "Think about the fundamental principles of quantum measurement.",
  answer: "0.5",
  explanation: "According to quantum mechanics, when a quantum system is in a superposition of states with equal probability amplitudes, the probability of measuring any one of those states is equal. In this case, with two equally probable states, the probability is 0.5 or 50%."
};

export const DailyChallenge = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [challenge, setChallenge] = useState(SAMPLE_CHALLENGE);

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      toast.error("Please provide an answer");
      return;
    }

    setHasSubmitted(true);
    
    if (userAnswer.trim().toLowerCase() === challenge.answer.toLowerCase()) {
      toast.success("Correct! Well done!");
    } else {
      toast.error("Not quite right. Try again!");
    }
  };

  const handleReset = () => {
    setUserAnswer('');
    setHasSubmitted(false);
    setShowHint(false);
  };

  return (
    <Card className="w-full shadow-lg border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-2">
          <Atom className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Daily Challenge</CardTitle>
        </div>
        <CardDescription>
          Solve today's quantum physics puzzle
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-primary">{challenge.title}</h3>
          <p className="text-muted-foreground">{challenge.question}</p>
          
          {showHint && (
            <div className="mt-4 p-3 bg-muted/30 rounded-md border border-primary/20">
              <p className="text-sm italic"><span className="font-semibold">Hint:</span> {challenge.hint}</p>
            </div>
          )}
          
          {hasSubmitted && userAnswer.trim().toLowerCase() === challenge.answer.toLowerCase() && (
            <div className="mt-4 p-4 bg-green-900/20 rounded-md border border-green-500/30">
              <p className="text-sm text-green-400 font-medium">Correct!</p>
              <p className="mt-2 text-sm">{challenge.explanation}</p>
            </div>
          )}
          
          {hasSubmitted && userAnswer.trim().toLowerCase() !== challenge.answer.toLowerCase() && (
            <div className="mt-4 p-4 bg-red-900/20 rounded-md border border-red-500/30">
              <p className="text-sm text-red-400 font-medium">Incorrect</p>
              <p className="mt-2 text-sm">Try again! Use the hint if you need help.</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col space-y-2">
          <Input
            placeholder="Enter your answer..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="bg-muted/30"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!hasSubmitted ? (
          <>
            <Button variant="outline" onClick={() => setShowHint(!showHint)}>
              {showHint ? "Hide Hint" : "Show Hint"}
            </Button>
            <Button onClick={handleSubmit}>Submit Answer</Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={handleReset}>Try Another</Button>
            <Button onClick={() => toast.info("Challenge completed! Return tomorrow for a new challenge.")}>
              Next Challenge
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
