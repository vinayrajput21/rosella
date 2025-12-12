// src/components/ReviewsSection.jsx
import React from 'react';

const reviews = [
    { quote: "The team at Rosella made our dream wedding come true. The decor was exactly as we imagined, pink and dreamy. Highly recommended!", name: "Priya & Rahul", detail: "Married Dec 2023", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXIdUWs20MfJU3hgNJ5okDtHCCRf0wcgT2ht355K2CwQjetIXFNCbV-JHB1QzRKXC0ZTudHD1EkzjH5U9O4dRELQpgfao0UhGjN0cPBln7XETvPOOzX0YLvHD4jPwrB7RqFMLDm6fKUCx3gLiEdQe57vTFGhyE4W4BbKUXmUpRSm6agn3bfhUSGo7KHHdyTuA0k8tgh1dAkB_y60qe0hMEsOH5MBaCPM8c75J8WTIcf_HSNP-QIQ5h1ss9uDZxxYcMzxGrjQjY8wU", alt: "Portrait of happy Indian bride" },
    { quote: "Exceptional service and food. Our guests are still talking about the paneer tikka! The bridal room was spacious and comfortable.", name: "Amit & Neha", detail: "Reception Party", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbw1nnCsRqQntOUDqSGjWeSeLSaGMNUNjQE7MQ4JTgSgmG9eFirHkzXR3k9CFlKBws8t1-oiZo_5sVmDzdc_Z_PAVL-D4DKB2MBe1aLJbpChMaadUlXSH15U8uUOLSOMueclgk8ODqPzYiS2W1pddRNU7GsDUpdu70JpFTXQFuH9eaFzhmEMby4lOqdyzVyO_HBY3ebQgwD5ot06388eBCaYPZnPiyK1ZeXtjWGXFFAXMDxGnTdYnWm0V5p8C56THJXbbpK_rqbVs", alt: "Portrait of happy Indian groom" },
    { quote: "A true luxury experience in Faridabad. The chandelier lighting in the main hall creates such a romantic atmosphere.", name: "Sonia M.", detail: "Event Planner", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOld2mnfVcd1rTNnXlZ04k9cYcBkh2dvpEBbUcZ0lm2J8atsc2WPYBllYSvMapHiFhA0iLt-rIsYlIvGQE1Qt6dyLV4q0NK3HoAdsmKxUuE5tMM5JKD_gUPAfrnsr6MbUeUmmgzMBrzpL-jd87PqcTP1WFGI4dQ8usdKkSaB7-dk50j_Lnq1Uu4xiUl_XmHvCZzYH59Wd8fVDZ_5YAfCrW254hX-vrzhN0IpITK3-MLE06tT1VpfpDw3VEnj0wBjwmHWjzBUpNYuA", alt: "Portrait of a female guest" },
];

const ReviewsSection = () => {
    return (
        <section className="py-20 bg-white/40 border-t border-white/50" id="reviews">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-center text-4xl font-serif font-bold text-[#581c2f] mb-16">Love Stories from Rosella</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2rem] relative shadow-[0_10px_40px_-10px_rgba(219,39,119,0.1)] hover:translate-y-[-5px] transition-transform duration-300 border border-[#db2777]/5">
                            <div className="absolute -top-5 -right-5 size-12 bg-gradient-to-br from-[#dfa668] to-[#c48b4e] rounded-full flex items-center justify-center text-white shadow-lg">
                                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>format_quote</span>
                            </div>
                            <p className="text-[#864559] mb-8 italic leading-relaxed">"{review.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="p-1 rounded-full border border-[#dfa668]/30">
                                    <img className="size-14 rounded-full object-cover" alt={review.alt} src={review.src} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#9d174d] font-serif text-lg">{review.name}</h4>
                                    <p className="text-xs text-[#db2777] uppercase tracking-wider font-semibold">{review.detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;