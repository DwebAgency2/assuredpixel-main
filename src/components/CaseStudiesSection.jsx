import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';

export const CaseStudiesSection = () => {
  const { caseStudies } = mockData;

  return (
    <section id="case-studies" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Proven Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Real Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped USA businesses transform their online presence and achieve remarkable growth through strategic SEO and website optimization.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-slate-200 hover:border-teal-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.clientName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors duration-300">
                  {study.clientName}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  <strong>Challenge:</strong> {study.challenge}
                </CardDescription>
                <CardDescription className="text-slate-600">
                  <strong>Solution:</strong> {study.solution}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Results */}
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-emerald-600" />
                    Results in {study.results.timeframe}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{study.results.organicTraffic}</div>
                      <div className="text-xs text-slate-600">Organic Traffic</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">{study.results.keywordRankings}</div>
                      <div className="text-xs text-slate-600">Keywords</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <div className="text-2xl font-bold text-slate-800">{study.results.leadGeneration}</div>
                    <div className="text-xs text-slate-600">Lead Generation</div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-all duration-300">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join over 150+ businesses that have transformed their online presence with our proven SEO and website optimization strategies.
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};