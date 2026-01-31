import React from 'react'
import './App.css'
import Shop from './components/shop/shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './components/single-product/single-product'
import Blog from './components/blog/blog'
import Layout from './components/Layout'
import Home from './components/home/home'
import { Toaster } from "react-hot-toast";
import Cart from './components/cart/cart'
import MyAccount from './components/my-account/my-account.jsx';
import ContactPage from './components/contact/contact.jsx';
import Checkout from './components/checkout/checkout.jsx'
import ScrollToTop from './ScrollToTop.jsx'


function App() {
  

  return (
    <>
    <Toaster position="top-center" />
    
      <ScrollToTop />
      
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="my-account" element={<MyAccount />} /> 
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<h3 className='p-7 mt-18 text-center text-3xl'>Error 404 <br/>Page not found</h3>} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App;
