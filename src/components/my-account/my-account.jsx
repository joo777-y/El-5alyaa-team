import React, { useState } from "react";
import HeroBackground from '../../../images/p1.jpg';
import LogoIcon from '../../../images/ecoo-removebg-preview.png';

const HeroSection = () => (
  <div className="w-full pt-20">
    <div className="relative h-72 flex items-center justify-center overflow-hidden bg-gray-100">
      <img
        src={HeroBackground}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-110 blur-sm opacity-80"
      />
      <div className="relative z-10 text-center px-4">
        <div className="mb-2">
          <img src={LogoIcon} alt="Logo" className="w-12 h-auto mx-auto" />
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mb-2">My Account</h1>
        <p className="text-gray-700 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a> &gt; My account
        </p>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="bg-pink-50 py-20 px-4 md:px-16 flex flex-col md:flex-row justify-center items-center md:justify-between gap-10">
    <div className="text-center max-w-xs">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Free Delivery</h3>
      <p className="text-gray-500 text-sm">For all orders over $50, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center max-w-xs">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">90 Days Return</h3>
      <p className="text-gray-500 text-sm">If goods have problems, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center max-w-xs">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Secure Payment</h3>
      <p className="text-gray-500 text-sm">100% secure payment, consectetur adipiscing elit.</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-white py-20 px-4 md:px-16 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 border-b border-gray-200 pb-8">
      <div className="flex flex-col">
        <p>400 University Drive Suite 200 Coral</p>
        <p>Gables,</p>
        <p>FL 33134 USA</p>
      </div>
      <div className="flex flex-col">
        <h4 className="font-medium mb-3 text-gray-500">Links</h4>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Home</a>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Shop</a>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">About</a>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Contact</a>
      </div>
      <div className="flex flex-col">
        <h4 className="font-medium mb-3 text-gray-500">Help</h4>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Payment Options</a>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Returns</a>
        <a href="#" className="text-gray-500 text-sm mb-2 hover:underline">Privacy Policies</a>
      </div>
      <div className="flex flex-col">
        <h4 className="font-medium mb-3 text-gray-500">Newsletter</h4>
        <div className="flex gap-2">
          <input type="email" placeholder="Enter Your Email Address" className="border-b border-gray-800 p-2 flex-1 focus:outline-none" />
          <button className="bg-white border-b border-gray-800 p-2 font-medium text-gray-800 uppercase hover:bg-gray-800 hover:text-white transition">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">© 2022 Meubel House. All rights reserved</div>
  </footer>
);

export default function MyAccount() {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: "",
    remember: false
  });
  const [registerEmail, setRegisterEmail] = useState("");

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full">
      <HeroSection />

      <main className="py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Log In Section */}
          <div className="bg-white p-6 shadow rounded-md w-full">
            <h2 className="text-2xl font-medium mb-6">Log In</h2>
            <form className="flex flex-col gap-4">
              <label className="text-gray-800 text-sm font-medium">Username or email address</label>
              <input
                type="text"
                name="usernameOrEmail"
                value={loginData.usernameOrEmail}
                onChange={handleLoginChange}
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <label className="text-gray-800 text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <div className="flex items-center justify-start gap-4 mt-4">
                <label className="flex items-center gap-2 text-gray-500 text-sm">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleLoginChange}
                    className="w-4 h-4 border-gray-300"
                  />
                  Remember me
                </label>
                <button className="px-6 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
                  Log In
                </button>
              </div>
              <a href="#" className="text-gray-500 text-sm mt-2 inline-block hover:underline">Lost Your Password?</a>
            </form>
          </div>

          {/* Register Section */}
          <div className="bg-white p-6 shadow rounded-md w-full">
            <h2 className="text-2xl font-medium mb-6">Register</h2>
            <form className="flex flex-col gap-4">
              <label className="text-gray-800 text-sm font-medium">Email address</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <p className="text-gray-500 text-sm mt-2">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="underline font-bold">privacy policy</a>.
              </p>
              <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:opacity-90 transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>

      <FeaturesSection />
      <Footer />
    </div>
  );
}