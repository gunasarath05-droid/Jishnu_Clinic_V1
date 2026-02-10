import React from 'react';
import Button from '../../../components/ui/Button';
import { Calendar, User, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../../data/blogs';

const Blog = ({ limit, showHeader = true }) => {
    // If limit is provided, slice the array; otherwise show all
    const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" id="blog">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header - Only show if showHeader is true */}
                {showHeader && (
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-10 sm:mb-12 lg:mb-16 gap-6 sm:gap-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                <Activity size={12} className="sm:w-3.5 sm:h-3.5" /> Blog & News
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.2] tracking-tight uppercase">
                                Latest From Medical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Frontlines
                                </span>
                            </h2>
                        </div>
                        <div className="max-w-md text-right hidden lg:block">
                            <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                                Explore Our Latest Articles On Medical Breakthroughs, Smart Technologies, And Patient-First Care.
                            </p>
                            <Link to="/blog">
                                <Button variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600">
                                    View All Articles <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {displayedBlogs.map((blog, idx) => (
                        <Link to={`/blog/${blog.id}`} key={idx} className="group cursor-pointer">
                            {/* Card Container */}
                            <div className="bg-blue-200/10 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-4 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">

                                {/* Image Container */}
                                <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-[1.5rem] overflow-hidden mb-4 sm:mb-6">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                    {/* Floating Badges */}
                                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-2">
                                        <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wide backdrop-blur-md bg-white/90 text-gray-900`}>
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-1 sm:px-2 flex-grow">
                                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 sm:mb-3">
                                        <span>{blog.date}</span>
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500" />
                                        <span className="hidden sm:inline">5 Min Read</span>
                                    </div>

                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-snug mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>
                                </div>

                                {/* Footer / Author */}
                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-50 flex items-center justify-between px-1 sm:px-2">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <img src={blog.avatar} alt={blog.author} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shadow-sm bg-gray-100" />
                                        <span className="text-xs sm:text-sm font-bold text-gray-700">{blog.author}</span>
                                    </div>
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                                        <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
