import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data (replace with your actual import)
const mockData = {
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVision Inc",
      content:
        "Working with ElevateRank Digital transformed our online presence completely. Within 6 months, we saw a 300% increase in organic traffic and our conversion rates doubled. Their team's expertise in SEO is unmatched!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GreenLeaf Organic",
      content:
        "The results speak for themselves. Our website now ranks #1 for our target keywords, and we've seen a 250% increase in qualified leads. The ROI has been exceptional, and their team is always responsive and professional.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Urban Fitness Co",
      content:
        "I was skeptical about SEO at first, but ElevateRank Digital proved me wrong. They delivered beyond expectations with clear communication, transparent reporting, and most importantly - real, measurable results that impacted our bottom line.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "David Park",
      role: "Owner",
      company: "Park's Home Services",
      content:
        "Our local SEO was practically non-existent before working with this team. Now we dominate local search results and get calls daily from new customers. The investment paid for itself within the first 3 months!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "E-commerce Manager",
      company: "Bella Fashion",
      content:
        "ElevateRank Digital helped us optimize our entire e-commerce site. Page load speeds improved dramatically, our product pages rank higher, and most importantly - sales increased by 180%. Couldn't be happier!",
      rating: 3,
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    },
  ],
};

export const TestimonialsSection = () => {
  const { testimonials } = mockData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Don't just take our word for it. Hear from business owners who have
            experienced remarkable growth with ElevateRank Digital.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel */}
          <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl dark:shadow-emerald-900/20 border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300">
            {/* Decorative Quote */}
            <div className="absolute top-8 left-8 opacity-10 dark:opacity-5">
              <Quote className="w-24 h-24 text-teal-600 dark:text-teal-400" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Content with Slide Animation */}
              <div className="min-h-[200px] flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute transition-all duration-700 ease-in-out ${index === currentIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : index < currentIndex
                        ? "opacity-0 -translate-x-full scale-95"
                        : "opacity-0 translate-x-full scale-95"
                      }`}
                  >
                    <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center italic max-w-3xl px-4 transition-colors duration-300">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Author Info */}
              <div className="mt-8 flex flex-col items-center">
                <div className="relative">
                  {testimonials.map((testimonial, index) => (
                    <img
                      key={testimonial.id}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-lg absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-700 ${index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                        }`}
                    />
                  ))}
                  <div className="w-16 h-16"></div> {/* Spacer */}
                </div>

                <div className="mt-4 text-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transition-all duration-700 ${index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 absolute"
                        }`}
                    >
                      <div className="font-bold text-lg text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-teal-600 dark:text-teal-400 font-medium transition-colors duration-300">
                        {testimonial.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 border border-slate-200 dark:border-slate-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 border border-slate-200 dark:border-slate-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "w-8 h-3 bg-teal-600 dark:bg-teal-500"
                  : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-emerald-900/10 transition-all duration-300 hover:shadow-xl dark:hover:shadow-emerald-900/20">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 transition-colors duration-300">
                  98%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300 delay-75">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 transition-colors duration-300">
                  150+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">
                  Successful Projects
                </div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300 delay-150">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                  180%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">
                  Average Growth
                </div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300 delay-200">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 transition-colors duration-300">
                  4+ Years
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">
                  Industry Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
