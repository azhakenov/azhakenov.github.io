import { Link } from "react-router-dom";
import { ArrowRight, Atom, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "Research",
    description: "Publications, talks, and the problems behind them.",
    icon: Atom,
    href: "/research",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Teaching",
    description: "TA work, lecturing, olympiad coaching, and private tutoring.",
    icon: GraduationCap,
    href: "/teaching",
    color: "text-soft-blue",
    bgColor: "bg-soft-blue/10",
  },
  {
    title: "About",
    description: "Background, and what I do outside physics — soccer and judo.",
    icon: User,
    href: "/about",
    color: "text-sage",
    bgColor: "bg-secondary",
  },
];

export function SectionLinks() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.title} to={section.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${section.bgColor} flex items-center justify-center`}>
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
