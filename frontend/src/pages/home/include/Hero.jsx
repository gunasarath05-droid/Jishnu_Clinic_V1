import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Star, ArrowUpRight, Stethoscope, Microscope, Brain } from 'lucide-react';
import Button from '../../../components/ui/Button';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F0F6FF]" id="home">

            {/* Background Decor - Abstract Medical Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-200/30 via-blue-100/10 to-transparent rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-soft-light" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="space-y-6 sm:space-y-8 relative z-20">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-black tracking-widest uppercase animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Next-Gen Healthcare
                        </div>

                        <div className="relative animate-fade-in-up delay-100">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
                                Advanced Care <br />
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Trusted Hands
                                    {/* Underline SVG */}
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg font-medium animate-fade-in-up delay-200">
                            Where precision medicine meets compassionate care. Experience a new standard of health with Jishnu Clinic's world-class specialists.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-300">
                            <Link to="/appointment" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 text-white font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/40 flex items-center justify-center gap-3">
                                    Book Appointment <ArrowRight size={18} />
                                </Button>
                            </Link>
                            <a href="#departments" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 border-blue-200 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-300 font-bold transition-all hover:-translate-y-1">
                                    Our Departments
                                </Button>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 border-t border-gray-200/60 animate-fade-in-up delay-500">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gray-200">
                                        <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-white shadow-md bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px] sm:text-xs">
                                    +2k
                                </div>
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-gray-500">
                                <span className="text-blue-600">4.9/5</span> Rating from <br /> 2,000+ Patients
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Illustration Composite - REIMAGINED */}
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center animate-fade-in-right">

                        {/* Main Glass Portal Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-white/40 to-blue-50/40 backdrop-blur-3xl rounded-full border border-white/50 shadow-2xl shadow-blue-900/5 z-0" />

                        {/* Rotating Ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] border border-dashed border-blue-200 rounded-full animate-spin-slow z-0 opacity-60" />

                        {/* Doctor Image - Cutout style - Better Centered */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                            <div className="h-[65%] w-[65%] sm:h-[70%] sm:w-[70%] lg:h-[75%] lg:w-[75%] overflow-hidden rounded-full">
                                <img
                                    src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=740"
                                    alt="Doctor"
                                    className="h-full w-full object-cover object-center drop-shadow-2xl filter contrast-110"
                                />
                            </div>
                        </div>

                        {/* Floating Glass Panels - "Control Panel" Style */}

                        {/* Left Panel: Expertise - Better Positioned */}
                        <div className="absolute top-16 sm:top-24 lg:top-28 left-2 sm:left-0 lg:-left-4 z-20 bg-white/70 backdrop-blur-2xl p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-white/60 animate-float scale-90 sm:scale-100">
                            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                                <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-600">
                                    <ShieldCheck size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Verified</span>
                            </div>
                            <p className="text-xl sm:text-2xl font-black text-gray-900">100%</p>
                            <p className="text-[10px] sm:text-xs font-bold text-gray-500">Success Rate</p>
                        </div>

                        {/* Right Panel: Awards - Better Positioned */}
                        <div className="absolute top-8 sm:top-14 lg:top-16 right-2 sm:right-0 z-20 bg-white/70 backdrop-blur-2xl p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-white/60 animate-float-slow delay-700 text-center min-w-[90px] sm:min-w-[120px] scale-90 sm:scale-100">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mb-1 sm:mb-2 shadow-inner">
                                <Star size={16} fill="currentColor" className="sm:w-5 sm:h-5" />
                            </div>
                            <p className="text-lg sm:text-xl font-black text-gray-900">No. 1</p>
                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase">Clinic Award</p>
                        </div>

                        {/* Bottom Panel: Live Status - Better Positioned */}
                        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-20 right-2 sm:right-0 lg:-right-8 z-20 bg-white/80 backdrop-blur-2xl p-2 sm:p-3 pl-3 sm:pl-4 pr-4 sm:pr-6 rounded-full shadow-2xl border border-white/60 animate-bounce-slow flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100">
                            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
                            </span>
                            <div>
                                <p className="text-xs sm:text-sm font-black text-gray-900">Online Support</p>
                                <p className="text-[9px] sm:text-[10px] font-bold text-green-600">Available 24/7</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Feature Cards - Modern Glass Strip */}
                <div className="mt-12 lg:mt-0 relative z-30">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Neurology', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50' },
                            { title: 'Cardiology', icon: Activity, color: 'text-red-500', bg: 'bg-red-50' },
                            { title: 'Diagnostics', icon: Microscope, color: 'text-blue-500', bg: 'bg-blue-50' }
                        ].map((item, idx) => (
                            <a href="#departments" key={idx} className="block group">
                                <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer overflow-hidden h-full">
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
                                    <div className="relative z-10 flex items-end justify-between h-full">
                                        <div>
                                            <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm`}>
                                                <item.icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                            <p className="text-sm text-gray-400 font-medium mt-1">Advanced Care</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
