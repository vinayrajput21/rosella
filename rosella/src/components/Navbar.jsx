// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-4 z-50 mx-auto max-w-[1200px] px-4 w-full">
            <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-glow">
                <div className="flex items-center gap-3">
                    <div className="size-9 bg-gradient-to-br from-[#db2777] to-[#9d174d] text-white rounded-full flex items-center justify-center shadow-lg border border-white/20">
                        <span className="material-symbols-outlined text-xl">diamond</span>
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-[#9d174d]">
                        Rosella <span className="text-xs font-sans font-normal text-[#864559] uppercase tracking-widest ml-1">by SK</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {['home', 'about', 'gallery', 'amenities', 'reviews'].map((item) => (
                        <a key={item} className="text-sm font-medium hover:text-[#db2777] transition-colors" href={`#${item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>
                <button className="bg-gradient-to-r from-[#dfa668] to-[#c48b4e] hover:to-[#dfa668] text-white text-sm font-bold px-6 py-2 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-gold-glow border border-white/20">
                    Book Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;