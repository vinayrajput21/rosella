// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2d0814] text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#9d174d]/20 via-[#2d0814] to-[#2d0814]"></div>
            <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-lg text-[#dfa668]">diamond</span>
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-tight">Rosella by SK</span>
                        </div>
                        <p className="text-white/40 text-sm max-w-xs text-center md:text-left">Creating timeless memories in Faridabad's most elegant setting.</p>
                    </div>
                    <div className="flex gap-8 text-sm text-white/60">
                        {['Privacy Policy', 'Terms of Service', 'Instagram', 'Facebook'].map((link) => (
                            <a key={link} className="hover:text-[#dfa668] transition-colors" href="#">{link}</a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <div>
                        &copy; 2024 Rosella by SK. All rights reserved.
                    </div>
                    <div>
                        Designed with <span className="text-[#dfa668]">♥</span> for luxury.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;