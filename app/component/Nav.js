"use client"; 

import Link from "next/link";
import { useState } from "react";

const Nav = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="w-full text-white px-[8%] lg:px-[12%] py-5 flex items-center justify-between bg-white dark:bg-black transition fixed top-0 left-0 z-[9999]">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-gray-800 p-2 px-3 rounded-lg">
              <i className="bi bi-substack text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bricolage tracking-widest font-bold text-white dark:text-white">
              Blog<span className="text-[#f4e005]">APP</span>
            </h1>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium text-black dark:text-white">
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#top">
              <i className="bi bi-house-door-fill mr-1" />
              Home
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#categories">
              <i className="bi bi-list-ul mr-1"></i>
              Categories
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#latest">
              <i className="bi bi-clock-history mr-1"></i>
              Latest Posts
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#tags">
              <i className="bi bi-tags-fill mr-1"></i>
              Tags
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#history">
              <i className="bi bi-archive mr-1"></i>
              History
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <i
            className="bi bi-search text-lg cursor-pointer text-black dark:text-white"
            onClick={() => setShowSearchModal(true)}
          ></i>
          <div
            onClick={toggleTheme}
            className="bg-gray-800 flex items-center p-1 rounded-full cursor-pointer"
          >
            {!isDark ? (
              <i className="bi bi-sun text-yellow-400 text-sm mx-1"></i>
            ) : (
              <i className="bi bi-sun text-white text-sm mx-1"></i>
            )}
          </div>
          <button
            onClick={() => setShowAuthModal(true)}
            className="bg-white nav-btn text-black dark:bg-black dark:text-white font-semibold px-5 py-2 rounded border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white
        dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md "
          >
            Register/Login
          </button>

          <button
            className="text-black dark:text-white text-2xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <ul className="lg:hidden w-full bg-white dark:bg-black text-black dark:text-white px-[8%] pt-[100px] space-y-4 transition-all duration-300 ">
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#top" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="bi bi-house-door-fill mr-1" />
              Home
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#categories" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="bi bi-list-ul mr-1"></i>
              Categories
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#latest" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="bi bi-clock-history mr-1"></i>
              Latest Posts
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#tags" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="bi bi-tags-fill mr-1"></i>
              Tags
            </a>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <a href="#history" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="bi bi-archive mr-1"></i>
              History
            </a>
          </li>
        </ul>
      )}
      {showSearchModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60" onClick={() => setShowSearchModal(false)}>
          <div className="bg-white dark:bg-[#111] rounded-xl p-6 w-[90%] max-w-md" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <i className="bi bi-search text-xl text-black dark:text-white"></i>
              <input
                autoFocus
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-black dark:text-white placeholder-gray-400"
              />
              <button className="px-3 py-1 rounded border border-gray-400 hover:bg-gray-100 dark:hover:bg-[#222]" onClick={()=>setShowSearchModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      {showAuthModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60" onClick={() => setShowAuthModal(false)}>
          <div className="bg-white dark:bg-[#111] rounded-xl p-6 w-[90%] max-w-md" onClick={(e)=>e.stopPropagation()}>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Register / Login</h3>
            <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); setShowAuthModal(false);}}>
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded border bg-transparent text-black dark:text-white placeholder-gray-400" />
              <input type="password" placeholder="Password" className="w-full px-3 py-2 rounded border bg-transparent text-black dark:text-white placeholder-gray-400" />
              <div className="flex items-center justify-end gap-2 mt-2">
                <button type="button" onClick={()=>setShowAuthModal(false)} className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-[#222]">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Continue</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
