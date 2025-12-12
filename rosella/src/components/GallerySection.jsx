// src/components/GallerySection.jsx
import React from 'react';

const galleryItems = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvoU2vQzB91Q6Qd099c2FRQlDsvOgryo-vmGQVH3NbXEV7efwSHmLp8IJvs6jXipB3-Ln44H5OIAIbnKo5J4rcYrbESmAWlX1TFhfFRpK6XoSEWyhLvUKyRn0jtiTiCmD-1nKKwDhA8jrgS3lqLYETgW_W_MLv2fv1aORK95ADF-4y6XQ6kR4HcVaSPJOpTwceGKOOTRYw1v7XMebrcSNf9nkbRpC3GPW-YmijgMZwaB1DBGfVRN0j9Dz5bTl3InnGtcYsMRPeQWI", alt: "Elegant Table Settings", label: "Elegant Table Settings", span: "md:col-span-2 md:row-span-2" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgMGcXhGyUkfciF9UZ3kOcFqwItMqGA-CD93nEKRzFGUj9SQDohfL-hJq7V6SqnZY624J_fG9vzK3vgL9ntvbRi_oxHQ-o7CpDZNF_1vxvcYGWnqSsjnvidE2zP3UJpqQ8PfbO1w34_mahzx5Y3ZvEOxiB0R3yTcIsWbtgNWmfY1z3A7aS3nzpzbUhk2bbhUqJ2yIvHwEiOg-Z0QhFCZYqPcZ6ygbyYwKZk65O3L-oeumPmrD8OJxCDnX8r7Rdia9qYiX2H3dg5tA", alt: "Bride holding a bouquet of pink roses", label: null, span: "md:col-span-1" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7o5tVgZYcy7CLnDqB7hRUp5KS0-YsQlSntl3t3wxiKpLRa40AvNFqETqIpcZJmIn-hyGKIm3gvHANdC4ijaCRD69JshMeLb90Q_3TZvxietm_fY2liWu9cBFDfJvpyR4hIxUMBUeDR16xJfjfnczoQ6AEA66TDEAQiVO-cNvujxUszDL69NnQaV6ooLbTVd89KjBuZ4UpOiyqmi1P1f5LjxeQ3NIIISr9kLG1zJ0gG5LpoQ7NQb8tpg_wgYzyh8JGimNnyD9rMNQ", alt: "Close up of wedding rings and flowers", label: null, span: "md:col-span-1" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0RygMrN3ccn6b3dt52_acE3wYy31Cdxe1bxmOEDFndWp0M8HCvtKaiZUscOkeqxZQ_oVtLYpYfw391Jff2YRw9DR1VRUOAweBHr59wfpwb7o53vD2glR-5LXOTJpvHcDwtbXPJKmM_lpRoPDKC3LER2C084gSGsxb0vm0o8Y4N6LEhxvkJ-BXDz6b00xSwAD3eo4U6gs9a3vcGhDtn7gURbpJf5a9acd9Evwe4qXLxo0qGdvcoFu_pL5lQd78ssGgGx3_nXP0Uvc", alt: "Outdoor wedding decoration setup with lights", label: "Magical Evening Lighting", span: "md:col-span-2" },
];

const GallerySection = () => {
    return (
        <section className="py-16 px-4" id="gallery">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <span className="text-[#dfa668] text-sm font-bold uppercase tracking-widest mb-1 block">Visual Poetry</span>
                        <h2 className="text-4xl font-serif font-bold text-[#581c2f]">Captured Moments</h2>
                        <p className="text-[#864559] mt-2 max-w-md">Glimpses of real weddings and events at Rosella, where every corner is a photo opportunity.</p>
                    </div>
                    <button className="text-[#9d174d] font-semibold hover:text-[#db2777] flex items-center gap-2 group border-b border-[#9d174d]/30 pb-1 hover:border-[#9d174d] transition-all">
                        View Full Gallery
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-xl">arrow_right_alt</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {galleryItems.map((item, index) => (
                        <div key={index} className={`${item.span} rounded-[2rem] overflow-hidden relative group shadow-lg`}>
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                data-alt={item.alt}
                                style={{ backgroundImage: `url("${item.src}")` }}
                            ></div>
                            {item.label && (
                                <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <p className="text-white font-serif text-2xl">{item.label}</p>
                                </div>
                            )}
                            {!item.label && (
                                <div className="absolute inset-0 bg-[#db2777]/10 mix-blend-color group-hover:bg-transparent transition-colors"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;