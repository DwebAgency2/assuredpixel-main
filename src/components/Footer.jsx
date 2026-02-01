
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockData } from '../data/mock';

import { Logo } from './Logo';

export const Footer = () => {
  const { contactInfo, companyInfo } = mockData;
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  const services = [
    'Business Branding',
    'Website Construction',
    'Search Engine Optimization',
    'Content Writing',
    'Social Media Management',
    'Cloud Integration'
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("/#") || href === "/") {
      if (window.location.pathname === "/") {
        const id = href.replace("/", "");
        const element = document.querySelector(id || "#home");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo className="h-10 mb-4" />
                <p className="text-slate-300 leading-relaxed">
                  {companyInfo.tagline}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We specialize in comprehensive digital marketing solutions for USA-based businesses, helping them build brands, convert leads, and grow faster.
              </p>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm">
                <div>
                  <div className="text-2xl font-bold text-teal-400">150+</div>
                  <div className="text-slate-400">Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">180%</div>
                  <div className="text-slate-400">Avg Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get Started</h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick('/#contact')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group flex items-center justify-center space-x-2"
              >
                <span>Get Strategy Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} AssuredPixel Digital. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};