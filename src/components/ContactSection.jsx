import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

// Mock data (replace with your actual import)
const mockData = {
  contactInfo: {
    email: "hello@elevaterank.com",
    phone: "+1 (555) 123-4567",
    address: "123 Digital Ave, Suite 100, San Francisco, CA 94105",
    hours: "Mon-Fri: 9AM-6PM PST",
  },
};

export const ContactSection = () => {
  const { contactInfo } = mockData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    message: "",
    service: "Business Branding",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  const services = [
    { value: "Business Branding", label: "Business Branding" },
    { value: "Website Creation", label: "Website Creation" },
    {
      value: "Search Engine Optimization(SEO)",
      label: "Search Engine Optimization(SEO)",
    },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Social Media Management", label: "Social Media Management" },
    { value: "Cloud Integration", label: "Cloud Integration" },
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const hubspotData = {
      fields: [
        { name: "name", value: formData.name },
        { name: "email", value: formData.email },
        { name: "company", value: formData.company },
        { name: "phone", value: formData.phone },
        { name: "website", value: formData.website },
        { name: "service", value: formData.service },
        { name: "message", value: formData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/146793615/9ff157d6-e910-42b2-831f-565ebc6fd6b1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (response.ok) {
        alert(
          "Thank you! We'll contact you within 24 hours to schedule your free SEO audit."
        );

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          website: "",
          message: "",
          service: "Business Branding",
        });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("HubSpot submit error:", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 translate-y-8"
          data-animate
          data-index="header"
          style={{
            animation: visibleItems.has("header")
              ? "fadeInUp 0.8s ease-out forwards"
              : "none",
          }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Get Started Today
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Book your free SEO audit and discover how we can help your business
            rank higher, attract more customers, and grow faster online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div
            className="lg:col-span-2 opacity-0 -translate-x-12"
            data-animate
            data-index="form"
            style={{
              animation: visibleItems.has("form")
                ? "slideInLeft 0.8s ease-out 0.2s forwards"
                : "none",
            }}
          >
            <Card className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-teal-900/10 border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">
                  Book Your Free SEO Audit
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  Fill out the form below and we'll analyze your website's SEO
                  performance and provide actionable recommendations at no cost.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company LLC"
                      />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                    >
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                    >
                      Primary Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
                    >
                      Tell us about your goals (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your current challenges and what you'd like to achieve with SEO..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 dark:hover:shadow-teal-400/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Book My Free SEO Audit</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 dark:text-slate-500 text-center transition-colors duration-300">
                    By submitting this form, you agree to receive communications
                    from ElevateRank Digital. We respect your privacy and will
                    never share your information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              className="opacity-0 translate-x-12"
              data-animate
              data-index="info"
              style={{
                animation: visibleItems.has("info")
                  ? "slideInRight 0.8s ease-out 0.3s forwards"
                  : "none",
              }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-teal-900/10 border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    Prefer to talk directly? Reach out using any of the methods
                    below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Email
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {contactInfo.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Phone
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {contactInfo.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Address
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {contactInfo.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Business Hours
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {contactInfo.hours}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div
              className="opacity-0 translate-x-12"
              data-animate
              data-index="steps"
              style={{
                animation: visibleItems.has("steps")
                  ? "slideInRight 0.8s ease-out 0.5s forwards"
                  : "none",
              }}
            >
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 border-teal-200 dark:border-slate-700 shadow-lg dark:shadow-teal-900/10 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Quick Response
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        We'll contact you within 24 hours to schedule your audit
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Free SEO Audit
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        Comprehensive analysis of your website's SEO performance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                        Strategy Session
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        Custom roadmap to improve your rankings and traffic
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-3rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(3rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};
