import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FleetPreview } from "@/components/FleetPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <FleetPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
