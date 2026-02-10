import React, { useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, ChevronDown, CheckCircle, ShieldCheck } from 'lucide-react';
import Button from '../../components/ui/Button';
import apiClient from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';

const PageHero = ({ title, subtitle }) => (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#EBF3FA] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 via-white/20 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -z-10 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-soft-light" />

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-white/50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                <Calendar size={14} className="text-blue-500" /> Schedule Visit
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

const BookAppointment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        department: 'General Medicine',
        preferred_doctor: 'Any Available Doctor',
        preferred_date: '',
        preferred_time: '',
        reason: ''
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
            await apiClient.post(ENDPOINTS.APPOINTMENTS, formData);
            setStatus({ type: 'success', message: 'Appointment request sent successfully! We will confirm via phone/email.' });
            setFormData({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                department: 'General Medicine',
                preferred_doctor: 'Any Available Doctor',
                preferred_date: '',
                preferred_time: '',
                reason: ''
            });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Failed to book appointment. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHero
                title="Book Appointment"
                subtitle="Schedule your visit with our expert doctors. We ensure a smooth and hassle-free experience."
            />

            <section className="relative py-16 sm:py-20 lg:py-24 -mt-20 z-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="relative">
                        {/* Glass Container */}
                        <div className="bg-white/80 backdrop-blur-3xl border border-white/50 shadow-2xl shadow-blue-900/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 relative overflow-hidden">

                            {/* Decorative Blobs */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-[80px] -z-10 pointer-events-none" />

                            <div className="text-center mb-10 sm:mb-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 shadow-sm">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Patient Details</h3>
                                <p className="text-gray-500 font-medium">Please fill in your details to book a slot</p>
                            </div>

                            <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
                                {/* Personal Info */}
                                <div className="space-y-5">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-3 border-b border-gray-100 pb-3">
                                        <User size={14} /> Personal Information
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                                placeholder="John"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                                placeholder="Doe"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                            <div className="relative group">
                                                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                                    placeholder="+91 98765 43210"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                            <div className="relative group">
                                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Appointment Details */}
                                <div className="space-y-5">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-3 border-b border-gray-100 pb-3">
                                        <Calendar size={14} /> Appointment Details
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Department</label>
                                            <div className="relative">
                                                <select
                                                    name="department"
                                                    value={formData.department}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none text-gray-600 font-medium cursor-pointer"
                                                    required
                                                >
                                                    <option>General Medicine</option>
                                                    <option>Cardiology</option>
                                                    <option>Neurology</option>
                                                    <option>Pediatrics</option>
                                                </select>
                                                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Preferred Doctor</label>
                                            <div className="relative">
                                                <select
                                                    name="preferred_doctor"
                                                    value={formData.preferred_doctor}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none text-gray-600 font-medium cursor-pointer"
                                                    required
                                                >
                                                    <option>Any Available Doctor</option>
                                                    <option>Dr. Hamida Jannat</option>
                                                    <option>Dr. Sarah Smith</option>
                                                </select>
                                                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="preferred_date"
                                                value={formData.preferred_date}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-gray-600 font-medium"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Preferred Time</label>
                                            <input
                                                type="time"
                                                name="preferred_time"
                                                value={formData.preferred_time}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-gray-600 font-medium"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Reason for Visit (Optional)</label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none font-medium"
                                        placeholder="Briefly describe your symptoms..."
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full py-4 sm:py-5 text-lg rounded-2xl shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Confirm Appointment'} <CheckCircle size={20} className="ml-2" />
                                </Button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookAppointment;
