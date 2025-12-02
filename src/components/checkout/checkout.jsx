import React, { useState } from "react";
import { useCart } from "../cartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function Checkout() {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    // Form State
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Place Order Logic
    const placeOrder = () => {
        if (!form.firstName || !form.lastName || !form.phone || !form.address) {
            toast.error("Please fill all required fields first!");
            return;
        }

        if (cartItems.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }

        // Create order object
        const order = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            customer: form,
            items: cartItems,
            total: totalPrice,
        };

        // Save order in localStorage
        localStorage.setItem("lastOrder", JSON.stringify(order));

        // Clear cartItems
        clearCart();

        toast.success("Order placed successfully!");
        navigate("/order-success");
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {/* LEFT SIDE - FORM */}
            <div className="md:col-span-2 bg-white shadow-md p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                        name="firstName"
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border p-3 rounded w-full"
                    />
                    <input
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border p-3 rounded w-full"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    <input
                        name="phone"
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="border p-3 rounded w-full"
                    />
                    <input
                        name="email"
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="border p-3 rounded w-full"
                    />
                </div>

                <textarea
                    name="address"
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="border p-3 rounded w-full mt-5 h-28 resize-none"
                ></textarea>

                <button
                    onClick={placeOrder}
                    className="w-full mt-6 bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition"
                >
                    Place Order
                </button>
            </div>

            {/* RIGHT SIDE - CART SUMMARY */}
            <div className="bg-white shadow-md p-6 rounded-xl h-fit">
                <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

                <div className="flex flex-col gap-4 mb-4">
                    {cartItems.length === 0 && (
                        <p className="text-gray-500">Your cart is empty</p>
                    )}

                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-3"
                        >
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    Color: {item.color} — Qty: {item.quantity}
                                </p>
                            </div>

                            <p className="font-semibold">{item.price * item.quantity} EGP</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-lg font-semibold border-t pt-4">
                    <span>Total:</span>
                    <span>{totalPrice} EGP</span>
                </div>
            </div>
        </div>
    );
}