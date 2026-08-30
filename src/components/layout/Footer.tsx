import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { profile, links } from "@/content/site";

const navigation = {
  main: [
    { name: "Research", href: "/research", internal: true },
    { name: "Teaching", href: "/teaching", internal: true },
    { name: "About", href: "/about", internal: true },
    { name: "Sports", href: "/about#sports", internal: true },
    { name: "CV", href: links.cv, internal: false },
  ],
  social: [
    { name: "LinkedIn", href: links.linkedin, icon: Linkedin },
    { name: "Email", href: links.email, icon: Mail },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-foreground">
                Abay <span className="text-primary">Zhakenov</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {profile.role} at {profile.institution}. Integrable systems, quantum
              impurities, and the thermodynamic Bethe ansatz.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}, USA</span>
            </div>
          </div>

          <div className="lg:justify-self-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) =>
                item.internal ? (
                  <li key={item.name}>
                    <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abay Zhakenov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
