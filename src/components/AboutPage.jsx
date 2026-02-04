import { Header } from "./Header";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
