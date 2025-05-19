
import { Button } from "@/components/ui/button";
import { Atom, Trophy, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { LoginForm } from "../auth/LoginForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Atom className="h-8 w-8 text-primary animate-pulse-glow" />
          <span className="text-lg font-bold">Quantum Challenge Arena</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="#challenges" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Daily Challenge
          </a>
          <a href="#rooms" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
            <Users className="h-4 w-4" />
            Challenge Rooms
          </a>
          <a href="#leaderboard" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            Leaderboard
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="sm">Dashboard</Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <LoginForm />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
};
