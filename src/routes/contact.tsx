import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, openWhatsApp } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atlas Prestige Car" },
      { name: "description", content: "Contactez-nous par téléphone, WhatsApp ou email. Notre équipe vous répond 24/7." },
      { property: "og:title", content: "Nous contacter" },
      { property: "og:description", content: "Notre équipe est disponible 24/7 pour vous accompagner." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Phone, label: "Téléphone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Discuter maintenant", href: "#", message: "Bonjour, j'ai une question." },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Adresse", value: SITE.address, href: "#" },
    { icon: Clock, label: "Horaires", value: "7j/7 · 8h – 22h", href: "#" },
  ];
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Contact</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">On est <span className="text-gradient">à votre écoute</span></h1>
          <p className="mt-4 text-muted-foreground">Une question, une demande spéciale ? Notre équipe vous répond rapidement.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              onClick={(event) => {
                if (it.message) {
                  event.preventDefault();
                  openWhatsApp(it.message);
                }
              }}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{it.label}</div>
              <div className="mt-1 font-semibold">{it.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
