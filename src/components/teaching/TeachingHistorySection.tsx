import { Users, Award, School, GraduationCap, Globe, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { miptTeaching, otherTeaching, olympiadExperience, type TeachingHistoryItem } from "@/content/teaching";

const iconMap = {
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  users: Users,
  school: School,
  award: Award,
  globe: Globe,
};

function HistoryCard({ item }: { item: TeachingHistoryItem }) {
  const Icon = iconMap[item.icon];
  return (
    <Card className="border-border/50 hover:shadow-soft transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1.5 flex-1 min-w-0">
            <h3 className="font-display font-semibold text-sm leading-tight">{item.title}</h3>
            {item.organization && <p className="text-xs text-primary">{item.organization}</p>}
            <p className="text-xs text-muted-foreground">{item.description}</p>
            <Badge variant="outline" className="text-xs">
              {item.period}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TeachingHistorySection() {
  return (
    <section id="history" className="py-16 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold">Teaching at MIPT</h2>
              <Badge variant="outline" className="text-sm">
                Moscow Institute of Physics and Technology
              </Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {miptTeaching.map((item) => (
                <HistoryCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Other Teaching Experience</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherTeaching.map((item) => (
                <HistoryCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold">Olympiad & Professional Experience</h2>
              <Badge variant="outline" className="text-sm">
                ~1000 students taught
              </Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {olympiadExperience.map((item) => (
                <HistoryCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
