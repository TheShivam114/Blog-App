"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import topic1 from "../src/assets/image/topic-1.png";
import topic2 from "../src/assets/image/topic-2.png";
import topic3 from "../src/assets/image/topic-3.png";
import topic4 from "../src/assets/image/topic-4.png";
import topic5 from "../src/assets/image/topic-5.png";
import topic6 from "../src/assets/image/topic-6.png";
import topic7 from "../src/assets/image/topic-7.png";
import topic8 from "../src/assets/image/topic-8.png";
import Image from "next/image";
const Index = () => {
    const prevRef=useRef(null);
    const nextRef=useRef(null);
    const[isReady,setIsReady]=useState(false);
    useEffect(()=>{
        setIsReady( true ) ;

    },[])
  return (
    <>
      <div className="relative px-[8%] lg:px-[12%] pt-[2%]">
        {isReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mt-10 rounded-xl"
          >
            {/*slide1*/}
            <SwiperSlide>
              <div className="p-[70px] flex flex-col justify-between bg-[url('src/assets/image/hero-slide-1.png')] bg-no-repeat bg-center bg-cover rounded-xl h-[70vh] relative z-[5]">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      Business
                    </span>
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      News
                    </span>
                  </div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1">6 Min Read</i>
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Ethan Caldwell</span>
                    on October 16,2025
                  </p>
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    How Tech Shapes the Future of Work in 2025
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                    In today’s ever-evolving world, storytelling has become a
                    powerful tool for connection. Revision provides a unique
                    platform for individuals to...
                  </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>
            {/*slide2*/}
            <SwiperSlide>
              <div className="p-[70px] flex flex-col justify-between bg-[url('src/assets/image/hero-slide-2.png')] bg-no-repeat bg-center bg-cover rounded-xl h-[70vh] relative z-[5]">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      Sprt
                    </span>
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      Travel
                    </span>
                  </div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1">3 Min Read</i>
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Ethan Caldwell</span>
                    on October 20,2025
                  </p>
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    The Future of Work:Tech and Remote Trends
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                    Find out why 2024 is predicted to be a pivotal year for
                    sports technology and its impact on teh industry...
                  </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>
            {/*slide3*/}
            <SwiperSlide>
              <div className="p-[70px] flex flex-col justify-between bg-[url('src/assets/image/hero-slide-3.png')] bg-no-repeat bg-center bg-cover rounded-xl h-[70vh] relative z-[5]">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      News
                    </span>
                    <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                      Trends
                    </span>
                  </div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1">5 Min Read</i>
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Ethan Caldwell</span>
                    on October 16,2025
                  </p>
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    Remote work Trends in the Digital Age
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                    Discover the cutting-edge tech gadgets making travek smarter
                    and more convenients in 2024
                  </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {/* ✅ Custom Swiper Navigation Buttons */}
        <div
          ref={prevRef}
          className="swiper-button-prev swiper-btn-prev cursor-pointer flex items-center justify-center text-3xl transition-transform duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <i className="bi bi-arrow-left text-black dark:text-white"></i>
        </div>

        <div
          ref={nextRef}
          className="swiper-button-next swiper-btn-next cursor-pointer flex items-center justify-center text-3xl transition-transform duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <i className="bi bi-arrow-right text-black dark:text-white"></i>
        </div>
      </div>
      {/* Explore topics */}

      <div className="px-[8%] lg:px-[12%] explore-topic py-10 flex flex-col justify-center items-center">
        <h2 className="text-sm uppercase text-center tracking-wider mb-6 font-bold">
          Expore Trending Topics
        </h2>
          <div className="flex flex-wrap justify-center gap-4 w-[100%] lg:w-[80%]">
            {/* each topic item */}
              <div className="topic-box flex items-center gap-2 px-6 py-2  border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic1} alt="topic1"/>
                  <span className="font-medium text-xl"> Technology</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic2} alt="topic1"/>
                  <span className="font-medium text-xl"> Travel</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic3} alt="topic1"/>
                  <span className="font-medium text-xl"> sport</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic4} alt="topic1"/>
                  <span className="font-medium text-xl"> Business</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic5} alt="topic1"/>
                  <span className="font-medium text-xl"> Management</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic6} alt="topic1"/>
                  <span className="font-medium text-xl"> Trends</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic7} alt="topic1"/>
                  <span className="font-medium text-xl"> Startups</span>
              </div>
              <div className="topic-box flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                  <Image src={topic8} alt="topic1"/>
                  <span className="font-medium text-xl"> News</span>
              </div>
          </div>
      </div>

    </>
  );
};

export default Index;
