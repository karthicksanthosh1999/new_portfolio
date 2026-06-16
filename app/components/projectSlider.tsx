'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';


type TImages = {
    images: string[]
}

export default function ProjectSlider({ images }: TImages) {

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleNext = () => setActiveIndex((preV) => preV === images.length - 1 ? 0 : preV + 1);
    const handlePrev = () => setActiveIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);


    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);


    return (
        <>
            <Swiper
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {images?.map((item, idx) => (
                    <SwiperSlide
                        key={idx}
                        onClick={() => {
                            setActiveIndex(idx);
                            setIsOpen(true);
                        }}
                        className="cursor-pointer"
                    >
                        <img
                            src={item}
                            alt={`preview-${idx}`}
                            className="w-full h-[250px] object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-white text-3xl"
                    >
                        ✕
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 text-white text-4xl"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <div className="relative w-[80%] h-[80%]">
                        <Image
                            src={images[activeIndex]}
                            alt="preview"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-6 text-white text-4xl"
                    >
                        ›
                    </button>

                </div>
            )}

        </>
    );
}
