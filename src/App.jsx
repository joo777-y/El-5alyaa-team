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
import ContactPage from './components/contact/contact.jsx'

function App() {
  

  return (
    <>
    <Toaster position="top-center" />
      
      
       <Routes>
    <Route path="/" element={<Layout />}>
      {/* أول ما الموقع يفتح → يروح Home */}
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      {/* أي مسار غير معروف → يمكن ترجع للصفحة الرئيسية */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route path="my-account" element={<MyAccount />} /> 
    </Route>
  </Routes>
      
    </>
  )
}

export default App
