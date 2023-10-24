import React from 'react'
import Image from 'next/image'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src='/Carousel1.jpeg'
                        alt='carousel'
                        width={400}
                        height={500}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        Jason is back!
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src='/Carousel2.jpeg'
                        alt='carousel'
                        width={400}
                        height={200}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        Available on Amazon & Audible
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src='/Carousel3.jpeg'
                        alt='carousel'
                        width={400}
                        height={200}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        Exforce Returns
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image src='/Carousel4.jpeg'
                        alt='carousel'
                        width={400}
                        height={200}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        Love Conquers All
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <Image src='/Carousel5.jpeg'
                        alt='carousel'
                        width={400}
                        height={200}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        Podium Titles on Audible Plus
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <Image src='/Carousel6.jpeg'
                        alt='carousel'
                        width={400}
                        height={200}
                        className='w-full'
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute p-10 top-4/4 left-4/4 text-white text-6xl font-extrabold w-[400px]">
                        The Talk of Booktok
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel