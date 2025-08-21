import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING...");

  const loadingMessages = [
    "INITIALIZING...",
    "LOADING PAGES...",
    "ESTABLISHING SECURE CONNECTION...",
    "VERIFYING CLEARANCE...",
    "FINALIZING...",
  ];

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress < 20) setLoadingText(loadingMessages[0]);
        else if (newProgress < 40) setLoadingText(loadingMessages[1]);
        else if (newProgress < 60) setLoadingText(loadingMessages[2]);
        else if (newProgress < 80) setLoadingText(loadingMessages[3]);
        else setLoadingText(loadingMessages[4]);

        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-sf-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse-glow mb-8">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/SpecialForces_Badge.svg/1024px-SpecialForces_Badge.svg.png"
              alt="Circle Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-8 animate-fade-in-up">
          ARMY SPECIAL FORCES
        </h1>

        <div className="w-80 bg-sf-gray h-2 mb-6 mx-auto">
          <div
            className="bg-white h-2 transition-all duration-300 ease-out loading-gradient animate-gradient-x"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sf-light text-lg font-medium animate-fade-in">
          {loadingText}
        </p>

        <p
          className="text-sm text-sf-light/60 mt-4 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          {Math.round(progress)}% COMPLETE
        </p>
      </div>
    </div>
  );
}
