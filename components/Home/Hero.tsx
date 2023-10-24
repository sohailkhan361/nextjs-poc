import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[30px] md:text-[50px] font-bold'>
                    Listen to <span className='text-blue-600'>Bestsellers</span> anywhere, anytime
                </h2>
                <h2 className='text-15px] text-gray-500 pr-20 mt-5'>
                    Audible: audiobooks, podcasts & audio stories
                </h2>
                <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all'>
                    Explore AudioBooks
                </button>
            </div>
            <div>
                <Image src='/hero.avif'
                    alt='hero'
                    width={400}
                    height={500}
                    className='w-full object-cover align-middle p-2'
                />
            </div>
        </div>
    )
}

export default Hero