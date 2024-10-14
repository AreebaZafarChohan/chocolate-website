"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
  "/images/slide7.jpg",
  "/images/slide8.jpg",
  "/images/slide9.jpg",
  "/images/slide10.jpg",
  "/images/slide11.jpg",
  "/images/slide12.jpg",
  "/images/slide13.jpg",
  "/images/slide14.jpg",
  "/images/slide15.jpg",
];

const ImageSlider: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        modules={[EffectCoverflow, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={600}
              className="object-cover rounded-lg transition-all duration-300 ease-in-out
              w-[90%] h-[70%] sm:w-[70%] sm:h-[60%] md:w-[60%] md:h-[50%] lg:w-[50%] lg:h-[60%] xl:w-[40%] xl:h-[50%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;