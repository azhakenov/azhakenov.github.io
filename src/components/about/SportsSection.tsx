import { Soccer } from "@/components/about/Soccer";
import { Wrestling } from "@/components/about/Wrestling";

export function SportsSection() {
  return (
    <section id="sports" className="py-16 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-4">Sports</h2>
            <p className="text-muted-foreground leading-relaxed">
              Physical training is not separate from the intellectual work. Sport is
              where I practice discipline, patience, and long-term consistency — the
              same qualities theoretical work requires.
            </p>
          </div>
          <Soccer />
          <Wrestling />
        </div>
      </div>
    </section>
  );
}
