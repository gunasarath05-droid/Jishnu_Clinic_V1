import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Map } from 'lucide-react';
import Button from '../../components/ui/Button';
import apiClient from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';

const PageHero = ({ title, subtitle }) => (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#EBF3FA] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-100/40 via-white/50 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] -z-10 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-soft-light" />

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-white/50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                <MessageSquare size={14} className="animate-pulse" /> Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0F172A] tracking-tight mb-6 animate-fade-in-up delay-100">
                {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                {subtitle}
            </p>
        </div>
    </section>
);

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await apiClient.post(ENDPOINTS.CONTACTS, formData);
            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            setFormData({ first_name: '', last_name: '', email: '', subject: 'General Inquiry', message: '' });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone Number',
            content: '+91 98765 43210',
            sub: 'Mon-Sat 9am to 6pm',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'border-blue-100'
        },
        {
            icon: Mail,
            title: 'Email Address',
            content: 'info@jishnuclinic.com',
            sub: 'We reply within 24 hours',
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            border: 'border-purple-100'
        },
        {
            icon: MapPin,
            title: 'Clinic Location',
            content: '123, Health Avenue, Chennai',
            sub: 'Tamil Nadu - 600001',
            color: 'text-green-600',
            bg: 'bg-green-50',
            border: 'border-green-100'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHero
                title="Let's Start a Conversation"
                subtitle="Have questions about our services or need medical assistance? We are here to listen and help."
            />

            <section className="relative py-16 sm:py-20 lg:py-24 -mt-20 z-20">
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-24">
                        {contactInfo.map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-bl-[4rem] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110`} />

                                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    <item.icon size={28} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-lg font-semibold text-gray-700 mb-1">{item.content}</p>
                                    <p className="text-sm text-gray-400 font-medium">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* Map Section */}
                        <div className="space-y-8 animate-fade-in-up delay-300">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                                    <Map size={14} /> Our Location
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Visit Our Clinic</h2>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Experience world-class healthcare in a comfortable and modern environment. We are conveniently located in the heart of the city.
                                </p>
                            </div>

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white h-[400px] w-full group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.928737380145!2d80.20901174697116!3d13.068406399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266874bd21e5d%3A0x6b87654321098765!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase">Open Hours</p>
                                        <p className="text-sm font-bold text-gray-900">Mon - Sat: 09:00 AM - 08:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-[3rem] p-8 sm:p-10 shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden animate-fade-in-up delay-400">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 -mr-16 -mt-16 opacity-50" />

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500 mb-8">We usually reply within 24 hours.</p>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none"
                                        required
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Appointment Issue">Appointment Issue</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-5 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full py-4 text-base sm:text-lg rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
