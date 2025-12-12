// src/components/AmenitiesSection.jsx
import React from 'react';

const amenities = [
    { icon: 'podium', title: 'Grand Stage' },
    { icon: 'local_florist', title: 'Floral Décor' },
    { icon: 'wine_bar', title: 'Fine Dining' },
    { icon: 'garage_home', title: 'Valet Parking' },
    { icon: 'checkroom', title: 'Bridal Room' },
    { icon: 'music_note', title: 'DJ System' },
];

const AmenitiesSection = () => {
    return (
        <section className="py-16 bg-white/50 backdrop-blur-sm" id="amenities">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#581c2f] mb-4">Premium Amenities</h2>
                    <p className="text-[#864559] max-w-2xl mx-auto">Every detail at Rosella is curated to provide a seamless and luxurious experience for you and your guests.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-white rounded-t-full rounded-b-[3rem] text-center group hover:bg-[#db2777] transition-colors duration-500 shadow-sm border border-[#db2777]/10">
                            <div className="bg-[#fce7f3] p-4 rounded-full shadow-inner mb-4 group-hover:bg-white/20 transition-colors">
                                <span className="material-symbols-outlined text-[#9d174d] group-hover:text-white text-3xl">{item.icon}</span>
                            </div>
                            <span className="font-serif font-bold text-[#581c2f] group-hover:text-white text-base">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AmenitiesSection;