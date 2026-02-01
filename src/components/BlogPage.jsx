import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    ChevronRight,
    Search,
    Filter
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Blog & Insights | AssuredPixel Digital Marketing</title>
                <meta name="description" content="Stay ahead with the latest digital marketing insights, branding strategies, and technical SEO tips from the AssuredPixel growth team." />
            </Helmet>

            <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                        <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-slate-100 font-medium">Blog</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Digital Growth & <span className="text-teal-600 dark:text-teal-400">Industry Insights</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
                            Actionable strategies, deep-dive guides, and the latest trends
                            to help your business scale in the digital age.
                        </p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-teal-600 text-white shadow-lg"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder:font-normal"
                            />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                                    <Card className="h-full hover:shadow-2xl dark:hover:shadow-teal-900/10 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <CardHeader className="p-8 pb-4">
                                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-2 leading-tight">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mt-4 text-base">
                                                {post.excerpt}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="px-8 pb-8">
                                            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 pt-6 border-t border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-6">
                                                    <span className="flex items-center gap-1.5 font-medium">
                                                        <User className="w-4 h-4 text-teal-600/50" />
                                                        {post.author.split(' ')[0]}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 font-medium">
                                                        <Clock className="w-4 h-4 text-teal-600/50" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl text-slate-500">No articles found matching your criteria.</p>
                                <Button
                                    onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                                    variant="outline"
                                    className="mt-4"
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
