"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '450px'
        }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={`/products/${image}`}
                alt={title}
                layout="fill"
                objectFit="cover" // Asegura que la imagen cubra el área sin perder la relación de aspecto
                className="object-fill"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
