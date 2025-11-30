import React from "react";
import { useCart } from "../cartContext";
import { FiTrash2 } from "react-icons/fi";
import img12 from '../../../images/ecoo-removebg-preview.png'

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full min-h-screen pt-28 px-4 md:px-10">

      {/* HEADER IMAGE SECTION */}
      <div className='ecommerce-img'>
        <div className="ecommerce-overlay">
          <img src={img12} alt="ecoo" />
          <p className='p1'>Cart</p>
          <p><span>Home &gt;</span> Cart</p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT — CART TABLE */}
        <div className="lg:col-span-2">

          {/* ===== EMPTY CART MESSAGE ===== */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                className="w-24 opacity-70 mb-4"
                alt="empty-cart"
              />

              <h2 className="text-2xl font-semibold text-gray-700">
                Your cart is empty
              </h2>

              <p className="text-gray-500 mt-2">
                Looks like you haven’t added any products yet.
              </p>

              <a
                href="/shop"
                className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Start Shopping
              </a>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-yellow-100 text-left">
                      <th className="p-4">Product</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4 flex gap-3 items-center">
                          <img
                            src={item.image}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <p className="font-medium">{item.name}</p>
                        </td>
                        <td className="p-4 text-gray-700">{item.price} EGP</td>
                        <td className="p-4">
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="w-16 text-center border rounded-md py-1"
                          />
                        </td>
                        <td className="p-4 font-semibold text-black">
                          {item.price * item.quantity} EGP
                        </td>
                        <td>
                          <button onClick={() => removeFromCart(item.id, item.color)}>
                            <FiTrash2 className="text-red-500 text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List */}
              <div className="md:hidden flex flex-col gap-4">
                {cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 border rounded-xl shadow-sm"
                  >
                    <img
                      src={item.image}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-600 text-sm">Price: {item.price} EGP</p>
                      <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      <p className="font-bold text-black">
                        {item.price * item.quantity} EGP
                      </p>
                    </div>

                    <button onClick={() => removeFromCart(item.id, item.color)}>
                      <FiTrash2 className="text-red-500 text-xl cursor-pointer" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT — CART TOTALS */}
        {cartItems.length > 0 && (
          <div className="bg-yellow-50 rounded-xl p-6 shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">Cart Totals</h2>

            <div className="flex justify-between py-2 text-gray-700">
              <span>Subtotal</span>
              <span>{subtotal} EGP</span>
            </div>

            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>{subtotal} EGP</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-900 transition cursor-pointer">
              Check Out
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
