import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import Services from "@/pages/services";
import About from "@/pages/about";
import Research from "@/pages/research";
import Contact from "@/pages/contact";
import AussieWayVisa from "@/pages/projects/aussie-way-visa";
import SenseStudyHub from "@/pages/projects/sense-studyhub";
import OraAid from "@/pages/projects/ora-aid";
import ExpertLash from "@/pages/projects/expertlash";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/aussie-way-visa" component={AussieWayVisa} />
      <Route path="/portfolio/sense-studyhub" component={SenseStudyHub} />
      <Route path="/portfolio/ora-aid" component={OraAid} />
      <Route path="/portfolio/expertlash" component={ExpertLash} />
      <Route path="/services" component={Services} />
      <Route path="/research" component={Research} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;