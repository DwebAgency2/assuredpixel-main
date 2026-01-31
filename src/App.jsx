import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Lazy load below-the-fold components
const AboutSection = lazy(() => import("./components/AboutSection").then(module => ({ default: module.AboutSection })));
const ServicesSection = lazy(() => import("./components/ServicesSection").then(module => ({ default: module.ServicesSection })));
const CaseStudiesSection = lazy(() => import("./components/CaseStudiesSection").then(module => ({ default: module.CaseStudiesSection })));
const TestimonialsSection = lazy(() => import("./components/TestimonialSection").then(module => ({ default: module.TestimonialsSection })));
const BlogSection = lazy(() => import("./components/BlogSection").then(module => ({ default: module.BlogSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(module => ({ default: module.ContactSection })));

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:8001';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <AboutSection />
          <ServicesSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;