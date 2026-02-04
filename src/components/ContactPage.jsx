import { Header } from "./Header";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

export const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <ContactSection />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
};
