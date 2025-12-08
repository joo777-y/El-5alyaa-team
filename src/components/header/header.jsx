import React, { useState } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../cartContext";
import { Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const {removeFromCart, totalPrice } = useCart();

    
  const { cartItems } = useCart();
    return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-180 bg-amber-100">
        <div className="flex items-center justify-between px-6 py-4">

          <div className="hidden lg:block w-10"></div>

          <nav className="hidden lg:flex gap-10 text-gray-800 text-lg font-medium">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blogs</Link>
          </nav>

          <div className="flex items-center gap-6 text-2xl">
           <Link to="my-account"><FiUser /></Link>

            {/* Cart Icon */}
            <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
              <FiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* CART SIDEBAR */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 z-150" onClick={() => setCartOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <FiX className="text-xl cursor-pointer" onClick={() => setCartOpen(false)} />
            </div>

            {/* ITEMS */}
            {cartItems.length === 0 ? (
  <p className="text-gray-500 text-center py-6">Cart is empty</p>
) : (
  <>
    {cartItems.map((item, i) => (
      <div key={i} className="flex items-center gap-4 border-b py-4 relative">

        {/* Product Image */}
        <img
          src={item.image}
          className="w-16 h-16 rounded-md object-cover"
        />

        {/* Product Info */}
        <div className="flex-1">
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600">Color: {item.color}</p>
          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          <p className="font-bold">{item.price * item.quantity} EGP</p>
        </div>

        {/* REMOVE BUTTON */}
        <button
          onClick={() => removeFromCart(item.id, item.color)}
          className="text-red-500 hover:text-red-700 text-sm absolute right-2 bottom-4 cursor-pointer"
        >
          ✕
        </button>
      </div>
    ))}

    {/* TOTAL PRICE */}
    <div className="flex justify-between mt-4 p-4 text-lg font-semibold border-t">
      <span>Total:</span>
      <span>{totalPrice} EGP</span>
    </div>
  </>
)}


            {/* FOOTER */}
            <div className="mt-6 border-t pt-4">
              <Link
                to="/cart"
                className="block w-full text-center py-2 border rounded-md hover:bg-gray-100"
              >
                View Cart
              </Link>

              <Link
                to="/checkout"
                className="block w-full mt-3 text-center py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}