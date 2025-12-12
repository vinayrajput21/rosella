// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative pt-10 pb-20 px-4" id="home">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#db2777]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#dfa668]/10 rounded-full blur-3xl -z-10"></div>
            <div className="layout-container max-w-[1200px] mx-auto">
                <div className="relative rounded-2xl overflow-hidden min-h-[650px] flex items-end justify-start p-8 md:p-16 group shadow-2xl shadow-[#9d174d]/20 border-4 border-white/30">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
                        data-alt="Luxury wedding banquet hall with grand chandeliers and floral decor"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBozXjjZZB_2M7NewBXLTUZpZyjGNL4iRYDr4rHK5e5gCraOAS3f3jeoHTAumho9eaZFuSaehXmHyprYdTYqj78QH91ZvEiXCpnrjyhnHGdNcKNbSrjUL8DVZ2MxpUYbA_G7YRV-hTKE6P6k2VwfXGXQw2zkD0BuVen3a0Kxm-YS7GXTO9Cj5AYfgn94WyqHmeroI8Jlwhpx2OSdXiWQZ0oPZ2JQMUzwGKY1KEDI7L8EMiwbq-Brk73gzHYHbyFgAeJ-qtXEAw1KQg")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d0814]/90 via-[#9d174d]/40 to-transparent mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

                    <div className="relative z-10 max-w-3xl text-white animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-xs uppercase tracking-wider font-semibold text-[#dfa668] flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-sm">stars</span> Faridabad's Finest Venue
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Celebrate Your <br /> <span className="italic text-[#dfa668] font-serif">Special Moments</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-lg leading-relaxed drop-shadow-md">
                            Where the grandeur of "Rajkumari" elegance meets modern luxury. Exquisite decor, glass reflections, and unforgettable memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#dfa668] hover:bg-[#c48b4e] text-white text-base font-bold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#dfa668]/30 flex items-center justify-center gap-2 border border-white/20">
                                Inquire Availability
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                            <button className="glass-panel hover:bg-white/40 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg">
                                <span className="material-symbols-outlined filled text-[#dfa668]">play_circle</span>
                                Watch Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;