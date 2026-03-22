import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Portfolio = () => {
    return (
        <section className='w-full min-h-screen bg-background pb-10'>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-32 text-foreground'>
                <h1 className='text-4xl md:text-9xl font-bold text-center'>Case studies</h1>
            </div>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-32 text-foreground'>
                <div className='lg:grid grid-cols-1 space-y-12 md:space-y-0 md:grid-cols-2 gap-x-7 gap-y-16'>
                    <div className='rounded-sm col-span-1 hover:opacity-80 transition-opacity duration-300'>
                        <Link href='https://www.google.com' target='_blank' className='relative block'>
                            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1216,fit=crop,trim=0;526.9801587301588;0;158.52248677248676/chromaticam05FS/pedro-yuniesky-rodriguez-martinez-2yy3wrckjgu-unsplash-6mF1ptmIsPRv0mLA.jpg' alt='Project 1' className='w-full h-full rounded-sm aspect-square object-cover scale-100 transition-transform duration-300 hover:scale-105' />
                        </Link>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold mb-3'>Project 1</h2>
                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum placeat odio eveniet impedit fugiat ratione minus harum voluptate molestiae.</p>
                            <p className='text-sm text-muted-foreground mt-5 font-semibold'>Branding / Graphic Design</p>
                        </div>
                    </div>
                    <div className='rounded-sm col-span-1 hover:opacity-80 transition-opacity duration-300'>
                        <Link href='https://www.google.com' target='_blank' className='relative block'>
                            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1216,fit=crop/chromaticam05FS/alabaster-co-ctg-8rk2zbu-unsplash-0LEHDw6I4yiSofJV.jpg' alt='Project 1' className='w-full h-full rounded-sm aspect-square object-cover scale-100 transition-transform duration-300 hover:scale-105' />
                        </Link>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold mb-3'>Project 2</h2>
                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum placeat odio eveniet impedit fugiat ratione minus harum voluptate molestiae.</p>
                            <p className='text-sm text-muted-foreground mt-5 font-semibold'>Branding / Graphic Design</p>
                        </div>
                    </div>
                    <div className='rounded-sm col-span-1 hover:opacity-80 transition-opacity duration-300'>
                        <Link href='https://www.google.com' target='_blank' className='relative block'>
                            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1216,fit=crop/chromaticam05FS/bailey-alexander-jepwot2mwko-unsplash-unWjfImxHxHcWoox.jpg' alt='Project 1' className='w-full h-full rounded-sm aspect-square object-cover scale-100 transition-transform duration-300 hover:scale-105' />
                        </Link>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold mb-3'>Project 2</h2>
                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum placeat odio eveniet impedit fugiat ratione minus harum voluptate molestiae.</p>
                            <p className='text-sm text-muted-foreground mt-5 font-semibold'>Branding / Graphic Design</p>
                        </div>
                    </div>
                    <div className='rounded-sm col-span-1 hover:opacity-80 transition-opacity duration-300'>
                        <Link href='https://www.google.com' target='_blank' className='relative block'>
                            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1216,fit=crop/chromaticam05FS/claudio-schwarz-lkbsqllr0xs-unsplash-ycRFzvshO0zm3Yva.jpg' alt='Project 1' className='w-full h-full rounded-sm aspect-square object-cover scale-100 transition-transform duration-300 hover:scale-105' />
                        </Link>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold mb-3'>Project 2</h2>
                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum placeat odio eveniet impedit fugiat ratione minus harum voluptate molestiae.</p>
                            <p className='text-sm text-muted-foreground mt-5 font-semibold'>Branding / Graphic Design</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <Link href='https://www.google.com' target='_blank' className=' bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-black/80 transition-colors duration-300'>Our works <ArrowRight className='w-4 h-4' /></Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio