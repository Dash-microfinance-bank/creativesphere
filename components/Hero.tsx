import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const logos = [
    { src: "/PRUDENTIAL.png", alt: "Prudential" },
    { src: "/ARTSPLIT.png", alt: "Artsplit" },
    { src: "/VFD%20BANK.png", alt: "VFD Bank" },
    { src: "/CHI%20LOGO.png", alt: "CHI Limited" },
    { src: "/AURORA.png", alt: "Aurora" },
    { src: "/ESVOLT.png", alt: "Esvolt" },
]

const Hero = () => {
    return (
        <section className='w-full min-h-screen bg-background'>
            <div className='w-full h-full flex items-center lg:items-end justify-center text-foreground pt-40 pb-28 lg:pt-52 lg:pb-28'>
                <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16'>
                    <h1 className='text-5xl md:text-8xl font-bold text-center leading-tight md:leading-none'>We build brands that <span className='text-primary'>stand out</span></h1>
                    <div className='w-full max-w-3xl mx-auto px-6 md:px-10 lg:px-16 mt-6 lg:mt-10 text-foreground'>
                        <p className='text-base md:text-base text-center text-muted-foreground'>We help businesses find their voice, and make sure the world hears it. Through bold design, storytelling, and smart tech, we craft experiences that look good and feel right, building strategies that go beyond luck in a crowded market.</p>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <a href='mailto:inthecreativesphere@gmail.com' target='_blank' className=' bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-black/80 transition-colors duration-300'>Get in touch <ArrowRight className='w-4 h-4' /></a>
                    </div>
                    <div className='mt-12 relative overflow-hidden'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent z-10' />
                        <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent z-10' />
                        <div className='flex w-max animate-marquee gap-4'>
                            {[...logos, ...logos].map((logo, idx) => (
                                <div
                                    key={`${logo.alt}-${idx}`}
                                    className='flex h-16 w-44 items-center justify-center rounded-xl px-4'
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={56}
                                        className='h-auto max-h-11 w-auto object-contain'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero