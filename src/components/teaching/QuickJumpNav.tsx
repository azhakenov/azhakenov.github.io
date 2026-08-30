import { ArrowUp, GraduationCap, Award, Star, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { id: "top", icon: ArrowUp, label: "Back to Top" },
  { id: "courses", icon: GraduationCap, label: "Teaching at Rutgers" },
  { id: "history", icon: Award, label: "Teaching History" },
  { id: "tutoring", icon: Star, label: "Private Tutoring" },
];

export function QuickJumpNav() {
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <TooltipProvider delayDuration={200}>
      {/* Desktop: vertical floating nav on the right */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {navItems.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="text-xs">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}

        {/* Not a scroll target — navigates to its own page, so it's styled
            filled/distinct from the scroll-to buttons above. */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="h-10 w-10 rounded-full shadow-sm">
              <Link to="/teaching/resources">
                <FileText className="h-4 w-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="text-xs">
            Teaching Resources
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Mobile: horizontal bar at the bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden gap-1.5 bg-background/90 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1.5 shadow-lg">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => scrollToSection(item.id)}
          >
            <item.icon className="h-3.5 w-3.5" />
          </Button>
        ))}
        <Button asChild size="icon" className="h-8 w-8 rounded-full">
          <Link to="/teaching/resources">
            <FileText className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </TooltipProvider>
  );
}
