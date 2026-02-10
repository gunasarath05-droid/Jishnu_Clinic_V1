import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronRight } from 'lucide-react';
import apiClient from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';

const BlogDetails = () => {
    const { id } = useParams();

    const [blog, setBlog] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchBlog = async () => {
            try {
                const response = await apiClient.get(`${ENDPOINTS.BLOGS}${id}/`);
                setBlog(response.data);
            } catch (err) {
                console.error("Failed to fetch blog details:", err);
                setError("Failed to load blog post.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
                <p className="text-xl text-gray-500 mb-4">{error || "Blog post not found."}</p>
                <Link to="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30 hover:-translate-y-1 transition-all">
                    Back to Blog
                </Link>
            </div>
        );
    }

    // Since our seeded content is raw HTML string, we render it dangerously
    // In a real app, sanitize this!

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Extended Header Background */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-[#EBF3FA] -z-0" />

            <article className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Navigation */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8 animate-fade-in-up">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <ChevronRight size={14} />
                        <span className="text-blue-600 truncate max-w-[200px]">{blog.title}</span>
                    </div>

                    {/* Blog Header Card */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-blue-900/5 border border-white/60 mb-12 animate-fade-in-up delay-100">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-600 mb-6">
                            {blog.category}
                        </span>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-gray-500 border-t border-gray-100 pt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm ring-4 ring-blue-50">
                                    {blog.author.charAt(0)}
                                </div>
                                <span className="font-bold text-gray-900">{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-blue-500" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-blue-500" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 mb-12 animate-fade-in-up delay-200 aspect-video relative group">
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-blue-900/5 border border-gray-100 animate-fade-in-up delay-300">
                        <div
                            className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed font-outfit"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Share & Save */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-gray-600 hover:text-blue-600 transition-colors">
                                <ArrowLeft size={18} /> Back to Articles
                            </Link>
                            <div className="flex gap-3">
                                <button className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Share2 size={20} />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogDetails;
