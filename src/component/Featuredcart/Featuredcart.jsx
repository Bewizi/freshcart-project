// import React, { useRef, useState } from 'react';
// Import Swiper React components
import './Featuredcart.css'
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper/modules";


import lightfood from "./ftimages/category-dairy-bread-eggs.jpg";

import snacks from "./ftimages/category-snack-munchies.jpg";

import bakery from "./ftimages/category-bakery-biscuits.jpg";

import instantFood from "./ftimages/category-instant-food.jpg";

import teaAndCoffee from "./ftimages/category-tea-coffee-drinks.jpg";

import atta from "./ftimages/category-atta-rice-dal.jpg";

import babyCare from "./ftimages/category-baby-care.jpg";

import chickeMeat from "./ftimages/category-chicken-meat-fish.jpg";

import cleaningEsse from "./ftimages/category-cleaning-essentials.jpg";

import petCare from "./ftimages/category-pet-care.jpg";

function Featuredcart() {
  return (
    
    <div className="ft-cart">
    <h3>Featured Categories</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >

        <SwiperSlide>
        
          <div >
            <img src={lightfood} alt='Dairy, Bread and Eggs' />
            <span>Dairy, Bread and Eggs</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={snacks} alt="Snack & Munchies" />
            <span>Snack & Munchies</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={bakery} alt="Bakery & Biscuit" />
            <span>Bakery & Biscuit</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={instantFood} alt="Instant Food" />
            <span>Instant Food</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={teaAndCoffee} alt="Tea, Coffee and Drinks" />
            <span>Tea, Coffee and Drinks</span>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div>
            <img src={atta} alt="Atta, Rice & Dal" />
            <span>Atta, Rice & Dal</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={babyCare} alt="Baby Care" />
            <span>Baby Care</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={chickeMeat} alt="Chicken, Meat & Fish" />
            <span>Chicken, Meat & Fish</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cleaningEsse} alt="Cleaning Essentials" />
            <span>Cleaning Essentials</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={petCare} alt="Pet Care" />
            <span>Pet Care</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Featuredcart;
