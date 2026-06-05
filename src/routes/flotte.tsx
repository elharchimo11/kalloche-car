import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CARS } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";

export const Route = createFileRoute("/flotte")({
  head: () => ({
    meta: [
      { title: "Notre flotte — Atlas Prestige Car" },
      { name: "description", content: "Découvrez notre flotte de véhicules : citadines, berlines, SUV et premium pour tous vos déplacements au Maroc." },
      { property: "og:title", content: "Notre flotte de véhicules" },
      { property: "og:description", content: "Citadines, berlines, SUV et premium — trouvez le véhicule idéal." },
    ],
  }),
  component: FleetPage,
});

const CATS = ["Tous", "Citadine", "Berline", "SUV", "Premium"] as const;

function FleetPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const list = cat === "Tous" ? CARS : CARS.filter((c) => c.category === cat);
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Notre flotte</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Une voiture pour <span className="text-gradient">chaque envie</span></h1>
          <p className="mt-4 text-muted-foreground">Tous nos véhicules sont récents, entretenus et entièrement assurés.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                cat === c
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                  : "border border-border bg-card hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
