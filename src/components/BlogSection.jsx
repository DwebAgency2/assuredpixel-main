import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  ChevronRight,
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export const BlogSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);
  const navigate = useNavigate();

  // Display only the first 3 posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
      id="blog"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
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
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Latest Insights
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            Digital Growth & Industry Insights
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Stay ahead of the competition with our latest marketing strategies,
            industry trends, and actionable tips to scale your online presence.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              data-animate
              data-index={`post-${index}`}
              className={`opacity-0 transition-all duration-700 ${visibleItems.has(`post-${index}`)
                ? "opacity-100 translate-y-0"
                : "translate-y-12"
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card
                  className="group h-full hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600 overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent dark:from-slate-950/70"></div>
                    <div className="absolute top-4 left-4 transform group-hover:translate-x-1 transition-transform duration-300">
                      <span className="bg-teal-600 dark:bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 transition-colors duration-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 mb-4 flex-wrap gap-2 transition-colors duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                          <User className="w-4 h-4" />
                          <span className="text-xs">{post.author.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs hidden sm:inline">
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="w-full flex items-center justify-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium group-hover:translate-x-2 transition-all duration-300 py-2 border border-teal-200 dark:border-teal-700 rounded-lg group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Blog Posts */}
        <div
          className="text-center mt-12 opacity-0 translate-y-8"
          data-animate
          data-index="view-all"
          style={{
            animation: visibleItems.has("view-all")
              ? "fadeInUp 0.8s ease-out 0.4s forwards"
              : "none",
          }}
        >
          <button
            onClick={() => navigate("/blog")}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-700"
          >
            View All Blog Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div
          className="mt-16 opacity-0 translate-y-8"
          data-animate
          data-index="newsletter"
          style={{
            animation: visibleItems.has("newsletter")
              ? "fadeInUp 0.8s ease-out 0.6s forwards"
              : "none",
          }}
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-teal-200 dark:border-slate-700 text-center shadow-lg dark:shadow-purple-900/10 transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-900/20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 transition-colors duration-300">
              Stay Updated with Digital Trends
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Get the latest marketing insights, industry news, and actionable tips
              delivered straight to your inbox every week.
            </p>
            <div className="max-w-md mx-auto flex flex-wrap gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-[200px] px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 transition-colors duration-300">
              No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
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
      `}</style>
    </section>
  );
};
