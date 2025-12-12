// src/components/AboutSection.jsx
import React from 'react';

const features = [
    { icon: 'groups', title: 'Grand Capacity', subtitle: 'Up to 500 Guests' },
    { icon: 'location_on', title: 'Prime Location', subtitle: 'Heart of Faridabad' },
    { icon: 'local_parking', title: 'Valet Parking', subtitle: 'Hassle-free Arrival' },
    { icon: 'restaurant_menu', title: 'Gourmet Catering', subtitle: 'Multi-cuisine Menu' },
];

const AboutSection = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden" id="about">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfa668]/5 rounded-full blur-3xl -z-10"></div>
            <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-main leading-tight">
                        Where Tradition Meets <br />
                        <span className="text-secondary italic">Modern Luxury</span>
                    </h2>
                    <p className="text-text-light text-lg leading-relaxed font-light">
                        Rosella by SK offers a blend of modern luxury and traditional hospitality. Immersed in shades of romance and royalty, our venue is designed to make your special day truly unforgettable with premium decor, bespoke floral arrangements, and world-class service right in the heart of Faridabad.
                    </p>
                    <div className="grid grid-cols-2 gap-5 mt-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-lg hover:bg-white transition-all group">
                                <div className="text-secondary mb-3 group-hover:scale-110 transition-transform origin-left">
                                    <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                </div>
                                <h3 className="font-bold text-accent-maroon font-serif text-lg">{feature.title}</h3>
                                <p className="text-sm text-text-light">{feature.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            alt="Couple walking down a beautifully decorated wedding aisle"
                            className="w-full h-auto object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAaYLCSqUYoclhyTYbudEnEROedYPhWP3cg6AE9S7HmaeawW8MepXkRa0RRuaCTIdlnHOcheVJ10rbVm8ccvR1bDFFUoNXzA1gvRCW3tEa3DvnGxOgOXxH19QIIOOg-_6WFcvfF40RrMT07zzFUSpBT2ouBhapWwhHk5ejRZw1qvbaw-M8KyUSzaay-PM_2KKnMNn--1OPLbktB7ISZZlWrNlfdLLdfsFP2Zr-jvPMbOF9v8XIOIkmonN0lmaXKe6FCxW3ybtwIfM"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent mix-blend-overlay"></div>
                    </div>
                    <div className="absolute top-8 -right-8 w-full h-full rounded-[3rem] border-2 border-[#dfa668]/40 -z-10 hidden md:block"></div>
                    <div className="absolute -bottom-8 -left-8 z-20 glass-panel p-5 rounded-2xl shadow-xl max-w-[220px] hidden md:block border border-white/80">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-[#dfa668] filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="font-bold text-accent-maroon font-serif text-lg">4.9/5 Rating</span>
                        </div>
                        <p className="text-xs text-text-light italic leading-tight">"The most beautiful venue we could have asked for! Truly a pink paradise."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;