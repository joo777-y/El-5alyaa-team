import React from "react";
import post1img from "../../../images/post1img.jpg";
import post2img from "../../../images/post2img.jpg";
import post3img from "../../../images/post3img.jpg";
import p1 from "../../../images/p1.jpg";
import p2 from "../../../images/p2.jpg";
import p3 from "../../../images/p3.jpg";
import post4 from "../../../images/post4.jpg";
import post5 from "../../../images/post5.jpg";
import "./blog.css"
import img12 from '../../../images/ecoo-removebg-preview.png'


export default function Blog() {
  const posts = [
    {
      title: "Going all-in with millennial design",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc...`,
      img: post1img,
      button: "Read more",
    },
    {
      title: "Exploring new ways of decorating",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua...`,
      img: post3img,
      button: "Read more",
    },
    {
      title: "Handmade pieces that took time to make",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua...`,
      img: post2img,
      button: "Read more",
    },
  ];

  const recent = [
    { img: post5, text: "Going all-in with millennial design" },
    { img: post4, text: "Exploring new ways of decorating" },
    { img: p3, text: "Handmade pieces that took time to make" },
    { img: p2, text: "Modern home in Milan" },
    { img: p1, text: "Colorful office redesign" },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <div className="w-full bg-white ">
      <div className='ecommerce-img'>
                <div className="ecommerce-overlay">
                   <img src={img12} alt="ecoo" />
                   <p className='p1'>Blog</p>
                   <p><span>Home &gt;</span>  Blog </p>
                </div>      
      </div>
      <main className="max-w-[1200px] mx-auto px-4 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE - POSTS */}
          <div className="lg:col-span-2 space-y-16">
            {posts.map((p, index) => (
              <div key={index}>
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-[450px] object-cover rounded-lg"
                />

                <div className="flex items-center gap-6 text-gray-400 text-sm mt-4">
                  <span>Admin</span>
                  <span>14 Oct 2022</span>
                  <span>Wood</span>
                </div>

                <h2 className="text-2xl font-semibold mt-4">{p.title}</h2>

                <p className="text-gray-500 mt-3 leading-relaxed text-justify">
                  {p.text}
                </p>

                <button className="mt-4 text-lg underline underline-offset-8 font-medium">
                  {p.button}
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <div className="space-y-10">

            {/* SEARCH BOX */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-14 border border-gray-400 rounded-md px-4"
              />
              <i className="bi bi-search absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400"></i>
            </div>

            {/* CATEGORIES */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((c, idx) => (
                  <li key={idx} className="flex justify-between text-gray-500 text-lg">
                    <span>{c.name}</span>
                    <span>{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RECENT POSTS */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-5">
                {recent.map((r, idx) => (
                  <li key={idx} className="flex gap-4">
                    <img
                      src={r.img}
                      className="w-[80px] h-[80px] object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium leading-snug">
                        {r.text}
                      </span>
                      <span className="text-xs text-gray-400">03 Aug 2022</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </main>
      {/* PAGINATION */}
<div className="flex justify-center mt-14 blog-pagination gap-3">
  <button className="active">1</button>
  <button>2</button>
  <button>3</button>
  <button>Next</button>
</div>

    </div>
  );
}