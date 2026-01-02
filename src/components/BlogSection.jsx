import React, { useState, useEffect, useRef } from "react";
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
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// Mock data (replace with your actual import)
const mockData = {
  blogPosts: [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2024",
      excerpt:
        "Discover the latest SEO techniques that will help your business dominate search engine rankings and attract more organic traffic.",
      category: "SEO Strategy",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
      fullContent: `
        <h2>Introduction</h2>
        <p>In the ever-evolving world of digital marketing, staying ahead of SEO trends is crucial for business success. This comprehensive guide will walk you through the top 10 SEO strategies that are proven to work in 2024.</p>
        
        <h3>1. Focus on User Experience (UX)</h3>
        <p>Google's algorithms increasingly prioritize websites that offer excellent user experiences. This means fast loading times, mobile responsiveness, and intuitive navigation are more important than ever.</p>
        
        <h3>2. Create High-Quality, E-E-A-T Content</h3>
        <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are critical factors. Create content that demonstrates your knowledge and builds trust with your audience.</p>
        
        <h3>3. Optimize for Voice Search</h3>
        <p>With the rise of smart speakers and voice assistants, optimizing for natural language queries is essential. Focus on long-tail keywords and conversational phrases.</p>
        
        <h3>4. Leverage Video Content</h3>
        <p>Video content continues to dominate. Create engaging videos and optimize them with proper titles, descriptions, and transcripts for better search visibility.</p>
        
        <h3>5. Build Quality Backlinks</h3>
        <p>Quality over quantity remains the golden rule for backlinks. Focus on earning links from authoritative, relevant websites in your industry.</p>
        
        <p><strong>Ready to transform your SEO strategy?</strong> <a href="#contact" class="text-teal-600 dark:text-teal-400 hover:underline">Contact us today</a> for a free consultation and see how we can help your business grow.</p>
        
        <p>Don't forget to check out our <a href="#services" class="text-teal-600 dark:text-teal-400 hover:underline">SEO services</a> and <a href="#case-studies" class="text-teal-600 dark:text-teal-400 hover:underline">success stories</a> to learn more about what we can do for you.</p>
      `,
    },
    {
      id: 2,
      title: "How to Optimize Your Website Speed",
      excerpt:
        "Learn proven techniques to dramatically improve your website's loading speed and boost your search engine rankings.",
      category: "Performance",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      fullContent: `
        <h2>Why Website Speed Matters</h2>
        <p>Website speed is a critical ranking factor and directly impacts user experience. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load.</p>
        
        <h3>Key Optimization Techniques</h3>
        <p>Image compression, browser caching, and CDN implementation are just the beginning. Let's dive into the most effective strategies.</p>
        
        <h3>Compress and Optimize Images</h3>
        <p>Large images are often the biggest culprit in slow load times. Use modern formats like WebP and implement lazy loading for images below the fold.</p>
        
        <h3>Minify CSS, JavaScript, and HTML</h3>
        <p>Remove unnecessary characters from your code to reduce file sizes and improve load times significantly.</p>
        
        <p><strong>Need help optimizing your website?</strong> Our <a href="#services" class="text-teal-600 dark:text-teal-400 hover:underline">website optimization services</a> can help you achieve lightning-fast speeds. <a href="#contact" class="text-teal-600 dark:text-teal-400 hover:underline">Get started today</a>!</p>
      `,
    },
    {
      id: 3,
      title: "Local SEO: Complete Guide for Small Businesses",
      excerpt:
        "Master local SEO to dominate your geographic market and attract more local customers to your business.",
      category: "Local SEO",
      author: "Michael Chen",
      date: "2024-01-05",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      fullContent: `
        <h2>The Power of Local SEO</h2>
        <p>For small businesses, local SEO is the key to competing with larger competitors. 46% of all Google searches are seeking local information.</p>
        
        <h3>Optimize Your Google Business Profile</h3>
        <p>Your Google Business Profile is your most important local SEO asset. Keep it complete, accurate, and regularly updated with posts and photos.</p>
        
        <h3>Build Local Citations</h3>
        <p>Ensure your NAP (Name, Address, Phone) information is consistent across all online directories and platforms.</p>
        
        <h3>Collect and Manage Reviews</h3>
        <p>Positive reviews are crucial for local rankings. Actively encourage satisfied customers to leave reviews and respond to all feedback professionally.</p>
        
        <p>Want to dominate your local market? Check out our <a href="#case-studies" class="text-teal-600 dark:text-teal-400 hover:underline">local SEO success stories</a> and <a href="#contact" class="text-teal-600 dark:text-teal-400 hover:underline">schedule a consultation</a> to get started.</p>
      `,
    },
  ],
};

export const BlogSection = () => {
  const { blogPosts } = mockData;
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerRef = useRef(null);
  const modalRef = useRef(null);

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

  // Handle modal open/close
  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedPost(null), 300);
  };

  // Handle clicks on internal links in modal
  const handleInternalLinkClick = (e) => {
    if (
      e.target.tagName === "A" &&
      e.target.getAttribute("href")?.startsWith("#")
    ) {
      e.preventDefault();
      closeModal();
      setTimeout(() => {
        const element = document.querySelector(e.target.getAttribute("href"));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

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
            SEO Tips & Industry Insights
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Stay ahead of the competition with our latest SEO strategies,
            industry trends, and actionable tips to boost your online presence.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              data-animate
              data-index={`post-${index}`}
              className={`opacity-0 transition-all duration-700 ${
                visibleItems.has(`post-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <Card
                className="group h-full hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600 overflow-hidden cursor-pointer"
                onClick={() => openModal(post)}
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
                        <span className="text-xs">{post.author}</span>
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
                  <button className="w-full flex items-center justify-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium group-hover:translate-x-2 transition-all duration-300 py-2 border border-teal-200 dark:border-teal-700 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
              </Card>
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
          <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-700">
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
              Stay Updated with SEO Trends
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Get the latest SEO insights, industry news, and actionable tips
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className={`relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="bg-teal-600 dark:bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {selectedPost?.category}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedPost?.readTime}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-8 md:px-10 md:py-10">
              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 transition-colors duration-300">
                  {selectedPost?.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{selectedPost?.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost && formatDate(selectedPost.date)}</span>
                  </div>
                </div>
                <img
                  src={selectedPost?.image}
                  alt={selectedPost?.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:text-slate-900 dark:prose-headings:text-slate-50
                  prose-p:text-slate-700 dark:prose-p:text-slate-300
                  prose-a:text-teal-600 dark:prose-a:text-teal-400
                  prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                  prose-p:mb-4 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost?.fullContent }}
                onClick={handleInternalLinkClick}
              />

              {/* Call to Action in Modal */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 text-center border border-teal-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    Ready to Transform Your SEO?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Let's discuss how we can help your business grow with proven
                    SEO strategies.
                  </p>
                  <button
                    onClick={() => {
                      closeModal();
                      setTimeout(() => {
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 400);
                    }}
                    className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <span>Get Started Today</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
