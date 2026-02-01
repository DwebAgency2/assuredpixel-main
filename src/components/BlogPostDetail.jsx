import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    ChevronRight,
    Share2,
    Facebook,
    Twitter,
    Linkedin
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { Button } from "./ui/button";

export const BlogPostDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-20 text-center bg-slate-50 dark:bg-slate-950 transition-colors">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Article Not Found</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                    The blog post you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/blog">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                        Back to Blog
                    </Button>
                </Link>
            </div>
        );
    }

    // Related posts (excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug && p.category === post.category)
        .slice(0, 2);

    const shareUrl = window.location.href;

    return (
        <>
            <Helmet>
                <title>{post.title} | AssuredPixel Blog</title>
                <meta name="description" content={post.metaDescription} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:image" content={post.image} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={shareUrl} />
            </Helmet>

            <article className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs & Navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                            <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link to="/blog" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Blog</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-slate-100 font-medium truncate max-w-[150px] sm:max-w-none">
                                {post.title}
                            </span>
                        </nav>
                        <Link to="/blog" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            All Posts
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="inline-flex items-center px-4 py-1.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 rounded-full text-sm font-semibold mb-6">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-slate-100">{post.author}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center space-x-3">
                                <button className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all border border-slate-200 dark:border-slate-800" title="Share on Twitter">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all border border-slate-200 dark:border-slate-800" title="Share on LinkedIn">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto aspect-video object-cover"
                        />
                    </div>

                    {/* Article Full Content */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                        prose-headings:text-slate-900 dark:prose-headings:text-slate-50
                        prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-[1.9] prose-p:mb-10
                        prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                        prose-h2:text-4xl prose-h2:font-extrabold prose-h2:mt-20 prose-h2:mb-8 prose-h2:tracking-tight
                        prose-h3:text-2xl prose-h3:font-extrabold prose-h3:mt-14 prose-h3:mb-6 prose-h3:tracking-tight
                        prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-extrabold
                        prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6
                        prose-li:my-4 prose-li:text-slate-600 dark:prose-li:text-slate-300
                        prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-200
                        prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
                        [&>div.faq-section]:mt-16 [&>div.faq-section]:p-8 [&>div.faq-section]:bg-slate-50 [&>div.faq-section]:dark:bg-slate-900/50 [&>div.faq-section]:rounded-3xl [&>div.faq-section]:border [&>div.faq-section]:border-slate-100 [&>div.faq-section]:dark:border-slate-800"
                        dangerouslySetInnerHTML={{ __html: post.fullContent }}
                    />

                    {/* Post Footer */}
                    <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-900 p-8 md:p-12 rounded-[2rem] text-center border border-teal-100 dark:border-slate-800">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                Ready to transform your online presence?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                Contact our expert team at AssuredPixel to discuss how we can implement these strategies for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => navigate("/#contact")}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book Strategy Session
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => navigate("/#services")}
                                    className="px-8 py-6 text-lg rounded-xl dark:border-slate-700"
                                >
                                    Explore Services
                                </Button>
                            </div>
                        </div>

                        {/* Related Articles */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-20">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h3>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {relatedPosts.map(p => (
                                        <Link key={p.id} to={`/blog/${p.slug}`} className="group">
                                            <div className="space-y-4">
                                                <div className="aspect-video rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
                                                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                                                    {p.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </footer>
                </div>
            </article>
        </>
    );
};
