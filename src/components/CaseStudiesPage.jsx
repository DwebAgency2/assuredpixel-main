import { Header } from "./Header";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

export const CaseStudiesPage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <CaseStudiesSection />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
};
