"use client"

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className='w-full fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm'>
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
                        <button className='text-sm font-medium flex items-center gap-2' onClick={handleOpen}>menu <MenuIcon className='w-4 h-4' /></button>
                    </div>
                </div>
            </nav>
            {isOpen ? <div className='w-full h-full bg-foreground z-50 fixed top-0 left-0 right-0'>
                <div className='w-full max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex items-center justify-end text-white'>
                    <button className='text-sm font-medium flex items-center gap-2' onClick={handleClose}>close <XIcon className='w-4 h-4' /></button>
                </div>
                <div className='w-full h-ful flex flex-col items-center justify-center gap-y-10 mt-32'>
                    <Link href='/' className='text-white text-3xl font-semibold hover:text-primary transition-colors duration-300'>Home</Link>
                    <Link href='/' className='text-base text-slate-300'>Our Works</Link>
                    <Link href='/' className='text-slate-300'>Get in Touch</Link>
                    <Link href='/' className='text-slate-300'>About Us</Link>
                </div>
            </div> : null}
        </>
    )
}

export default Navbar