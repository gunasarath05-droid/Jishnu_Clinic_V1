import React from 'react';
import { Heart, Brain, Bone, Stethoscope, Baby, Activity, Pill, User, ArrowUpRight } from 'lucide-react';

const departments = [
    { icon: Heart, name: 'Cardiology', desc: 'Comprehensive heart care including angioplasty and surgery.', color: 'bg-red-50 text-red-500' },
    { icon: Brain, name: 'Neurology', desc: 'Diagnosis and treatment of brain, spine, and nerve disorders.', color: 'bg-purple-50 text-purple-500' },
    { icon: Bone, name: 'Orthopedics', desc: 'Bone and joint care, fractures, arthritis, and replacements.', color: 'bg-orange-50 text-orange-500' },
    { icon: Pill, name: 'Gastroenterology', desc: 'Expert care for digestive system, liver, and pancreas.', color: 'bg-emerald-50 text-emerald-500' },
    { icon: Baby, name: 'Pediatrics', desc: 'Medical services for infants, children, and adolescents.', color: 'bg-blue-50 text-blue-500' },
    { icon: User, name: 'Gynecology', desc: "Women's health, pregnancy care, and childbirth services.", color: 'bg-pink-50 text-pink-500' },
    { icon: Activity, name: 'Urology', desc: 'Advanced kidney, bladder, and male reproductive treatments.', color: 'bg-indigo-50 text-indigo-500' },
    { icon: Stethoscope, name: 'Radiology', desc: 'High-tech imaging services including MRI, CT scan, and X-ray.', color: 'bg-cyan-50 text-cyan-500' },
];

const Departments = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] overflow-hidden" id="departments">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                            <Activity size={12} className="sm:w-3.5 sm:h-3.5" /> Our Specialities
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
                            Advanced Medical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Departments
                            </span>
                        </h2>
                    </div>
                    <div className="lg:max-w-xs border-l-4 border-blue-500 pl-4 sm:pl-6 py-2">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                            We combine specialist expertise with advanced technology to provide the best possible care for our patients.
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {departments.map((dept, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative Blur Circles (Hover) */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-700" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6 sm:mb-8">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 ${dept.color} group-hover:bg-white/10 group-hover:text-blue-600 group-hover:backdrop-blur-md shadow-sm`}>
                                        <dept.icon size={22} className="sm:w-6.5 sm:h-6.5" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-4xl sm:text-5xl font-black text-gray-100 group-hover:text-white/20 transition-colors duration-500 select-none">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors duration-300">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-500 transition-colors duration-300 font-medium">
                                        {dept.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;