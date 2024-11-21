// "use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "@/components/ui/infinite=moving-cards";

// export function InfiniteMovingCardsDemo() {
//   return (
//     <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <InfiniteMovingCards
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       /> 
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];

'use client'    

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-5 w-3/4 mt-10 md:justify-around">
            <Swiper
                slidesPerView={5}
                spaceBetween={100}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                }}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="mySwiper justify-center items-center"
            >
                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center h-[70px] flex w-[150px]">
                        <Image
                            src={'/images/client/zanaco_red.png'}
                            alt="airtel logo"
                            width={150}
                            height={60}
                            className="w-[150px] h-[60px]"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center flex w-[150px]">
                        <Image
                            src={'/images/client/airtel-limited.svg'}
                            alt="airtel logo"
                            width={100}
                            height={100}
                            className="w-[100px] h-[70px]"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center h-[70px] flex w-[150px]">
                        <Image
                            src={'/images/client/mtn-logo.svg'}
                            alt="airtel logo"
                            width={100}
                            height={100}
                            className="w-[100px] h-[70px]"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center flex w-[150px]">
                        <Image
                            src={'/images/client/world-food-programme-logo-simple.svg'}
                            alt="airtel logo"
                            width={100}
                            height={100}
                            className="w-[100px] h-[70px]"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center h-[70px] flex w-[150px]">
                        <Image
                            src={'/images/client/zamtel_logo.png'}
                            alt="airtel logo"
                            width={70}
                            height={70}
                            className="w-[70px] h-[70px]"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="pt-2 text-gray-400 dark:text-gray-400 justify-center items-center h-[70px] flex w-[150px]">
                        <Image
                            src={'/images/client/bgs-logo.png'}
                            alt="airtel logo"
                            width={150}
                            height={50}
                            className="w-[150px] h-[50px]"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default Slider