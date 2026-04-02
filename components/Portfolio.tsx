import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type CaseStudy = {
    href: string
    imageSrc: string
    imageAlt: string
    title: string
    description: string
    tags: string
}

const caseStudies: CaseStudy[] = [
    {
        href: '/',
        imageSrc: '/dash-case-study.jpeg',
        imageAlt: 'dash microfinance bank',
        title: 'Dash Microfinance Bank',
        description:
            'We were responsible for the planning and execution of content strategies, as well as the optimization and management of social media pages. We prioritized building the overall brand identity & positioning.',
        tags: 'Branding / Graphic Design',
    },
    {
        href: '/',
        imageSrc: '/vfdvisual.jpeg',
        imageAlt: 'vfdbank',
        title: 'VFD Bank',
        description:
            'We were responsible for Building VFD microfinance Bank X page to over 10k followers from 100',
        tags: 'Branding / Web Design',
    },
    {
        href: '/',
        imageSrc: '/aurora-case-study.jpeg',
        imageAlt: 'aurora',
        title: 'Aurora',
        description:
            'At Aurora, we handled both online and offline brand management, focusing on consistency and creativity. Our work includes creating engaging social media content, interacting with audiences to build relationships, planning and executing campaigns to increase visibility, and analyzing performance data to improve results',
        tags: 'Branding / Graphic Design',
    },
    {
        href: '/',
        imageSrc: '/larrys-swift-case-study.jpeg',
        imageAlt: 'larrys swift logistics',
        title: "Larry's Swift Logistics",
        description:
            "At Larry's Swift Logistics, we delivered visually appealing graphic designs, anchored by clear communication in copy and brand outlook.",
        tags: 'Branding / Web Design',
    },
]

const Portfolio = () => {
    return (
        <section className='w-full min-h-screen bg-background pb-10'>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-14 lg:pb-32 text-foreground'>
                <h1 className='text-4xl md:text-9xl font-bold text-center'>Case studies</h1>
            </div>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-32 text-foreground'>
                <div className='lg:grid grid-cols-1 space-y-12 md:space-y-0 md:grid-cols-2 gap-x-7 gap-y-16'>
                    {caseStudies.map((item) => (
                        <div
                            key={item.title}
                            className='rounded-sm col-span-1 hover:opacity-80 transition-opacity duration-300'
                        >
                            <Link
                                href={item.href}
                                target='_blank'
                                className='group relative block aspect-square w-full overflow-hidden rounded-sm'
                            >
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    sizes='(max-width: 768px) 100vw, 50vw'
                                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                            </Link>
                            <div className='mt-4'>
                                <h2 className='text-2xl font-bold mb-3'>{item.title}</h2>
                                <p className='line-clamp-3 text-base md:text-[18px] leading-relaxed max-w-xl text-muted-foreground'>
                                    {item.description}
                                </p>
                                <p className='text-base md:text-[18px] leading-relaxed max-w-xl text-muted-foreground mt-5 font-semibold'>
                                    {item.tags}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-20'>
                    <Link
                        href='https://www.google.com'
                        target='_blank'
                        className=' bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-black/80 transition-colors duration-300'
                    >
                        Our works <ArrowRight className='w-4 h-4' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
