// src/components/ContactSection.jsx
import React from 'react';

const contactInfo = [
    { icon: 'call', text: '+91 98765 43210' },
    { icon: 'mail', text: 'bookings@rosella.sk' },
    { icon: 'location_on', text: 'Sector 12, Faridabad, Haryana' },
];

const ContactSection = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden bg-accent-maroon">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-maroon to-[#db2777] opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfa668]/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-rose/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Contact Info */}
                <div className="p-12 md:w-1/2 flex flex-col justify-center bg-white">
                    <h2 className="text-3xl font-serif font-bold text-accent-maroon mb-4">Start Planning Your <br /> Big Day</h2>
                    <p className="text-text-light mb-10">Dates are filling up fast for the upcoming wedding season. Reach out to us to secure your preferred date in our royal hall.</p>
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-4 text-text-main group">
                                <div className="size-10 rounded-full bg-[#fff0f5] flex items-center justify-center group-hover:bg-[#dfa668] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[#db2777] group-hover:text-white">{info.icon}</span>
                                </div>
                                <span className="font-medium">{info.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Booking Form */}
                <div className="bg-[#fdf2f8] p-12 md:w-1/2 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-9xl text-[#db2777]">diamond</span>
                    </div>
                    <form className="space-y-5 relative z-10">
                        <div>
                            <label className="block text-xs font-bold text-[#db2777] uppercase tracking-wider mb-2">Name</label>
                            <input className="w-full bg-white border border-[#db2777]/20 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#dfa668] focus:border-transparent transition-shadow shadow-sm" placeholder="Your Name" type="text" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#db2777] uppercase tracking-wider mb-2">Event Date</label>
                            <input className="w-full bg-white border border-[#db2777]/20 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#dfa668] focus:border-transparent transition-shadow shadow-sm" type="date" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#db2777] uppercase tracking-wider mb-2">Guest Count (Approx)</label>
                            <select className="w-full bg-white border border-[#db2777]/20 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#dfa668] focus:border-transparent transition-shadow shadow-sm text-gray-600">
                                <option>100 - 200 Guests</option>
                                <option>200 - 350 Guests</option>
                                <option>350 - 500 Guests</option>
                                <option>500+ Guests</option>
                            </select>
                        </div>
                        <button className="w-full bg-gradient-to-r from-[#dfa668] to-[#c48b4e] hover:to-[#dfa668] text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-md hover:shadow-lg transform active:scale-95" type="button">
                            Check Availability
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;