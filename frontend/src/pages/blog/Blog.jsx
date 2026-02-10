import React, { useEffect } from 'react';
import { ArrowRight, Calendar, Clock, User, Sparkles, Search, Command } from 'lucide-react';
import apiClient from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle }) => (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[#F8FAFC]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000" />
            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                {/* Glass Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Medical Insights & News</span>
                </div>

                {/* Hero Title with Glass Effect Text */}
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100">
                    {title}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2">
                        For Better Living
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200">
                    {subtitle}
                </p>

                {/* Search Bar Container */}
                <div className="max-w-xl mx-auto relative group animate-fade-in-up delay-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-2 shadow-2xl shadow-blue-500/10 ring-1 ring-gray-900/5">
                        <div className="pl-4 text-gray-400">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Find articles, topics, or doctors..."
                            className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-lg py-3 px-4 outline-none"
                        />
                        <div className="hidden sm:flex items-center gap-1 pr-4 text-gray-400 text-xs font-medium border-l border-gray-200 pl-4 py-1">
                            <Command size={12} />
                            <span>K</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
);

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await apiClient.get(ENDPOINTS.BLOGS);
                setBlogs(response.data);
            } catch (err) {
                console.error("Failed to fetch blogs:", err);
                setError("Failed to load blog posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const categories = ['All', 'Medical Tech', 'Genomics', 'Patient Care', 'Telemedicine', 'Mental Health', 'Nutrition', 'Preventive Care', 'Pediatrics', 'Elder Care', 'Innovation'];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    // Helper to get category color (since API doesn't return it, we can map it or generate it)
    const getCategoryColor = (category) => {
        const colors = {
            'Medical Tech': 'bg-blue-100 text-blue-600',
            'Genomics': 'bg-indigo-100 text-indigo-600',
            'Patient Care': 'bg-green-100 text-green-600',
            'Telemedicine': 'bg-purple-100 text-purple-600',
            'Mental Health': 'bg-pink-100 text-pink-600',
            'Nutrition': 'bg-orange-100 text-orange-600',
            'Preventive Care': 'bg-teal-100 text-teal-600',
            'Pediatrics': 'bg-cyan-100 text-cyan-600',
            'Elder Care': 'bg-amber-100 text-amber-600',
            'Innovation': 'bg-violet-100 text-violet-600'
        };
        return colors[category] || 'bg-gray-100 text-gray-600';
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHero
                title="Latest Medical Insights"
                subtitle="Stay updated with the latest trends in healthcare, technology, and wellness."
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-10">
                {/* Categories */}
                <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up mt-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                                : 'bg-white text-gray-600 hover:bg-white/80 hover:shadow-md border border-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Loading insights...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <div
                                key={blog.id}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(blog.category)} z-20 backdrop-blur-md bg-opacity-90`}>
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4">
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
                                            <Calendar size={14} className="text-blue-500" /> {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
                                            <Clock size={14} className="text-blue-500" /> 5 min read
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>

                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs ring-2 ring-white shadow-sm">
                                                {blog.author.charAt(0)}
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{blog.author}</span>
                                        </div>

                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Blog;
