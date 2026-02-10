import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { ArrowRight, Dna, Activity, Sparkles, TrendingUp, Award } from 'lucide-react';

const Services = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50/50 via-blue-50/30 to-gray-50/50 relative overflow-hidden" id="services">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 backdrop-blur-sm text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Premium Diagnostics</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.2] tracking-tight uppercase mb-4">
                        Advanced Medical
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Testing Services
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                        State-of-the-art diagnostic solutions with unmatched accuracy and reliability
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Main Feature Card - DNA Testing */}
                    <div className="lg:col-span-7 min-h-[500px] lg:h-[550px]">
                        <Card className="h-full relative overflow-hidden group bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 border-none shadow-2xl shadow-blue-900/30 p-0 rounded-[2rem] lg:rounded-[3rem] hover:shadow-blue-900/50 transition-all duration-500 lg:mt-16">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse" />
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/20 rounded-full blur-[80px] animate-pulse animation-delay-2000" />
                            </div>

                            {/* DNA Helix Background Image */}
                            <div className="absolute inset-0 z-0 opacity-30">
                                <img
                                    src="https://img.freepik.com/free-photo/dna-helix-structure-science-medical-concept_146508-66.jpg?w=1380"
                                    alt="DNA Structure"
                                    className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                {/* Top Content */}
                                <div className="max-w-md">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase mb-4 sm:mb-6">
                                        <Dna size={14} />
                                        <span>Precision Testing</span>
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-3 sm:mb-4">
                                        Professional <br />
                                        DNA Analysis
                                    </h3>
                                    <p className="text-blue-100 font-medium text-sm sm:text-base lg:text-lg">
                                        Advanced genomic testing with industry-leading accuracy and speed
                                    </p>
                                </div>

                                {/* Bottom Stats & CTA */}
                                <div className="space-y-3 sm:space-y-4 mt-6 lg:mt-0">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20">
                                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">5.5K+</div>
                                            <div className="text-[10px] sm:text-xs text-blue-200 font-medium">DNA Reports</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20">
                                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">99.9%</div>
                                            <div className="text-[10px] sm:text-xs text-blue-200 font-medium">Accuracy</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20">
                                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">24/7</div>
                                            <div className="text-[10px] sm:text-xs text-blue-200 font-medium">Support</div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link to="/appointment">
                                        <Button className="w-full rounded-xl lg:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 mt-3 sm:mt-4 shadow-2xl shadow-black/20 bg-white text-blue-700 hover:bg-blue-50 border-none font-bold text-base sm:text-lg group/btn">
                                            Get Started Today
                                            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform sm:inline hidden" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Side Cards Column */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

                        {/* Top Side Card - Trusted & Secure */}
                        <Card className="flex-1 min-h-[280px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-[60px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100/50 rounded-full blur-[50px] -z-10" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                        <Award size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                                    </div>
                                    <div className="px-2.5 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold uppercase">
                                        Certified
                                    </div>
                                </div>

                                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-2 sm:mb-3">
                                    Trusted & Secure <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                        Testing
                                    </span>
                                </h4>

                                <p className="text-gray-600 font-medium text-sm sm:text-base mb-3 sm:mb-4">
                                    HIPAA compliant with end-to-end encryption for complete data security
                                </p>

                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600">
                                    <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                                    <span>100% Confidential</span>
                                </div>
                            </div>
                        </Card>

                        {/* Bottom Side Card - Fast Results */}
                        <Card className="flex-1 min-h-[280px] bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white shadow-2xl shadow-green-500/30 rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 relative overflow-hidden group hover:shadow-green-500/50 transition-all duration-500">
                            {/* Animated Background */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 right-0 w-60 h-60 bg-white/20 rounded-full blur-[80px] animate-pulse" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                    <Activity size={24} className="sm:w-7 sm:h-7" />
                                </div>

                                <div>
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-1 sm:mb-2 tracking-tighter">24-48h</div>
                                    <p className="text-green-100 font-bold text-lg sm:text-xl mb-1 sm:mb-2">Fast Results</p>
                                    <p className="text-green-200 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                        Get your comprehensive reports delivered quickly without compromising accuracy
                                    </p>

                                    {/* Progress Indicator */}
                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-100 font-medium mb-2">
                                        <span className="hidden sm:inline">Processing Time</span>
                                        <span className="sm:hidden">Time</span>
                                        <div className="flex-1 h-1.5 sm:h-2 bg-black/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-[85%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse" />
                                        </div>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
