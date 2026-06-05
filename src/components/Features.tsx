import { motion } from "framer-motion";
import { Clock, CreditCard, Headphones, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, title: "Assurance tous risques", desc: "Tous nos véhicules sont entièrement assurés pour votre tranquillité." },
  { icon: Clock, title: "Disponible 24/7", desc: "Notre équipe est joignable jour et nuit pour vous accompagner." },
  { icon: MapPinned, title: "Livraison partout au Maroc", desc: "À l'aéroport, à l'hôtel ou à domicile — nous venons à vous." },
  { icon: CreditCard, title: "Sans caution bancaire", desc: "Paiement simple et transparent, aucun frais caché." },
  { icon: Sparkles, title: "Véhicules récents", desc: "Une flotte renouvelée régulièrement et impeccablement entretenue." },
  { icon: Headphones, title: "Service personnalisé", desc: "Un conseiller dédié pour vos demandes spéciales." },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Pourquoi nous</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">L'expérience location <span className="text-gradient">redéfinie</span></h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
