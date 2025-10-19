"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import blogData from "../../src/Blogs.json";
import figma from "../../src/assets/image/figma.png";
import notion from "../../src/assets/image/notion.png";
import ps from "../../src/assets/image/ps.png";
import AI from "../../src/assets/image/AI.png";
import about from "../../src/assets/image/about.png";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash.startsWith("#cat=")) {
      const cat = decodeURIComponent(hash.replace("#cat=", ""));
      if (cat) setSelectedCategory(cat);
    }
  }, []);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    blogData.forEach((b) => b.category && set.add(b.category));
    return Array.from(set);
  }, []);

  const categoryMap = useMemo(() => ({
    Technology: ["Tech", "AI", "Apps", "Gadgets", "Security"],
    Travel: ["Travel"],
    sport: ["Sport", "Sports"],
    Business: ["Business", "Fintech", "Work", "Enterprise"],
    Management: ["Growth", "Work", "Management"],
    Trends: ["Trends", "Tech"],
    Startups: ["Startups"],
    News: ["News", "AI", "Tech"],
  }), []);

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return blogs;
    const allowed = new Set([
      selectedCategory,
      ...(categoryMap[selectedCategory] || []),
    ]);
    return blogs.filter((b) => allowed.has(b.category));
  }, [blogs, selectedCategory, categoryMap]);

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div id="categories" className="mb-6 flex flex-wrap items-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent border-[#83838380] hover:bg-gray-50/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Blog List */}
        <div id="blogs" className="w-full lg:w-8/12 p-4 rounded-lg">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row items-center mb-10 gap-6"
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                <Link href={`/blog/${blog.id}`}>
                  <Image
                    src={`https://picsum.photos/seed/${blog.id}/800/450`}
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

                <button
                  type="button"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                  className="px-6 py-2 rounded-lg bg-transparent border border-[#83838380] hover:bg-gray-50/15 font-medium transition duration-300 ease-in-out shadow-sm hover:shadow-md"
                >
                  {blog.buttonText || "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-4/12 sticky top-[80px] left-0 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
          {/* box1 */}
          <div className="bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4">
            <span className="uppercase text-[14px]">About</span>
            <div className="flex items-center my-3 gap-1">
              <Image src={about} className="w-16 rounded-full p-1" alt="" />
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
            <h5 className="font-bold my-3">
              <i className="bi bi-geo-alt-fill"></i> Paris, France
            </h5>
            <div className="social-icons flex gap-4">
              <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pointer transition text-xl"></i>
              <i className="bi bi-facebook hover:text-yellow-400 cursor-pointer transition text-xl"></i>
              <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>
            </div>
          </div>

          {/* Featured Posts */}
          <h2 id="latest" className="uppercase my-5 font-bold">Featured Posts</h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true} // ✅ fixed typo (was 'lopp')
            autoplay={{ delay: 1500, disableOnInteraction: false }} // ✅ lowercase 'autoplay'
            modules={[Navigation, Autoplay]}
            className="rounded-md"
          >
            <SwiperSlide>
              <div className="mini-slide p-5 flex flex-col justify-between">
                <div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    Business
                  </span>
                </div>
                <div>
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Master Wick</span> on
                    October 20, 2025
                  </p>
                  <h1 className="text-white font-bold text-2xl my-1">
                    How Tech Shapes the Future of Work in 2025
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mini-slide mini-slide2 p-5 flex flex-col justify-between">
                <div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    Sport
                  </span>
                </div>
                <div>
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Master Wick</span> on
                    September 20, 2025
                  </p>
                  <h1 className="text-white font-bold text-2xl my-1">
                    The Future of Work: Tech and Remote Trends
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mini-slide mini-slide3 p-5 flex flex-col justify-between">
                <div>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    Trends
                  </span>
                </div>
                <div>
                  <p className="text-[#cdcdcd]">
                    <span className="text-white font-bold">Master Wick</span> on
                    September 27, 2025
                  </p>
                  <h1 className="text-white font-bold text-2xl my-1">
                    Remote Work Trends in the Digital Age
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* box2 */}
          <div id="history" className="bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4 mt-10">
            <span className="uppercase text-[14px]">Work Experience</span>
            <div className="flex flex-col my-3 border-[#83838380] pb-4">
              <div className="flex justify-between w-full">
                <h2> Product Designer</h2>
                <h5>2024 - now</h5>
              </div>
              <p className="text-gray-400">Pioneer</p>
            </div>

            <div className="flex flex-col my-3 border-[#83838380] pb-4">
              <div className="flex justify-between w-full">
                <h2> Product Designer</h2>
                <h5>2024 - 2025</h5>
              </div>
              <p className="text-gray-400">Pioneer</p>
            </div>

            <div className="flex flex-col my-3 ">
              <div className="flex justify-between w-full">
                <h2> Product Designer</h2>
                <h5>2024 - 2025</h5>
              </div>
              <p className="text-gray-400">Pioneer</p>
            </div>
          </div>
          {/* box3 */}

          <div id="tags" className="bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4 mt-10">
            <span className="uppercase text-[14px]">Technologies</span>
            <div className="flex items-center gap-3 my-6">
              <Image src={figma} alt="" className="w-12 rounded-lg" />
              <div className="">
                <h2 className="font-bold text-xl"> Figma</h2>
                <p className="font-[300]">
                  Collaborate and design interfaces real-time.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 my-6">
              <Image src={notion} alt="" className="w-12 rounded-lg" />
              <div className="">
                <h2 className="font-bold text-xl"> Notion</h2>
                <p className="font-[300]">
                  Organize, track, and collaborate on projects easily
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 my-6">
              <Image src={AI} alt="" className="w-12 rounded-lg" />
              <div className="">
                <h2 className="font-bold text-xl"> Illustrator</h2>
                <p className="font-[300]">
                  Create precise vector graphics and illustrations.
                </p>
              </div>
            </div>
          </div>
          {/* box-4 */}
          <div className="bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4 mt-10">
            <span className="uppercase text-[14px]">Creation</span>
            <div className="my-5">
              <h2 className="pb-2 font-bold text-xl hover:text-yellow-400 cursor-pointer transition">
                Heartfelt Reflections
                <i className="bi bi-box-arrow-in-up-ring"></i>
              </h2>
              <p>
                A deep dive into emotional experiences and personal growth,
                sharing valuable insights on life&apos;s most meaningful moments.
              </p>
            </div>

            <div className="my-5">
              <h2 className="pb-2 font-bold text-xl hover:text-yellow-400 cursor-pointer transition">
                Latest Tech Gadgets
                <i className="bi bi-box-arrow-in-up-ring"></i>
              </h2>
              <p>
                Explore the newest and most innovative technology products
                hitting the market, from smart devices to cutting-edge tools.
              </p>
            </div>

            <div className="my-5">
              <h2 className="pb-2 font-bold text-xl hover:text-yellow-400 cursor-pointer transition">
                Trends for 2025
                <i className="bi bi-box-arrow-in-up-ring"></i>
              </h2>
              <p>
                A look ahead at the emerging trends that will shape the world in
                2024, from lifestyle shifts to groundbreaking innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
