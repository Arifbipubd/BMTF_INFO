/** @format */

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Arrow_r } from "../../public/svg/icon";

const services = [
  {
    link: "/footwear-and-leather",
    img: "/allVerticals/Footwear-and-leather.jpg",
    bg: "/allVerticals/Footwear-and-leather.jpg",
    title: "Footwear & Leather",
  },
  {
    link: "/furniture",
    img: "/allVerticals/Furniture.jpg",
    bg: "/allVerticals/Furniture.jpg",
    title: "Furniture",
  },
  {
    link: "/pole-pile",
    img: "/allVerticals/Pole-n-pile.jpg",
    bg: "/allVerticals/Pole-n-pile.jpg",
    title: "Pole & Pile",
  },
  {
    link: "/vehicle-assembly",
    img: "/allVerticals/vehicle-assembly.jpg",
    bg: "/allVerticals/vehicle-assembly.jpg",
    title: "Vehicle Assembly",
  },
  {
    link: "/steel-structure-manufacturing",
    img: "/allVerticals/Steel-structure.jpg",
    bg: "/allVerticals/Steel-structure.jpg",
    title: "Steel Structure Manufacturing",
  },
  {
    link: "/electronic-assembly",
    img: "/allVerticals/Electronic-Assembly.jpg",
    bg: "/allVerticals/Electronic-Assembly.jpg",
    title: "Electronic Assembly",
  },
  {
    link: "/bmtf-crafties",
    img: "/allVerticals/crafties.jpg",
    bg: "/allVerticals/crafties.jpg",
    title: "BMTF Crafties",
  },
  {
    link: "/cfl-led-bulb",
    img: "/allVerticals/CFL-and-LED.jpg",
    bg: "/allVerticals/CFL-and-LED.jpg",
    title: "CFL & LED Bulb",
  },
  {
    link: "/central-tooling-factory",
    img: "/allVerticals/CTD.jpg",
    bg: "/allVerticals/CTD.jpg",
    title: "Central Tooling Department",
  },
  {
    link: "/forge-shop",
    img: "/allVerticals/Forge-shop.jpg",
    bg: "/allVerticals/Forge-shop.jpg",
    title: "Forge Shop",
  },
  {
    link: "/foundry-shop",
    img: "/allVerticals/Foundry-shop.png",
    bg: "/allVerticals/Foundry-shop.png",
    title: "Foundry Shop",
  },
  {
    link: "/galvanizing-plant",
    img: "/allVerticals/galvanizing-shop.jpg",
    bg: "/allVerticals/galvanizing-shop.jpg",
    title: "Galvanizing Plant",
  },
  {
    link: "/heat-and-surface",
    img: "/allVerticals/heat-n-surface.jpg",
    bg: "/allVerticals/heat-n-surface.jpg",
    title: "Heat and Surface Treatment",
  },
  {
    link: "/machine-shop",
    img: "/allVerticals/Machine-shop.jpg",
    bg: "/allVerticals/Machine-shop.jpg",
    title: "Machine Shop",
  },
  {
    link: "/army-pharma",
    img: "/allVerticals/Pharma.png",
    bg: "/allVerticals/Pharma.png",
    title: "Army Pharma",
  },
  {
    link: "/packaging-unit",
    img: "/allVerticals/Packaging.jpg",
    bg: "/allVerticals/Packaging.jpg",
    title: "Packaging Unit",
  },
  {
    link: "/pattern-shop",
    img: "/allVerticals/Pattern-shop.jpg",
    bg: "/allVerticals/Pattern-shop.jpg",
    title: "Pattern Shop",
  },
];

SwiperCore.use([Navigation]);
export default function HomeServices() {
  return (
    <>
      {/* <!-- Service Query Shortcode --> */}
      <div
        className='fn_cs_service_query'
        data-mobile='disable'
        data-column-count='4'
      >
        <div className='top_bar'>
          <div className='t_inner'>
            <h3>Our Industries</h3>
            <span>
              The automotive industry is the technological trendsetter among
              manufacturing industries.
            </span>
            <div className='owl_control'>
              <div className='fn_prev'></div>
              <div className='fn_next'></div>
            </div>
          </div>
        </div>
        <div className='service_part'>
          <div className='owl-carousel'>
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              autoplaydisableoninteraction={false}
              loop={true}
              // pagination={{ clickable: true }}
              className='custom-class'
              navigation={{
                prevEl: ".fn_prev",
                nextEl: ".fn_next",
              }}
              breakpoints={{
                // when window width is >= 768px

                768: {
                  // when window width is >= 992px
                  slidesPerView: 3,
                },
                1200: {
                  // when window width is >= 992px
                  slidesPerView: 4,
                },
              }}
            >
              {services.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='item'>
                    <Link href={item.link}>
                      <a className='full_link'></a>
                    </Link>
                    <div className='img_holder'>
                      <img src={item.img} alt='' />
                      <div
                        className='abs_img'
                        style={{ backgroundImage: `url(${item.bg})` }}
                      ></div>
                    </div>
                    <div className='title'>
                      <h3>{item.title}</h3>
                    </div>
                    <div className='view_more'>
                      <span className='more_link'>
                        <span className='text'>View More</span>
                        <span className='arrow'>
                          <Arrow_r className='fn__svg' />
                        </span>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- /Service Query Shortcode --> */}
    </>
  );
}
