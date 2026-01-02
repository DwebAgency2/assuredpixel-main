import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

// Mock data (replace with your actual import)
const mockData = {
  caseStudies: [
    {
      id: 1,
      clientName: "TechStart Solutions",
      industry: "SaaS",
      challenge: "Low organic visibility in competitive market",
      solution: "Comprehensive SEO strategy with content marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: {
        timeframe: "6 months",
        organicTraffic: "+285%",
        keywordRankings: "150+",
        leadGeneration: "+340%",
      },
    },
    {
      id: 2,
      clientName: "GreenLeaf Organic",
      industry: "E-commerce",
      challenge: "Poor conversion rates and site speed",
      solution: "Website optimization and UX redesign",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
      results: {
        timeframe: "4 months",
        organicTraffic: "+210%",
        keywordRankings: "95+",
        leadGeneration: "+180%",
      },
    },
    {
      id: 3,
      clientName: "Urban Fitness Co",
      industry: "Health & Fitness",
      challenge: "Limited local search presence",
      solution: "Local SEO and Google Business optimization",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      results: {
        timeframe: "5 months",
        organicTraffic: "+320%",
        keywordRankings: "120+",
        leadGeneration: "+250%",
      },
    },
  ],
};

export const CaseStudiesSection = () => {
  const { caseStudies } = mockData;
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
            Proven Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            Real Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            See how we've helped USA businesses transform their online presence
            and achieve remarkable growth through strategic SEO and website
            optimization.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              data-animate
              data-index={`card-${index}`}
              className={`opacity-0 transition-all duration-700 ${
                visibleItems.has(`card-${index}`)
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
                    src={study.image}
                    alt={study.clientName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent dark:from-slate-950/80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-300">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {study.clientName}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300 leading-relaxed">
                    <strong className="text-slate-700 dark:text-slate-300">
                      Challenge:
                    </strong>{" "}
                    {study.challenge}
                  </CardDescription>
                  <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300 leading-relaxed mt-2">
                    <strong className="text-slate-700 dark:text-slate-300">
                      Solution:
                    </strong>{" "}
                    {study.solution}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Results */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 mb-4 transform group-hover:scale-[1.02] transition-all duration-300 border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center transition-colors duration-300">
                      <TrendingUp className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      Results in {study.results.timeframe}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                          {study.results.organicTraffic}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          Organic Traffic
                        </div>
                      </div>
                      <div className="transform group-hover:translate-y-[-2px] transition-transform duration-300 delay-100">
                        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 transition-colors duration-300">
                          {study.results.keywordRankings}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          Keywords
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 transform group-hover:translate-y-[-2px] transition-all duration-300 delay-150">
                      <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors duration-300">
                        {study.results.leadGeneration}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        Lead Generation
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium group-hover:translate-x-2 transition-all duration-300">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
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
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Join over 150+ businesses that have transformed their online
              presence with our proven SEO and website optimization strategies.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 dark:hover:shadow-teal-400/30 hover:scale-105 active:scale-95"
            >
              Start Your Transformation
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
