import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, ExternalLink, Award } from "lucide-react";
import { soccer } from "@/content/sports";

export function Soccer() {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">Soccer</h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">{soccer.intro}</p>
      </div>

      <div>
        <h4 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-golden" />
          Current Team
        </h4>
        <Card className="border-border/50 overflow-hidden">
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Team</p>
                <p className="font-semibold text-lg">{soccer.currentTeam.team}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">League</p>
                {soccer.currentTeam.leagueUrl ? (
                  <a
                    href={soccer.currentTeam.leagueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {soccer.currentTeam.league}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="font-medium">{soccer.currentTeam.league}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Recent Result</p>
                <Badge variant="secondary" className="bg-golden/10 text-golden border-golden/20">
                  {soccer.currentTeam.recentResult}
                </Badge>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {soccer.currentTeam.photos.map((photo) => (
                <div key={photo.caption}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">{photo.caption}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-sage" />
          Earlier Highlights — MIPT (Field Theory)
        </h4>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground leading-relaxed">{soccer.miptHighlights.description}</p>
          </div>
          <div>
            <img
              src={soccer.miptHighlights.photo.src}
              alt={soccer.miptHighlights.photo.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover rounded-xl"
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">{soccer.miptHighlights.photo.caption}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-display text-xl font-semibold mb-6">Game of the Century (MIPT)</h4>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{soccer.gameOfTheCentury.description}</p>
            <div className="flex flex-wrap gap-2">
              {soccer.gameOfTheCentury.badges.map((badge) => (
                <Badge key={badge} variant="outline" className={badge.includes("Best") ? "border-golden/50 text-golden" : undefined}>
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-muted-foreground mb-4">Gallery</h5>
            <div className="grid sm:grid-cols-3 gap-4">
              {soccer.gameOfTheCentury.gallery.map((photo) => (
                <div key={photo.caption} className="group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover rounded-xl group-hover:shadow-soft transition-shadow"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
