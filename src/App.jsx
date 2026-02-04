import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { ServiceDetail } from "./components/ServiceDetail";

// Lazy load below-the-fold components
const AboutPage = lazy(() => import("./components/AboutPage").then(module => ({ default: module.AboutPage })));
const CaseStudiesPage = lazy(() => import("./components/CaseStudiesPage").then(module => ({ default: module.CaseStudiesPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import("./components/BlogPage").then(module => ({ default: module.BlogPage })));
const BlogPostDetail = lazy(() => import("./components/BlogPostDetail").then(module => ({ default: module.BlogPostDetail })));
const CalendlyForm = lazy(() => import("./components/CalendlyForm").then(module => ({ default: module.CalendlyForm })));

const ServicesSection = lazy(() => import("./components/ServicesSection").then(module => ({ default: module.ServicesSection })));
const TestimonialsSection = lazy(() => import("./components/TestimonialSection").then(module => ({ default: module.TestimonialsSection })));

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:8001';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <ServicesSection />
          <TestimonialsSection />
          <CalendlyForm />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
            <Route path="/case-studies" element={<Suspense fallback={<div>Loading...</div>}><CaseStudiesPage /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
            <Route path="/services/:slug" element={
              <>
                <Header />
                <ServiceDetail />
                <Footer />
                <Toaster />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Header />
                <Suspense fallback={<div className="py-20 text-center">Loading Blog...</div>}>
                  <BlogPage />
                </Suspense>
                <Footer />
                <Toaster />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Header />
                <Suspense fallback={<div className="py-20 text-center">Loading Article...</div>}>
                  <BlogPostDetail />
                </Suspense>
                <Footer />
                <Toaster />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;