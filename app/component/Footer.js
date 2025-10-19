"use client";
import React from "react";
import Link from "next/link"; // ✅ Import from next/link

const Footer = () => {
  return (
    <>
      <div>
        <div className="newsletter py-20 flex items-center justify-center flex-col">
          <h2 className="text-5xl mb-3 font-bricolage">
            Subscribe to our Newsletter
          </h2>
          <p className="text-center mb-6">
            Subscribe to our email newsletter to get the latest posts delivered{" "}
            <b>right to your email.</b>
          </p>
          <form onSubmit={(e)=>{e.preventDefault();}} className="w-[80%] md:w-[45%] flex items-center bg-[#1e1e1e] rounded-xl p-2 shadow-inner">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 outline-none"
            />
            <button
              type="submit"
              className="font-semibold text-white bg-gray-50/10 hover:bg-gray-50/20 transition rounded py-3 px-4"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer pt-[50px] border-[#83838380]">
          <div className="px-[8%] lg:px-[12%] py-10">
            <div className="flex flex-wrap pb-7">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-800 p-2 px-3 rounded-lg">
                    <i className="bi bi-substack text-white text-2xl"></i>
                  </div>
                  {/* ✅ Fixed Link syntax */}
                  <Link href="/">
                    <h1 className="text-3xl font-bricolage tracking-widest font-bold text-white dark:text-white">
                      Blog<span className="text-[#f4e005]">APP</span>
                    </h1>
                  </Link>
                </div>

                <p className="mt-4 mb-5">
                  Welcome to the ultimate source for fresh perspectives! <br/>
                  Explore
                  curated content to enlighten, entertain, and engage global<br/>
                  readers.
                </p>

                <div className="social-icons flex gap-4 md:mb-10">
                  <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                  <i className="bi bi-instagram hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                  <i className="bi bi-facebook hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                  <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                </div>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-3 mt-5 lg:mt-0 lg:grid-cols-3 gap-6">
              <div>
                 <h4 className="text-lg font-bold uppercase mb-3" > Recent Posts</h4>
                 <ul className="space-y-2">
                    <li > <a href="#" className="hover:text-yell transition"> Blog Setup</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Contact Plan</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Writing Tips</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Featured Posts</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Blog Design</a></li>
                 </ul>
                 </div>
              <div>
                 <h4 className="text-lg font-bold uppercase mb-3" > Categories</h4>
                 <ul className="space-y-2">
                    <li > <a href="#" className="hover:text-yell transition"> Blog Setup</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Travel</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Sport</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Business</a></li>
                 </ul>
                 </div>
              <div>
                 <h4 className="text-lg font-bold uppercase mb-3" > Quick Links</h4>
                 <ul className="space-y-2">
                    <li > <a href="#" className="hover:text-yell transition"> About</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Blogs</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> Details</a></li>
                    <li > <a href="#" className="hover:text-yell transition"> History</a></li>
                 </ul>
                 </div>
              </div>
            </div>
            <p className="text-center border-[#83838380] p-5"> Copyright 2025.All Rights Reserved by<a href="#" className="text-yellow-400 font-bold">Shivam</a>  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
