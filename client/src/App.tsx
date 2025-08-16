import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Recruitment from "@/pages/Recruitment";
import Courses from "@/pages/Courses";
import Propaganda from "@/pages/Propaganda";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }
  return (
    <div className="min-h-screen bg-sf-black text-white">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recruitment" component={Recruitment} />
          <Route path="/courses" component={Courses} />
          <Route path="/propaganda" component={Propaganda} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="scroll-smooth">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
