import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mock';

export const TestimonialsSection = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from business owners who have experienced remarkable growth with ElevateRank Digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-slate-200 hover:border-teal-200 overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-teal-600" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-teal-200 transition-all duration-300"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-teal-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-slate-800">98%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">150+</div>
                <div className="text-sm text-slate-600">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">180%</div>
                <div className="text-sm text-slate-600">Average Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800">4+ Years</div>
                <div className="text-sm text-slate-600">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};