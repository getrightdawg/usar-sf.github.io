/**
 * Main application entry point.
 * Configures global providers, routing, smooth scrolling, and UI layout.
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import ScrollToTop from "@/components/ui/scrolltotop";

import Lenis from "@studio-freight/lenis";
import { getLenis } from "./lib/lenis";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Recruitment from "@/pages/Recruitment";
import Courses from "@/pages/Courses";
import Propaganda from "@/pages/Propaganda";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

/**
 * Router component.
 * Handles client-side routing using Wouter.
 * Shows a loading screen initially before rendering routes.
 */
function Router() {
  const [isLoading, setIsLoading] = useState(true);

  // Show the loading screen until onComplete is called
  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  // Render the main app layout with navigation, routes, and footer
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

/**
 * App component.
 * Sets up global providers, smooth scrolling, toast notifications, tooltips, and routing.
 */
function App() {
  useEffect(() => {
    const lenis = getLenis();

    const handleScroll = () => {
      window.dispatchEvent(new Event("scroll"));
    };
    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App; 
