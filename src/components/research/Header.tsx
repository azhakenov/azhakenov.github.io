import { Mail, GraduationCap, MapPin } from "lucide-react";
import { profile, links } from "@/content/site";

const identityLinks = [
  { label: "Email", href: links.email, external: false },
  { label: "ORCID", href: links.orcid, external: true },
  { label: "INSPIRE", href: links.inspire, external: true },
  ...(links.scholar ? [{ label: "Google Scholar", href: links.scholar, external: true }] : []),
  { label: "CV (PDF)", href: links.cv, external: false },
];

export function ResearchHeader() {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5 animate-fade-in-up">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {profile.name} — {profile.role}, {profile.institution}. Defending{" "}
              {profile.expectedDefense}.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>{profile.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{profile.email}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {identityLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a key={link.label} href={link.href} className="text-sm font-medium text-primary hover:underline">
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
