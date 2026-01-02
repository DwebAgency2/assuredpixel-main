import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { mockData } from '../data/mock';

export const BlogSection = () => {
  const { blogPosts } = mockData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Latest Insights
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            SEO Tips & Industry Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the competition with our latest SEO strategies, industry trends, and actionable tips to boost your online presence.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-slate-200 hover:border-teal-200 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="w-full flex items-center justify-center space-x-2 text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-all duration-300 py-2 border border-teal-200 rounded-lg hover:bg-teal-50">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blog Posts */}
        <div className="text-center mt-12">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
            View All Blog Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Updated with SEO Trends
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get the latest SEO insights, industry news, and actionable tips delivered straight to your inbox every week.
            </p>
            <div className="max-w-md mx-auto flex flex-wrap gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1  min-w-[160px] px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};