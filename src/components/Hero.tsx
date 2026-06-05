import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, oklch(0.12 0.02 240 / 0.88) 0%, oklch(0.12 0.02 240 / 0.55) 55%, oklch(0.12 0.02 240 / 0.2) 100%)" }}
        />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          N°1 de la location au Maroc
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl"
        >
          Louez votre voiture <span className="text-gradient">en toute confiance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Des véhicules haut de gamme, un service professionnel, et des tarifs imbattables.
          Réservation en quelques clics, livraison partout au Maroc.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/reservation"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
          >
            Réserver maintenant
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/flotte"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
          >
            Découvrir la flotte
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { k: "10+", v: "Années d'expérience" },
            { k: "50+", v: "Véhicules" },
            { k: "4.9★", v: "Note client" },
            { k: "24/7", v: "Support" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-primary-glow">{s.k}</div>
              <div className="mt-1 text-xs text-white/70">{s.v}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 inline-flex items-center gap-2 text-xs text-white/60">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Annulation gratuite · Assurance tous risques incluse
        </div>
      </div>
    </section>
  );
}
