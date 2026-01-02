import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Brush, Globe, Search, FileText, MessageCircle, Cloud, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Brush,
  Globe,
  Search,
  FileText,
  MessageCircle,
  Cloud,
};

export const ServicesSection = () => {
  const { services } = mockData;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Complete SEO & Website Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From comprehensive SEO audits to complete website restructuring, we provide everything your business needs to dominate search rankings and convert visitors into customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card 
                key={service.id}
                className="relative group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-slate-200 hover:border-teal-200"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="w-8 h-1 bg-teal-600 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Online Presence?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive SEO and website restructuring services can help your business rank higher and grow faster.
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Your Free SEO Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};