import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "../data/services";
import { Button } from "./ui/button";

export const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = services.find((s) => s.slug === slug);

    // Find current service index and adjacent services
    const currentIndex = services.findIndex((s) => s.slug === slug);
    const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
    const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen pt-24 text-center">
                <h1 className="text-2xl font-bold">Service not found</h1>
                <Button onClick={() => navigate("/")} className="mt-4">
                    Go Home
                </Button>
            </div>
        );
    }

    const IconComponent = service.icon;

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const handleBackToServices = (e) => {
        e.preventDefault();
        navigate("/");
        // Wait for navigation, then scroll to services
        setTimeout(() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <>
            <Helmet>
                <title>{service.title} | AssuredPixel Services</title>
                <meta name="description" content={service.description} />
                <link rel="canonical" href={`https://assuredpixel.com/services/${service.slug}`} />
            </Helmet>

            <section className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Navigation Header */}
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={handleBackToServices}
                            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Services
                        </button>

                        {/* Service Navigation */}
                        <div className="flex items-center gap-4">
                            <Link
                                to={`/services/${prevService.slug}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                                title={prevService.title}
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                                <span className="hidden sm:inline text-sm text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Previous</span>
                            </Link>

                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                {currentIndex + 1} / {services.length}
                            </span>

                            <Link
                                to={`/services/${nextService.slug}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                                title={nextService.title}
                            >
                                <span className="hidden sm:inline text-sm text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Next</span>
                                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Content Left */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center p-3 bg-teal-100 dark:bg-teal-900/50 rounded-2xl w-fit">
                                <IconComponent className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                                {service.title}
                            </h1>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                <p className="text-xl leading-relaxed">{service.longDescription}</p>
                            </div>

                            <div className="pt-6">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    What's Included?
                                </h3>
                                <ul className="space-y-3">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-lg text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8">
                                <Button
                                    onClick={() =>
                                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) || navigate("/#contact")
                                    }
                                    size="lg"
                                    className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                >
                                    Get Started with {service.title}
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual Right (Service Image) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                                <img
                                    src={`/service-images/${service.slug}.jpg`}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to icon if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full p-8 hidden items-center justify-center relative">
                                    {/* Decorative background elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                    <IconComponent strokeWidth={1} className="w-64 h-64 text-teal-600/10 dark:text-teal-400/10" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};
