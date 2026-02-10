import React from 'react';
import { Menu, X, ArrowUpRight, Heart, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100 py-3' : 'bg-white/50 backdrop-blur-md py-4 sm:py-5'
                    }`}
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2 sm:gap-2.5 group relative z-50">
                            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-600 rounded-xl rounded-tr-[1.5rem] sm:rounded-tr-[2rem] shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                                <Heart size={18} className="sm:w-5 sm:h-5 text-white fill-white" />
                                <div className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white translate-x-1/2 -translate-y-1/3" />
                            </div>
                            <span className="text-xl sm:text-2xl font-black text-blue-900 tracking-tight">
                                Jishnu<span className="text-blue-500">Clinic</span>
                            </span>
                        </a>

                        {/* Centered Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <div key={item.name} className="relative group px-1">
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                                    </a>
                                </div>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:flex items-center">
                            <a href="/appointment">
                                <button className="group flex items-center gap-3 bg-white pl-6 pr-1.5 py-1.5 rounded-full border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300">
                                    <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Book Now</span>
                                    <div className="w-9 h-9 rounded-full bg-green-400 flex items-center justify-center text-white shadow-md shadow-green-400/30 group-hover:bg-blue-600 group-hover:shadow-blue-600/30 transition-all duration-300 transform group-hover:rotate-45">
                                        <ArrowUpRight size={18} strokeWidth={2.5} />
                                    </div>
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle - Enhanced */}
                        <button
                            className={`lg:hidden relative z-50 p-2.5 rounded-xl transition-all duration-300 ${isMenuOpen
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                : 'bg-white/80 backdrop-blur-md text-gray-600 shadow-sm border border-gray-100'
                                }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <Menu
                                    size={22}
                                    className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                                />
                                <X
                                    size={22}
                                    className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu - Enhanced */}
            <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-2xl z-40 shadow-2xl border-l border-gray-100 transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <nav className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-2">
                        {navLinks.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`group px-5 py-4 text-lg font-bold text-gray-700 hover:text-blue-600 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-x-1 ${isMenuOpen ? 'animate-slide-in-right' : ''
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center justify-between">
                                    {item.name}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={`mt-auto pt-6 border-t border-gray-200 ${isMenuOpen ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '200ms' }}>
                        <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full py-4 text-base font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all hover:-translate-y-1">
                                <span className="flex items-center justify-center gap-2">
                                    Book Appointment
                                    <ArrowUpRight size={20} />
                                </span>
                            </Button>
                        </Link>

                        {/* Contact Info */}
                        <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border border-blue-100">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Emergency Contact</p>
                            <a href="tel:+8801616876080" className="text-lg font-black text-blue-600 hover:text-blue-700 transition-colors">
                                +880 1616-876080
                            </a>
                            <p className="text-xs text-gray-500 mt-2 font-medium">Available 24/7</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
