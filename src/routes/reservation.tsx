import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "@/components/ReservationForm";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Réservation — Atlas Prestige Car" },
      { name: "description", content: "Réservez votre voiture en quelques clics. Demande envoyée directement sur WhatsApp." },
      { property: "og:title", content: "Réservez votre voiture" },
      { property: "og:description", content: "Réservation simple et rapide via WhatsApp." },
    ],
  }),
  component: ReservationPage,
});

const POINTS = [
  "Confirmation en moins de 10 minutes",
  "Aucun acompte requis pour réserver",
  "Annulation gratuite jusqu'à 24h avant",
  "Kilométrage illimité sur la plupart des locations",
];

function ReservationPage() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Réservation</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Votre voiture en <span className="text-gradient">quelques clics</span></h1>
          <p className="mt-4 text-muted-foreground">
            Remplissez le formulaire ci-contre. Votre demande nous parviendra instantanément
            sur WhatsApp et nous reviendrons vers vous immédiatement.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <ReservationForm />
      </div>
    </section>
  );
}
