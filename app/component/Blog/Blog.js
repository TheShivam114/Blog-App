"use client";

import React, { useEffect, useState } from "react";
import blogData from "../../src/Blogs.json";
import figma from "../../src/assets/image/figma.png";
import notion from "../../src/assets/image/notion.png";
import ps from "../../src/assets/image/ps.png";
import AI from "../../src/assets/image/AI.png";

import Link from "next/link";
import Image from "next/image"; // 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-8/12 p-4 rounded-lg">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row items-center mb-10 gap-6"
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                <Link href={`/blog/${blog.id}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-[270px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>

              <div className="w-full md:w-2/3">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {blog.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-50/10 border border-[#83838380] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="font-semibold">{blog.author}</span>
                </p>

                <h2 className="text-xl font-bold mb-3">{blog.title}</h2>

                <p className="mb-4">
                  {blog.excerpt || blog.content?.slice(0, 120) + "..."}
                </p>

                <Link href={`/blog/${blog.id}`}>
                  <button className="px-6 py-2 rounded-lg bg-transparent border border-[#83838380] hover:bg-gray-50/15 font-medium transition duration-300 ease-in-out shadow-sm hover:shadow-md">
                    {blog.buttonText || "Read More"}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-4/12 sticky top-[80px] left-0 h-full">
          <div className="bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4">
            <span className="uppercase text-[14px]">About</span>
            <div className="flex items-center my-3 gap-1">
              <Image src={about} className="w-16 rounded-full p-1 " alt="" />
              <div>
                <h3 className="font-bold">Master Wick</h3>
                <p className="uppercase text-[13px]">Reflective Blogger</p>
              </div>
            </div>
            <p>
              Ethan Caldwell shares thoughtful insights and reflections on life,
              culture, and personal growth. His work explores the intersections
              of creativity and experience, offering readers unique
              perspectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
