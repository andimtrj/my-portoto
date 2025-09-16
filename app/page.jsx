"use client";
import { useState } from "react";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import PageTransition from "@/components/PageTransition";
import HomePage from "@/components/HomePage";

export default function Home() {
  const [currentView, setCurrentView] = useState("welcome"); // 'welcome' | 'transition' | 'home'

  const handleWelcomeComplete = () => {
    setCurrentView("transition");
  };

  const handleTransitionComplete = () => {
    setCurrentView("home");
  };

  return (
    <div className="relative">
      {currentView === "welcome" && (
        <WelcomeAnimation onComplete={handleWelcomeComplete} />
      )}

      {currentView === "transition" && (
        <PageTransition onComplete={handleTransitionComplete} />
      )}

      {currentView === "home" && <HomePage />}
    </div>
  );
}
