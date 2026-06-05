import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";


const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/flotte", label: "Flotte" },
  { to: "/reservation", label: "Réservation" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-elegant transition-transform group-hover:scale-110">
            <Car className="h-5 w-5 text-primary-foreground" />
          </span> */}
          <span className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <img
              src={SITE.name}
                      loading="lazy"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/reservation"
          className="hidden rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105 md:inline-flex"
        >
          Réserver
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="border-t border-border md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/reservation"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gradient-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Réserver maintenant
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
