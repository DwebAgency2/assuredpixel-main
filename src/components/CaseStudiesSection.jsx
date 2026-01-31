import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

// Industry approach examples - showing our methodology
const approachExamples = [
  {
    id: 1,
    industry: "E-commerce",
    title: "E-commerce Growth Strategy",
    challenge: "Competing in saturated online marketplaces",
    ourApproach: "Product page optimization, technical SEO, and conversion rate optimization",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
    typicalResults: {
      timeframe: "4-6 months",
      metric1: "150-300%",
      metric1Label: "Traffic Growth",
      metric2: "80-120",
      metric2Label: "Keywords Ranked",
      metric3: "40-80%",
      metric3Label: "Conversion Lift",
    },
    steps: [
      "Technical audit & site speed optimization",
      "Product schema & rich snippets",
      "Content strategy for category pages",
      "Conversion funnel optimization",
    ],
  },
  {
    id: 2,
    industry: "SaaS",
    title: "SaaS Content Marketing",
    challenge: "Building authority in competitive B2B space",
    ourApproach: "Thought leadership content, technical SEO, and link building strategy",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    typicalResults: {
      timeframe: "6-8 months",
      metric1: "200-400%",
      metric1Label: "Organic Traffic",
      metric2: "100-200",
      metric2Label: "Keywords Ranked",
      metric3: "3-5x",
      metric3Label: "Lead Quality",
    },
    steps: [
      "Competitor & keyword gap analysis",
      "Bottom-of-funnel content creation",
      "Technical SEO implementation",
      "Strategic backlink acquisition",
    ],
  },
  {
    id: 3,
    industry: "Local Business",
    title: "Local SEO Domination",
    challenge: "Standing out in local search results",
    ourApproach: "Google Business optimization, local citations, and review management",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    typicalResults: {
      timeframe: "3-5 months",
      metric1: "250-500%",
      metric1Label: "Local Visibility",
      metric2: "60-100",
      metric2Label: "Local Keywords",
      metric3: "3-4x",
      metric3Label: "Phone Calls",
    },
    steps: [
      "Google Business Profile optimization",
      "Local citation building (50+ directories)",
      "Review generation system",
      "Location-specific content strategy",
    ],
  },
];

export const CaseStudiesSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="case-studies"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up"
          data-animate
          data-index="header"
          style={{
            animationDelay: "0ms",
            animationFillMode: "forwards",
          }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Our Methodology
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            Our Approach in Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            See how we tackle common challenges across different industries with proven strategies and realistic benchmarks based on industry standards.
          </p>
        </div>

        {/* Approach Examples Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {approachExamples.map((example, index) => {
            const IconComponent = example.icon;

            return (
              <div
                key={example.id}
                data-animate
                data-index={`card-${index}`}
                className={`opacity-0 transition-all duration-700 ${visibleItems.has(`card-${index}`)
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : index % 3 === 0
                      ? "-translate-x-12 translate-y-8"
                      : index % 3 === 1
                        ? "translate-y-12"
                        : "translate-x-12 translate-y-8"
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <Card className="group h-full hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent dark:from-slate-950/80 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 transform group-hover:translate-x-1 transition-transform duration-300">
                      <span className="bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-300 flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {example.industry}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {example.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300 leading-relaxed">
                      <strong className="text-slate-700 dark:text-slate-300">
                        Challenge:
                      </strong>{" "}
                      {example.challenge}
                    </CardDescription>
                    <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300 leading-relaxed mt-2">
                      <strong className="text-slate-700 dark:text-slate-300">
                        Our Approach:
                      </strong>{" "}
                      {example.ourApproach}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Our Process Steps */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm transition-colors duration-300">
                        Our Process:
                      </h4>
                      <ul className="space-y-2">
                        {example.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-teal-600 dark:text-teal-400 mt-0.5">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Results */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 transform group-hover:scale-[1.02] transition-all duration-300 border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center transition-colors duration-300 text-sm">
                        <TrendingUp className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                        Typical Results ({example.typicalResults.timeframe})
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                            {example.typicalResults.metric1}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                            {example.typicalResults.metric1Label}
                          </div>
                        </div>
                        <div className="transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-100">
                          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 transition-colors duration-300">
                            {example.typicalResults.metric2}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                            {example.typicalResults.metric2Label}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 transform group-hover:translate-y-[-2px] transition-all duration-300 delay-150">
                        <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors duration-300">
                          {example.typicalResults.metric3}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          {example.typicalResults.metric3Label}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 italic">
                        *Based on industry benchmarks
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 opacity-0 translate-y-8"
          data-animate
          data-index="cta"
          style={{
            animation: visibleItems.has("cta")
              ? "fadeInUp 0.8s ease-out 0.6s forwards"
              : "none",
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-emerald-900/10 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-emerald-900/20 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 transition-colors duration-300">
              Ready to Grow Your Business?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Let's discuss how our proven strategies can be tailored to your specific business goals and industry challenges.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 dark:hover:shadow-teal-400/30 hover:scale-105 active:scale-95"
            >
              Get Your Custom Strategy
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
