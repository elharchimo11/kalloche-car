import logo from "@/assets/logocar.jpeg";
export const SITE = {
  name: logo,
  tagline: "Location de voitures au Maroc",
  phone: "+212 648733839",
  whatsappNumber: "212648733839",
  email: "..................",
  address: "Sefrou, Maroc",
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  const url = buildWhatsAppUrl(message);
  const opened = window.open(url, "_blank", "noopener,noreferrer");

  if (!opened) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
