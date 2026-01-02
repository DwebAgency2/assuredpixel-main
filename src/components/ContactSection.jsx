import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { mockData } from "../data/mock";
import { toast } from "sonner";

export const ContactSection = () => {
  const { contactInfo } = mockData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    message: "",
    service: "seo-audit",
  });

  const services = [
    { value: "Business Branding", label: "Business Branding" },
    { value: "Website Creation", label: "Website Creation" },
    { value: "Search Engine Optimization(SEO)", label: "Search Engine Optimization(SEO)" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Social Media Management", label: "Social Media Management" },
    { value: "Cloud Integration", label: "Cloud Integration" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        toast.success(
          "Thank you! We'll contact you within 24 hours to schedule your free SEO audit.",
          {
            duration: 5000,
          }
        );

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          website: "",
          message: "",
          service: "seo-audit",
        });
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("HubSpot submit error:", error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Get Started Today
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Book your free SEO audit and discover how we can help your business
            rank higher, attract more customers, and grow faster online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Book Your Free SEO Audit
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll analyze your website's SEO
                  performance and provide actionable recommendations at no cost.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Company LLC"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-slate-700 mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Primary Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Tell us about your goals (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your current challenges and what you'd like to achieve with SEO..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                  >
                    Book My Free SEO Audit
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to receive communications
                    from ElevateRank Digital. We respect your privacy and will
                    never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-white shadow-xl border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Prefer to talk directly? Reach out using any of the methods
                  below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-sm text-slate-600">
                      {contactInfo.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-sm text-slate-600">
                      {contactInfo.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-slate-900">Address</div>
                    <div className="text-sm text-slate-600">
                      {contactInfo.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-slate-900">
                      Business Hours
                    </div>
                    <div className="text-sm text-slate-600">
                      {contactInfo.hours}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-teal-50 border-teal-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Quick Response
                    </div>
                    <div className="text-sm text-slate-600">
                      We'll contact you within 24 hours to schedule your audit
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Free SEO Audit
                    </div>
                    <div className="text-sm text-slate-600">
                      Comprehensive analysis of your website's SEO performance
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Strategy Session
                    </div>
                    <div className="text-sm text-slate-600">
                      Custom roadmap to improve your rankings and traffic
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
