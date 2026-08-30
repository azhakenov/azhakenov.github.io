import { FileText, Quote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { publicationsSnapshot } from "@/content/publications";

const metricsData = [
  { label: "Publications", value: publicationsSnapshot.metrics.papersCount, icon: FileText, description: "Peer-reviewed & preprint" },
  { label: "Citations", value: publicationsSnapshot.metrics.citationsCount, icon: Quote, description: "Total citations" },
  { label: "h-index", value: publicationsSnapshot.metrics.hIndex, icon: TrendingUp, description: "Impact measure" },
];

export function Metrics() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {metricsData.map((metric) => (
            <Card key={metric.label} className="border-border/50">
              <CardContent className="p-4 text-center">
                <metric.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                <div className="font-display text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="text-sm font-medium text-foreground/80">{metric.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="max-w-4xl mx-auto mt-2 text-xs text-muted-foreground">
          From INSPIRE-HEP, snapshot taken {new Date(publicationsSnapshot.generatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
        </p>
      </div>
    </section>
  );
}
