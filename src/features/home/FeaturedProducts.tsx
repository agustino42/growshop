"use client";

import { ProductCard } from '@src/app/components/ProductCard'
import React, { CSSProperties } from 'react'
import { Swiper, SwiperSlide} from "swiper/react"
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay }  from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperNavButton } from '@src/app/components/SwiperNavButton';
import SectionHeading from '@src/app/components/SectionHeading';
import { Box } from '@chakra-ui/react';



const sliderStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

interface FeaturedProductsProps {
     title: string;
}


export const FeaturedProducts = ( {title} : FeaturedProductsProps) => {
 const sliderSetting: SwiperOptions = {
 modules: [Navigation, Autoplay],
spaceBetween: 10,
slidesPerView: "auto",
speed: 1000,
autoplay: {
  delay: 5000,
  disableOnInteraction: false,
} 
 }
  return (
    <Box w={{ base: "100%", lg: "90%"}} mx="auto" p="2rem">
     <SectionHeading title={title} />
{/**-------- */}
     <Swiper {...sliderSetting} style={{width: "100%", height: "100%"}}>
     <SwiperSlide style={sliderStyles}>

<ProductCard />

     </SwiperSlide>
     
{/**-------- */}
    
     <SwiperSlide style={sliderStyles}>

<ProductCard />

     </SwiperSlide>
    
{/**-------- */}
    
     <SwiperSlide style={sliderStyles}>

<ProductCard />

     </SwiperSlide>
    
{/**-------- */}

    
     <SwiperSlide style={sliderStyles}>

<ProductCard />

     </SwiperSlide>
    
{/**-------- */}
    
     <SwiperSlide>

<ProductCard />

     </SwiperSlide>

     <SwiperNavButton />
     </Swiper>

    </Box>
  )
}
