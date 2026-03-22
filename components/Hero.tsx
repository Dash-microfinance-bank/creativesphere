import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='w-full h-screen bg-background'>
            <div className='w-full h-full flex items-center lg:items-end justify-center text-foreground pt-10 lg:pb-28'>
                <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16'>
                    <h1 className='text-5xl md:text-9xl font-bold text-center leading-tight md:leading-none'>We build brands that stand out</h1>
                    <div className='w-full max-w-3xl mx-auto px-6 md:px-10 lg:px-16 mt-6 lg:mt-10 text-foreground'>
                        <p className='text-lg md:text-xl text-center text-muted-foreground'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laborum magnam ab quo. Perspiciatis sapiente nostrum saepe maxime esse aliquam!</p>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Link href='https://www.google.com' target='_blank' className=' bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-black/80 transition-colors duration-300'>Get in touch <ArrowRight className='w-4 h-4' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero