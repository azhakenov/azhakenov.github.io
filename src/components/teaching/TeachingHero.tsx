import { GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function TeachingHero() {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Teaching</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Teaching & Mentoring
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I am lecturing Honors Physics III at Rutgers this semester. I have also
              TA'd across the introductory and intermediate sequences, taught quantum
              computation to high-school students over Zoom, coached olympiad students,
              and tutored privately from high school through graduate level.
            </p>

            <Button asChild variant="outline" className="gap-2">
              <Link to="/teaching/resources">
                Browse Course Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Lecturer</p>
                  <p className="text-sm text-muted-foreground">Honors Physics III, Fall 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Private Tutor</p>
                  <p className="text-sm text-muted-foreground">All Levels</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Competition Prep</p>
                  <p className="text-sm text-muted-foreground">Physics Olympiad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
