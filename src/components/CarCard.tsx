import { motion } from "framer-motion";
import { Fuel, Settings2, Users } from "lucide-react";
import { type Car, } from "@/lib/cars";
import { openWhatsApp } from "@/lib/site";

export function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  const msg = `Bonjour, je suis intéressé par la location de la ${car.name} (${car.price} MAD / jour). Pouvez-vous me confirmer la disponibilité ?`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
        {car.category}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-primary" />{car.seats} places</span>
          <span className="inline-flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5 text-primary" />{car.transmission}</span>
          <span className="inline-flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5 text-primary" />{car.fuel}</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">{car.price} <span className="text-sm font-medium text-muted-foreground">MAD/jour</span></div>
          </div>
          <button
            type="button"
            onClick={() => openWhatsApp(msg)}
            className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-primary"
          >
            Réserver
          </button>
        </div>
      </div>
    </motion.article>
  );
}
