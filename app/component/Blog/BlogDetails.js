"use client";
import React from "react";
import blogData from "../../src/Blogs.json";
import { useParams } from "next/navigation";
import techImg from "../../src/assets/image/hero-slide-3.png";

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

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog)
    return <div className="p-10 text-center text-gray-400">Blog not found</div>;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-[12%] py-10 mt-12 text-center">
        <div className="mx-auto">
          <p className="text-sm mb-1 mt-5">
            Home <span className="mx-1">&gt;</span>
            <span className="font-semibold text-white">{blog.title}</span>
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-5"
            style={{ fontFamily: "var(--Bricolage-font)" }}
          >
            {blog.title}
          </h1>
          <p className="max-w-2xl mb-6 text-center mx-auto">{blog.excerpt}</p>

          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg relative">
            <div className="flex justify-between items-center w-full px-6 absolute top-10 left-0">
              <div className="flex items-center gap-2 flex-wrap">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-black text-white text-md font-medium px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white text-lg bg-black px-5 py-2 rounded-full">
                {blog.author} &nbsp; {blog.date}
              </p>
            </div>

            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={700}
              className="w-full h-[65vh] object-cover rounded-xl blog-details-img"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] font-[var(--Poppins-font)]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-8/12">
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              In today&apos;s ever-evolving world, storytelling has become a
              powerful tool for connection. Revision provides a unique platform
              for individuals to share their stories.
            </p>

            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed text-[17px]">
              Revision is more than a typical content hub. It&apos;s a dynamic
              space for meaningful conversations and personal stories that
              resonate with people on an emotional level. Whether you are
              looking for inspiration, comfort, or just a different perspective
              on life, Revision offers a wide range of narratives to explore.
            </p>

            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed text-[17px]">
              So, what makes Revision stand out as the place for heartfelt
              reflections?
            </p>

            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed text-[17px]">
              With categories covering everything from love and relationships to
              personal development and lifestyle, it encourages readers to
              explore topics that touch on their emotions and experiences.
            </p>

            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--Bricolage-font)" }}
            >
              Stories that Matter
            </h2>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              At the core of Revision is a commitment to delivering stories that
              matter. Unlike traditional media platforms or news, Revision
              invites readers into a world of deeply personal narratives. The
              website&apos;s title, &quot;Heartfelt Reflections: Stories of
              Love, Loss, and Growth,&quot; signals this intent clearly,
              inviting you to journey through the most intimate aspects of human
              experience.
            </p>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              But we&apos;re not just talking about written content — there are
              many ways that Revision fosters connection and creativity. The
              different types of features include:
            </p>

            <ul className="list-disc pl-5 mb-6 text-[var(--text-light)] space-y-2">
              <li className="text-black dark:text-[var(--text-light)]">
                Author Profiles: Each contributor has a detailed profile,
                allowing readers to connect with their personal journey and
                social media presence.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Experience Widgets: Contributors showcase their professional
                growth and skills, giving readers insight into their expertise.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Technologies Section: Creators highlight the tools they use,
                such as Figma, Photoshop, and more, providing transparency in
                their creative processes.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Creating Widget: A space where contributors can link to external
                projects and portfolios, expanding their reach beyond the
                platform.
              </li>
            </ul>

            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src={techImg}
                alt="desk tech"
                className="rounded-xl w-full"
              />
              <p className="text-sm mt-2 text-black dark:text-[var(--text-light)]">
                How to raise customer loyalty.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              How to create meaningful connections
            </h2>

            <p className="text-black dark:text-[var(--text-light)] mb-6">
              There are several ways to ensure your content builds these
              connections effectively. Here&apos;s what they are:
            </p>

            <h3 className="text-sl font-semibold mb-2">
              1. Understand your audience
            </h3>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              The first step to creating meaningful connections is understanding
              who your audience is. This involves researching their
              demographics, interests, preferences, and needs. Are they young
              professionals looking for lifestyle tips? Or perhaps seasoned
              entrepreneurs seeking business insights? Once you have a clear
              picture of who your readers are, you can start shaping content
              that resonates with their unique preferences.
            </p>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              For instance, knowing that your audience values emotional,
              personal stories can guide your content to be more reflective and
              heartfelt, making it easier for them to relate to the subject
              matter. Furthermore, understanding your audience allows you to
              tailor your tone and style to better connect with them.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              2. Provide diverse perspectives
            </h3>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              Before you create content that truly connects, everyone involved
              in the creation process needs to understand the importance of
              incorporating diverse perspectives. This includes things like:
            </p>

            <ul className="list-disc pl-5 mb-6 text-[var(--text-light)] space-y-2">
              <li className="text-black dark:text-[var(--text-light)]">
                Featuring contributors from different backgrounds
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Showcasing a variety of life experiences
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Including global viewpoints
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Highlighting diverse professional expertise
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
