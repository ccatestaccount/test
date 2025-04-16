import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import TitleScreen from "@/pages/title-screen";
import { useEffect } from "react";

// This component helps with navigation on static hosting like Netlify
function StaticLocationWorkaround() {
  const [location, setLocation] = useLocation();
  
  // Handle navigation for Netlify's static site hosting
  useEffect(() => {
    // If we're on the Netlify domain and there's a path in the URL that isn't recognized by the router
    const path = window.location.pathname;
    if (path !== "/" && path !== "/home" && !path.startsWith("/__")) {
      // Redirect to the root
      window.history.replaceState(null, '', "/");
      setLocation("/");
    }
  }, [setLocation]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={TitleScreen} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StaticLocationWorkaround />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;