'use client';
import Image from 'next/image'

export default function Explore() {
    return (
        <>
            <div className="flex justify-center text-3xl m-3 p-2">
                <div className="flex justify-center">
                    <h2>Explore here.</h2>
                    <div>
                        <Image src='/podium-logo.png'
                            alt='hero'
                            width={400}
                            height={500}
                            className='w-full object-cover align-middle p-2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}