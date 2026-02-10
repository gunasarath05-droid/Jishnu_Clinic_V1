import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { ArrowRight, Phone, Activity, Users, Award, Building2, Plus } from 'lucide-react';

const About = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
                    {/* Left: Image & Glass Card */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                            <img
                                src="https://img.freepik.com/free-photo/modern-hospital-building_1127-3136.jpg"
                                alt="Jishnu Medical Hospital"
                                className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent mix-blend-multiply" />
                        </div>

                        {/* Floating Glass Card */}
                        <div className="absolute top-6 right-4 sm:top-10 sm:-right-10 md:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl max-w-[280px] sm:max-w-xs animate-float-slow">
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                                    <Plus size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base sm:text-lg">Jishnu Clinic</h4>
                                    <p className="text-blue-100 text-[10px] sm:text-xs font-medium">Excellence in Care</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/90 text-xs sm:text-sm font-medium">
                                    <span className="text-blue-200">FROM</span> <br />
                                    <span className="text-xl sm:text-2xl font-bold">28/10/2008</span>
                                </p>
                                <div className="h-px bg-white/20 my-2" />
                                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                                    Committed to your health and well-being with advanced technology.
                                </p>
                            </div>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                            <Activity size={12} className="sm:w-3.5 sm:h-3.5" /> About Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] mb-4 sm:mb-6 lg:mb-8">
                            Your Jishnu Medical <br />
                            <span className="text-blue-600">Hospital</span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                            We Combine Clinical Expertise, Innovative Technology, And A Patient-First Approach To Ensure Accurate Diagnosis And Effective Treatment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                            <Link to="/about" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto rounded-xl sm:rounded-2xl lg:rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 hover:bg-blue-800 text-white shadow-xl shadow-blue-900/20 text-sm sm:text-base">
                                    Learn More <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5 ml-2" />
                                </Button>
                            </Link>

                            <a href="tel:+8801616876080" className="flex items-center gap-3 sm:gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Phone size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide">For Any Questions</p>
                                    <p className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">+880 1616-876080</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-100">
                    {[
                        { value: '$250M', label: 'In Healthcare Funding', icon: Building2, color: 'text-blue-600 bg-blue-50' },
                        { value: '20M+', label: 'Patients Served Globally', icon: Users, color: 'text-green-600 bg-green-50' },
                        { value: '95%', label: 'Patient Satisfaction Rate', icon: Activity, color: 'text-purple-600 bg-purple-50' },
                        { value: '200+', label: 'Medical Professionals', icon: Award, color: 'text-orange-600 bg-orange-50' },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${stat.color} flex items-center justify-center mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <stat.icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">{stat.value}</h3>
                            <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider px-2">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About;