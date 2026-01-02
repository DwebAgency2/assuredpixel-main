import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

export const HeroSection = () => {
  const { heroContent } = mockData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "USA-focused SEO strategies",
    "Complete website restructuring", 
    "Proven results & growth"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                🚀 #1 SEO Agency for USA Businesses
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {heroContent.headline}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {heroContent.subheadline}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                {heroContent.ctaText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              {heroContent.ctaSubtext}
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">150+</div>
                  <div className="text-sm text-slate-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">180%</div>
                  <div className="text-sm text-slate-600">Avg Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">Organic Traffic</span>
                  <span className="text-sm font-bold text-emerald-600">+187%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">Keyword Rankings</span>
                  <span className="text-sm font-bold text-teal-600">+45 Page 1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">Lead Generation</span>
                  <span className="text-sm font-bold text-emerald-600">+234%</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};