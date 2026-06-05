// import { motion } from "framer-motion";
// import { Calendar, Car as CarIcon, MapPin, Send } from "lucide-react";
// import { useState } from "react";
// import { CARS } from "@/lib/cars";
// import { openWhatsApp } from "@/lib/site";

// const LOCATIONS = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Aéroport Mohammed V", "Aéroport Marrakech"];

// export function ReservationForm({ defaultCar }: { defaultCar?: string }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     car: defaultCar ?? CARS[0].name,
//     pickup: LOCATIONS[0],
//     dropoff: LOCATIONS[0],
//     start: "",
//     end: "",
//     notes: "",
//   });

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const msg = [
//       "🚗 *Nouvelle réservation*",
//       "",
//       `*Nom :* ${form.name}`,
//       `*Téléphone :* ${form.phone}`,
//       `*Véhicule :* ${form.car}`,
//       `*Lieu de prise :* ${form.pickup}`,
//       `*Lieu de retour :* ${form.dropoff}`,
//       `*Du :* ${form.start}`,
//       `*Au :* ${form.end}`,
//       form.notes ? `*Notes :* ${form.notes}` : "",
//     ].filter(Boolean).join("\n");
//     openWhatsApp(msg);
//   };

//   const field = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

//   return (
//     <motion.form
//       onSubmit={onSubmit}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
//     >
//       <div className="grid gap-4 md:grid-cols-2">
//         <Field label="Nom complet" icon={null}>
//           <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Votre nom" />
//         </Field>
//         <Field label="Téléphone" icon={null}>
//           <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} placeholder="+212 6 .. .. .. .." />
//         </Field>
//       </div>

//       <Field label="Véhicule" icon={<CarIcon className="h-4 w-4" />}>
//         <select value={form.car} onChange={(e) => setForm({ ...form, car: e.target.value })} className={field}>
//           {CARS.map((c) => <option key={c.id} value={c.name}>{c.name} — {c.price} MAD/j</option>)}
//         </select>
//       </Field>

//       <div className="grid gap-4 md:grid-cols-2">
//         <Field label="Lieu de prise" icon={<MapPin className="h-4 w-4" />}>
//           <select value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} className={field}>
//             {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
//           </select>
//         </Field>
//         <Field label="Lieu de retour" icon={<MapPin className="h-4 w-4" />}>
//           <select value={form.dropoff} onChange={(e) => setForm({ ...form, dropoff: e.target.value })} className={field}>
//             {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
//           </select>
//         </Field>
//       </div>

//       <div className="grid gap-4 md:grid-cols-2">
//         <Field label="Date de départ" icon={<Calendar className="h-4 w-4" />}>
//           <input required type="date" value={form.start} onChange={(e) => setForm({ ...form, start: e.target.value })} className={field} />
//         </Field>
//         <Field label="Date de retour" icon={<Calendar className="h-4 w-4" />}>
//           <input required type="date" value={form.end} onChange={(e) => setForm({ ...form, end: e.target.value })} className={field} />
//         </Field>
//       </div>

//       <Field label="Notes (optionnel)" icon={null}>
//         <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={field} placeholder="Vol, options, ..." />
//       </Field>

//       <button
//         type="submit"
//         className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
//       >
//         Envoyer via WhatsApp
//         <Send className="h-4 w-4" />
//       </button>
//       <p className="text-center text-xs text-muted-foreground">
//         Votre réservation sera transmise directement à notre équipe sur WhatsApp.
//       </p>
//     </motion.form>
//   );
// }

// function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
//         {icon}
//         {label}
//       </span>
//       {children}
//     </label>
//   );
// }







import { motion } from "framer-motion";
import {
  Calendar,
  Car as CarIcon,
  MapPin,
  Send,
} from "lucide-react";

import { useState } from "react";
import { format } from "date-fns";

import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

import { CARS } from "@/lib/cars";
import { openWhatsApp } from "@/lib/site";

const LOCATIONS = [
  "Casablanca",
  "Marrakech",
  "Rabat",
  "Tanger",
  "Agadir",
  "Fès",
  "Aéroport Mohammed V",
  "Aéroport Marrakech",
];

export function ReservationForm({
  defaultCar,
}: {
  defaultCar?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: defaultCar ?? CARS[0].name,
    pickup: LOCATIONS[0],
    dropoff: LOCATIONS[0],
    start: undefined as Date | undefined,
    end: undefined as Date | undefined,
    notes: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      "🚗 *Nouvelle réservation*",
      "",
      `*Nom :* ${form.name}`,
      `*Téléphone :* ${form.phone}`,
      `*Véhicule :* ${form.car}`,
      `*Lieu de prise :* ${form.pickup}`,
      `*Lieu de retour :* ${form.dropoff}`,
      `*Du :* ${
        form.start ? format(form.start, "PPP") : ""
      }`,
      `*Au :* ${
        form.end ? format(form.end, "PPP") : ""
      }`,
      form.notes ? `*Notes :* ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(msg);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
    >
      {/* Name + Phone */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nom complet" icon={null}>
          <input
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className={field}
            placeholder="Votre nom"
          />
        </Field>

        <Field label="Téléphone" icon={null}>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className={field}
            placeholder="+212 6 .. .. .. .."
          />
        </Field>
      </div>

      {/* Car */}
      <Field
        label="Véhicule"
        icon={<CarIcon className="h-4 w-4" />}
      >
        <select
          value={form.car}
          onChange={(e) =>
            setForm({
              ...form,
              car: e.target.value,
            })
          }
          className={field}
        >
          {CARS.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name} — {c.price} MAD/j
            </option>
          ))}
        </select>
      </Field>

      {/* Pickup + Dropoff */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Lieu de prise"
          icon={<MapPin className="h-4 w-4" />}
        >
          <select
            value={form.pickup}
            onChange={(e) =>
              setForm({
                ...form,
                pickup: e.target.value,
              })
            }
            className={field}
          >
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>

        <Field
          label="Lieu de retour"
          icon={<MapPin className="h-4 w-4" />}
        >
          <select
            value={form.dropoff}
            onChange={(e) =>
              setForm({
                ...form,
                dropoff: e.target.value,
              })
            }
            className={field}
          >
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Dates */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Start Date */}
        <Field
          label="Date de départ"
          icon={<Calendar className="h-4 w-4" />}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <button
                type="button"
                className={`${field} text-left`}
              >
                {form.start
                  ? format(form.start, "PPP")
                  : "Choisir une date"}
              </button>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                className="z-50 rounded-2xl border bg-white p-3 shadow-2xl"
                sideOffset={5}
              >
                <DayPicker
                  mode="single"
                  selected={form.start}
                  onSelect={(date) =>
                    setForm({
                      ...form,
                      start: date,
                    })
                  }
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </Field>

        {/* End Date */}
        <Field
          label="Date de retour"
          icon={<Calendar className="h-4 w-4" />}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <button
                type="button"
                className={`${field} text-left`}
              >
                {form.end
                  ? format(form.end, "PPP")
                  : "Choisir une date"}
              </button>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                className="z-50 rounded-2xl border bg-white p-3 shadow-2xl"
                sideOffset={5}
              >
                <DayPicker
                  mode="single"
                  selected={form.end}
                  onSelect={(date) =>
                    setForm({
                      ...form,
                      end: date,
                    })
                  }
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </Field>
      </div>

      {/* Notes */}
      <Field label="Notes (optionnel)" icon={null}>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value,
            })
          }
          className={field}
          placeholder="Vol, options, ..."
        />
      </Field>

      {/* Button */}
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
      >
        Envoyer via WhatsApp
        <Send className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Votre réservation sera transmise directement à
        notre équipe sur WhatsApp.
      </p>
    </motion.form>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </span>

      {children}
    </label>
  );
}
