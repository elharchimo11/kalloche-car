import { Link } from "@tanstack/react-router";
import { Car, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
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
          <p className="mt-4 text-sm text-muted-foreground">
            Location de véhicules premium et économiques partout au Maroc. Service 24/7.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
            <li><Link to="/flotte" className="hover:text-primary">Notre flotte</Link></li>
            <li><Link to="/reservation" className="hover:text-primary">Réservation</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {SITE.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {SITE.email}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {SITE.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Horaires</h4>
          <p className="text-sm text-muted-foreground">Lun – Dim : 8h00 – 22h00</p>
          <p className="mt-2 text-sm text-muted-foreground">Livraison à l'aéroport disponible</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KALLOUCHE CAR. Tous droits réservés.
      </div>
    </footer>
  );
}
