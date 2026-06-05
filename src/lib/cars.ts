import car1 from "@/assets/car1.jpeg";
import car2 from "@/assets/car2.jpeg";
import car3 from "@/assets/car3.jpeg";
import car4 from "@/assets/car4.jpeg";
import car5 from "@/assets/car5.jpg";
import car6 from "@/assets/car6.jpg";

export type Car = {
  id: string;
  name: string;
  category: "Berline" | "SUV" | "Citadine" | "Premium";
  image: string;
  price: number; // MAD / day
  seats: number;
  transmission: "Auto" | "Manuelle";
  fuel: "Essence" | "Diesel" | "Hybride";
};

export const CARS: Car[] = [
  { id: "elegance", name: "Peugeot 208", category: "Citadine", image: car1, price: 300, seats: 5, transmission: "Manuelle", fuel: "Diesel" },
  { id: "summit", name: "Dacia Logan", category: "Berline", image: car2, price: 300, seats: 5, transmission: "Manuelle", fuel: "Diesel" },
  { id: "horizon", name: "Dacia stepway", category: "Citadine", image: car3, price: 350, seats: 5, transmission: "Manuelle", fuel: "Diesel" },
  { id: "mini", name: "Tucson", category: "SUV", image: car4, price: 500, seats: 5, transmission: "Auto", fuel: "Diesel" },
  { id: "sprint", name: "Sprint GT", category: "Berline", image: car5, price: 550, seats: 5, transmission: "Auto", fuel: "Diesel" },
  { id: "lite", name: "Urban Lite", category: "Citadine", image: car6, price: 250, seats: 5, transmission: "Manuelle", fuel: "Diesel" },
];
