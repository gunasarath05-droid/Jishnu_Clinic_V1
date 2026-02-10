import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                J
                            </div>
                            <div className="text-2xl font-bold">Jishnu Clinic</div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            providing comprehensive healthcare services with a focus on advanced diagnostics and personalized patient care.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Doctors</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Departments</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Appointments</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Departments</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Cardiology</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Neurology</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Orthopedics</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pediatrics</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Radiology</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-5 text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                                <span>123 Health Avenue, Wellness District, Medical City, MC 12345</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span>info@jishnuclinic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Jishnu Clinic. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
