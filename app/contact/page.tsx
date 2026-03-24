import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <section className='w-full flex items-center justify-center h-screen bg-background pb-10 px-20'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-16'>
                    <div className='col-span-1'>
                        <h2 className='text-5xl font-bold mb-3'>Contact Us</h2>
                        <p className='text-base md:text-[18px] leading-relaxed max-w-xl text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum placeat odio eveniet impedit fugiat ratione minus harum voluptate molestiae.</p>
                    </div>
                    <div className='col-span-1'>
                        <form className='space-y-6'>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor='name' className='text-sm font-medium'>Name</label>
                                <input type='text' id='name' className='w-full p-2 rounded-md border border-gray-300 placeholder:text-sm' placeholder='Enter your name' />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor='email' className='text-sm font-medium'>Email</label>
                                <input type='email' id='email' className='w-full p-2 rounded-md border border-gray-300 placeholder:text-sm' placeholder='Enter your email' />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor='message' className='text-sm font-medium'>Message</label>
                                <textarea id='message' className='w-full p-2 rounded-md border border-gray-300 placeholder:text-sm' placeholder='Enter your message' />
                            </div>
                            <div>
                            <button type='submit' className='py-3 px-10 rounded-md border border-gray-300 text-sm font-medium hover:bg-black transition-colors duration-300 bg-primary text-white cursor-pointer'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page