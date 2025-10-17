"use client";

import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./component/Nav";
import Index from "./component/Index";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition pt-24">
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Index />
    </div>
  );
}
