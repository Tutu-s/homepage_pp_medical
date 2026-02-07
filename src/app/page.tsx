import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import MedicalServiceGrid from "@/components/MedicalServiceGrid";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ExpertiseSection />
      <MedicalServiceGrid />
      <BookingCTA />

      {/* Footer Placeholder - Can be a separate component */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/60 font-serif">
            © 2024 THE NOBLE PLASTIC SURGERY. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
