import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CARS } from "@/lib/cars";
import { CarCard } from "./CarCard";

export function FleetPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Notre flotte</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Trouvez le véhicule <span className="text-gradient">qui vous correspond</span></h2>
          </div>
          <Link to="/flotte" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Voir toute la flotte <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARS.slice(0, 3).map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
