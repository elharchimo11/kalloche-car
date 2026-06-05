import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/site";

export function CTA() {
  return (
    <section className="px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-primary-foreground shadow-elegant md:p-16"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">Prêt à prendre la route ?</h2>
            <p className="mt-3 max-w-md text-primary-foreground/85">
              Réservez en moins d'une minute. Notre équipe vous répond immédiatement sur WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/reservation" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105">
              Réserver
            </Link>
            <button
              type="button"
              onClick={() => openWhatsApp("Bonjour, je souhaite réserver une voiture.")}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
