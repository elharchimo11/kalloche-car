import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Youssef B.", text: "Service excellent, voiture impeccable et bien entretenue. Je recommande vivement !", when: "il y a 2 mois" },
  { name: "Sarah M.", text: "Très professionnel, prix compétitifs et livraison à l'heure. Expérience parfaite.", when: "il y a 1 mois" },
  { name: "Ahmed K.", text: "J'ai loué plusieurs fois, toujours satisfait. Personnel aimable et véhicules nickel.", when: "il y a 3 mois" },
  { name: "Fatima Z.", text: "Rapport qualité-prix imbattable. La réservation en ligne est simple et rapide.", when: "il y a 2 semaines" },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Ce que disent <span className="text-gradient">nos clients</span></h2>
          <p className="mt-2 text-sm text-muted-foreground">Noté 4.9 / 5 — basé sur 200+ avis</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/80">{r.text}</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.when}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
