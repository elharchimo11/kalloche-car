import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp("Bonjour, je souhaite obtenir des informations sur la location.")}
      aria-label="Contact WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_155)] text-white shadow-elegant animate-pulse-ring transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </button>
  );
}
