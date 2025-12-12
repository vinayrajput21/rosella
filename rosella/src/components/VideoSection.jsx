// src/components/VideoSection.jsx
import React from 'react';

const VideoSection = () => {
    return (
        <section className="py-12 px-4 relative">
            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <span className="text-[#db2777] text-sm font-bold uppercase tracking-widest mb-2 block font-display">Cinematic Experience</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-10">Experience the Grandeur</h2>
                <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-glow group cursor-pointer bg-[#2d0814] border-4 border-white/50">
                    {/* Video Thumbnail */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-75 transition-opacity duration-500"
                        data-alt="Blurred background of a wedding stage with lighting"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWoEI_vmkHM9xUQCHaqjclfcAjzsi84KzRXhHm1093KbvHqqZso31RxAow11jbq9b9A81tyCQq__rz-eEFq3755X6Tre0LKEdrp8p4gMXs3qRm5HLpFFXyMSsoAVn2Z4HwJH6yMnOD6mF8LzXFP-q6xUNWKwLh4IPU-nYuftlFiwOCJ-TgLTSQxGVZuf175zIFZrKtOGFYvZ4YI6ReylqQbfHUF2i8CLZ3PbxxOsGA0JQ80XKXp-8fQM3P5a68xZAyi9p2NZXl9DA")' }}
                    ></div>
                    <div className="absolute inset-0 bg-accent-maroon/20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button className="relative flex items-center justify-center size-24 md:size-28 bg-white/10 backdrop-blur-md rounded-full border border-white/40 text-[#dfa668] transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                            <span className="material-symbols-outlined text-6xl md:text-7xl drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            <div className="absolute inset-0 rounded-full border border-[#dfa668]/50 animate-ping"></div>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#2d0814] via-[#2d0814]/60 to-transparent text-left">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-1 bg-[#dfa668] rounded-full"></div>
                            <div>
                                <p className="text-white font-serif font-medium text-2xl">Virtual Tour</p>
                                <p className="text-white/70 text-sm">The Royal Hall & Entry Lobby</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;