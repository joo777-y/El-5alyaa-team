import React from "react";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../images/iphone 16.webp";
import cardImg1 from "../../../images/iphone 14-2.jpg";
import cardImg2 from "../../../images/iphone 14.webp";
import barImg from "../../../images/airpods-4-blue.jpg";
import consoleImg from "../../../images/samsung.webp";
import tableChair from "../../../images/nokia.jpeg";
import img1 from "../../../images/post1img.jpg";
import img2 from "../../../images/post2img.jpg";
import img3 from "../../../images/post3img.jpg";


// ---------------- PRODUCT CARD ----------------
const ProductCard = ({ img, title }) => (
  <div className="rounded-xl p-5 w-full max-w-sm text-left bg-white shadow-md hover:shadow-lg transition">
    <img src={img} alt={title} className="w-full rounded-lg mb-3" />
    <h3 className="text-2xl font-bold">{title}</h3>
    <Link
      to="/shop"
      className="inline-block mt-3 text-black border-b-2 border-black pb-1 hover:opacity-70"
    >
      View More
    </Link>
  </div>
);


// ---------------- TOP PICKS ----------------
const TopPicks = () => (
  <section className="py-20 text-center">
    <h2 className="text-4xl font-bold mb-3">Top Picks For You</h2>
    <p className="text-gray-600 mb-10">
      Find your perfect piece — stylish, modern and made for your comfort.
    </p>

    <div className="flex flex-wrap justify-center gap-10">
      {/* Card 1 */}
      <div className="w-72 bg-white p-5 rounded-2xl shadow hover:-translate-y-2 transition">
        <img src={cardImg1} className="rounded-xl" />
        <p className="text-xl mt-3">Iphone 14 with a blue back, <br/> the best for you</p>
        <p className="font-bold text-xl">55,000 EGP</p>
      </div>

      {/* Card 2 */}
      <div className="w-72 bg-white p-5 rounded-2xl shadow hover:-translate-y-2 transition">
        <img src={tableChair} className="rounded-xl" />
        <p className="text-xl mt-3">Nokia 3310, the future is here</p>
        <p className="font-bold text-xl">25,000 EGP</p>
      </div>

      {/* Card 3 */}
      <div className="w-72 bg-white p-5 rounded-2xl shadow hover:-translate-y-2 transition">
        <img src={barImg} className="rounded-xl" />
        <p className="text-xl mt-3">Airbods A60,<br/> listen smoothly </p>
        <p className="font-bold text-xl">2,000 EGP</p>
      </div>

      {/* Card 4 */}
      <div className="w-72 bg-white p-5 rounded-2xl shadow hover:-translate-y-2 transition">
        <img src={consoleImg} className="rounded-xl" />
        <p className="text-xl mt-3">Samsung A59, comfortable device for you</p>
        <p className="font-bold text-xl">30,000 EGP</p>
      </div>
    </div>

    <Link
      to="/shop"
      className="inline-block mt-10 text-lg border-b-2 border-black pb-1 hover:text-gray-500"
    >
      View More
    </Link>
  </section>
);


// ---------------- HERO SECTION () ----------------
const HeroSection = () => (
  <section className="bg-[#FDE9A8] py-20 px-5 flex flex-col md:flex-row items-center justify-between gap-10 h-dvh">
    {/* Text */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Elegant Vintage Design
      </h1>

      <Link
        to="/shop"
        className="inline-block text-lg border-b-2 border-black pb-1 hover:text-gray-600"
      >
        Shop Now
      </Link>
    </div>

    {/* Image */}
    <img
      src={heroImg}
      alt="Hero"
      className="w-72 md:w-[420px] drop-shadow-xl rounded-xl"
    />
  </section>
);


// ---------------- BLOG SECTION ----------------
const BlogSection = () => {
  const blogs = [
    { id: 1, img: img1, title: "Going all-in with millennial design", time: "5 min", date: "12th Oct 2022" },
    { id: 2, img: img2, title: "Modern interior tips for your home", time: "6 min", date: "15th Oct 2022" },
    { id: 3, img: img3, title: "How to choose furniture wisely", time: "7 min", date: "18th Oct 2022" },
  ];
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-4xl font-bold mb-2">Our Blogs</h2>
      <p className="text-gray-600 mb-10">
        Find a bright idea to suit your taste with our great selection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-xl shadow-md hover:shadow-lg p-3 transition">
            <img src={blog.img} className="rounded-xl h-64 w-full object-cover" />
            <h3 className="text-xl mt-4 font-semibold">{blog.title}</h3>

            <Link
              to="/blog"
              className="inline-block mt-3 text-black border-b-2 border-black pb-1 hover:text-gray-500"
            >
              Read More
            </Link>

            <div className="flex justify-center gap-7 mt-4 text-gray-500">
              <span>⏱ {blog.time}</span>
              <span>📅 {blog.date}</span>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/blog"
        className="inline-block mt-10 text-lg border-b-2 border-black pb-1 hover:text-gray-600"
      >
        View All Post
      </Link>
    </section>
  );
};


// ---------------- HOME PAGE ----------------
const Home = () => (
  <div className="w-full">

    {/* FIRST HERO (زي الصورة اللي فوق) */}
    <HeroSection />

    {/* Product Cards */}
    <div className="bg-[#fbf3f3] py-20 px-5 flex flex-wrap justify-center gap-10">
      <ProductCard img={cardImg1} title="Iphone 14 pro"/>
      <ProductCard img={cardImg2} title="Iphone 14 pro max" />
    </div>

    {/* Top Picks */}
    <TopPicks />

    {/* Blogs */}
    <BlogSection />
  </div>
);

export default Home;
