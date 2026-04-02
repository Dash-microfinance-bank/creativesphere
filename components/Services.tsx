import { ArrowRight } from 'lucide-react';

const services = () => {
    return (
        <section className="min-h-screen bg-foreground pb-28">
            <div className='w-full flex items-center'>
                <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 lg:pt-28 text-white">
                    <h1 className='text-4xl md:text-9xl font-bold text-center mb-16 lg:mb-28'>Our Services</h1>
                    <div className="space-y-10 md:space-y-12">
                        {/* Row 1 */}
                        <div className="border-t border-dashed border-primary-foreground/60 pt-10 md:pt-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 01 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        Graphics and Web Design
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">Sleek, intuitive designs that make an impression online and offline.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="border-t border-dashed border-primary-foreground/60 pt-10 md:pt-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 02 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        Brand Identity & Strategy
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">
                                    Crafting memorable and impactful brand stories and visual identities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="border-t border-dashed border-primary-foreground/60 pt-10 md:pt-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 03 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        Advertising and Campaigns
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">
                                    Delivering integrated advertising solutions across multiple platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="border-t border-dashed border-primary-foreground/60 pt-10 md:pt-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 04 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        SEO and Digital analytics
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">
                                    Improving visibility and driving traffic with data-driven optimization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="border-t border-dashed border-primary-foreground/60 pt-10 md:pt-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 05 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        Digital marketing and Social media strategy
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">Building customized campaigns that drive measurable results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 6 */}
                        <div className="border-t border-b border-dashed border-primary-foreground/60 pt-10 pb-10 md:pt-10 md:pb-12">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
                                <div className="text-sm tracking-[0.35em] uppercase text-primary-foreground/80">
                                    ( 06 )
                                </div>
                                <div className='flex-1'>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                        Content creation and Copywriting
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-[18px] leading-relaxed max-w-xl text-primary-foreground/90">
                                    Engaging multimedia content that connects with your target audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-24'>
                <a href='mailto:inthecreativesphere@gmail.com' target='_blank' className=' bg-primary text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-primary/80 transition-colors duration-300'>Get in touch <ArrowRight className='w-4 h-4' /></a>
            </div>
        </section>
    );
};

export default services;