import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';

function NavBar() {
    return (
        <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
            <Image src='/logo.svg'
                alt='logo'
                width={100}
                height={100}
            />
            <div className='hidden md:flex gap-5 text-lg font-bold'>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                    <Link href={"/home"} className="space-x-4 h-14 items-center">
                        Home
                    </Link>
                </h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                    <Link href={"/explore"} className="space-x-4 h-14 items-center">
                        Explore
                    </Link>
                </h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                    <Link href={"/contact-us"} className="space-x-4 h-14 items-center">
                        Contact Us
                    </Link>
                </h2>
            </div>
            <UserButton />
        </div>
    )
}

export default NavBar