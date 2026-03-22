import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm'>
            <div className='w-full max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between'>
                <Link href='/' className='text-2xl font-bold'>
                    {/* <Image src='/logo-blue.png' alt='logo' width={200} height={200} /> */}
                    Creatives<span className='text-primary'>Sphere</span>
                </Link>
                <div className='hidden md:flex items-center gap-4'>
                    <Link href='/' className='text-sm font-medium'>Home</Link>
                    <Link href='/' className='text-sm font-medium'>Our Works</Link>
                    <Link href='/' className='text-sm font-medium'>Get in Touch</Link>
                </div>
                <div className='md:hidden'>
                    <button className='text-sm font-medium flex items-center gap-2'>menu <MenuIcon className='w-4 h-4' /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar