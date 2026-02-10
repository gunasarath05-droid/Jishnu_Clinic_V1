import React, { useEffect } from 'react';
import { Activity, Target, Eye, Heart, Users, Award, Building2, TrendingUp, Shield, Clock, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#EBF3FA] to-white overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 via-white/20 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 text-gray-600 text-xs font-bold tracking-wide uppercase mb-6">
                <Activity size={14} className="text-blue-500" /> Jishnu Clinic
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0F172A] tracking-tight mb-4 sm:mb-6">
                {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed px-4">
                {subtitle}
            </p>
        </div>
    </section>
);

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageHero
                title="About Us"
                subtitle="We are dedicated to providing the best medical care with a patient-centered approach and advanced technology."
            />

            {/* Our Story Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053"
                                alt="Hospital Building"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />

                            {/* Glass Card Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-2xl lg:rounded-3xl">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg sm:text-xl">Est. 2008</h4>
                                        <p className="text-blue-100 text-xs sm:text-sm">15+ Years of Excellence</p>
                                    </div>
                                </div>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Trusted by thousands for compassionate, world-class medical care
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-6">
                                <Heart size={14} /> Our Story
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.1] mb-6">
                                Committed to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Your Health
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                                Since 2008, Jishnu Clinic has been at the forefront of medical excellence, combining advanced technology with compassionate care. Our multidisciplinary team of experts works tirelessly to ensure every patient receives personalized treatment.
                            </p>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                                We believe in treating not just the illness, but the whole person. Our state-of-the-art facilities and evidence-based practices ensure the highest standards of care.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                {[
                                    { value: '20M+', label: 'Patients Served' },
                                    { value: '200+', label: 'Medical Experts' },
                                    { value: '95%', label: 'Success Rate' },
                                    { value: '24/7', label: 'Emergency Care' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1">{stat.value}</h3>
                                        <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-blue-100 text-blue-600 text-xs font-bold uppercase mb-6">
                            <Target size={14} /> Our Purpose
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
                            Mission & Vision
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Mission Card */}
                        <div className="group relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-[100px] -z-10 group-hover:bg-blue-200/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-100/30 rounded-full blur-[80px] -z-10" />

                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <Target size={32} className="sm:w-10 sm:h-10" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                To provide accessible, high-quality healthcare services that improve the well-being of our community through innovation, compassion, and medical excellence.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/30 rounded-full blur-[100px] -z-10 group-hover:bg-green-200/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-100/30 rounded-full blur-[80px] -z-10" />

                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <Eye size={32} className="sm:w-10 sm:h-10" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                To be the leading healthcare provider recognized for exceptional patient care, cutting-edge medical innovation, and a commitment to community wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-6">
                            <Shield size={14} /> Why Choose Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
                            What Sets Us Apart
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                icon: Users,
                                title: 'Expert Team',
                                desc: 'Board-certified physicians and specialists with years of experience',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: Building2,
                                title: 'Modern Facilities',
                                desc: 'State-of-the-art infrastructure with advanced medical technology',
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                icon: Clock,
                                title: '24/7 Emergency',
                                desc: 'Round-the-clock emergency services with rapid response',
                                color: 'from-green-500 to-emerald-600'
                            },
                            {
                                icon: Shield,
                                title: 'Patient Safety',
                                desc: 'Stringent protocols ensuring the highest safety standards',
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Success Rate',
                                desc: '95% patient satisfaction with proven treatment outcomes',
                                color: 'from-orange-500 to-orange-600'
                            },
                            {
                                icon: Heart,
                                title: 'Compassionate Care',
                                desc: 'Patient-centered approach with empathy and understanding',
                                color: 'from-pink-500 to-pink-600'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative bg-white/70 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6 sm:p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <item.icon size={28} className="sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                                Ready to Experience <br />
                                Quality Healthcare?
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
                                Book your appointment today and take the first step towards better health with Jishnu Clinic's expert medical team.
                            </p>
                            <a href="/appointment" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-xl lg:rounded-2xl shadow-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-white/30">
                                Book Appointment <ArrowRight size={20} />
                            </a>
                        </div>

                        {/* Right Contact Info */}
                        <div className="space-y-4 sm:space-y-6">
                            {[
                                { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
                                { icon: Phone, label: 'Phone', value: '+880 1616-876080' },
                                { icon: Mail, label: 'Email', value: 'info@jishnuclinic.com' },
                                { icon: Clock, label: 'Hours', value: 'Open 24/7' }
                            ].map((contact, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white">
                                        <contact.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-blue-200 text-xs sm:text-sm font-medium">{contact.label}</p>
                                        <p className="text-white text-base sm:text-lg font-bold">{contact.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;