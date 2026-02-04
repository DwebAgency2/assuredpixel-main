import React, { useEffect, useRef, useState } from "react";

export const CalendlyForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    useEffect(() => {
        // Load Calendly script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="book-call"
            className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
                        Book a Strategy Session
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
                        Let's Talk About Your Growth
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
                        Schedule a free 15-minute Strategic Call with our experts to discuss your business goals and how we can help you scale.
                    </p>
                </div>

                <div
                    className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    {/* Calendly Inline Widget */}
                    <div
                        className="calendly-inline-widget w-full h-[850px] md:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
                        data-url="https://calendly.com/zenovastudio-web/30min"
                        style={{ minWidth: "320px" }}
                    ></div>
                </div>
            </div>
        </section>
    );
};
