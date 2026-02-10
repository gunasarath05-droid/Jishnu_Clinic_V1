import React from 'react';
import Card from '../../../components/ui/Card';
import { Facebook, Twitter, Linkedin, Plus } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Mehidi Hasan',
        specialty: 'Heart Surgeon',
        image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        name: 'Dr. Hamida Jannat',
        specialty: 'Cardiologist & Medicine',
        image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
        color: 'bg-green-50 text-green-600',
        featured: true,
    },
    {
        name: 'Dr. Haseeb Hossain',
        specialty: 'Neurologist',
        image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
        color: 'bg-indigo-50 text-indigo-600',
    },
    {
        name: 'Dr. Jenia',
        specialty: 'Gynecologist',
        image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
        color: 'bg-pink-50 text-pink-600',
    }
];

const Doctors = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-blue-50/20" id="doctors">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-10 sm:mb-12 lg:mb-16 gap-6 sm:gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#4ADE80] text-[#0f172a] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
                            Doctors
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
                            Meet Our Specialized <br />
                            Medical Team
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-xs sm:text-sm font-medium leading-relaxed pb-2">
                        From General Practitioners to Top Specialists, Our Doctors Are Dedicated To Your Health.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-end">
                    {doctors.map((doctor, idx) => (
                        <div
                            key={idx}
                            className={`relative group transition-all duration-500 ${doctor.featured ? 'lg:-mt-12 lg:mb-0' : ''}`}
                        >
                            <div className="relative h-[380px] sm:h-[400px] lg:h-[420px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200/50 group-hover:shadow-3xl transition-all">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-40" />

                                {/* Glass Info Box */}
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-lg border border-white/50 text-center">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{doctor.name}</h3>
                                    <p className="text-xs sm:text-sm text-blue-600 font-medium mb-3 sm:mb-4">{doctor.specialty}</p>

                                    <div className="flex justify-center gap-2 sm:gap-3">
                                        {[Facebook, Twitter, Linkedin, Plus].map((Icon, i) => (
                                            <a key={i} href="#" className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100/80 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors">
                                                <Icon size={12} className="sm:w-3.5 sm:h-3.5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
