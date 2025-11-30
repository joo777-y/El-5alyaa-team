import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './single-product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../cartContext";


export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [counter, setCounter]= useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);

  // GET PRODUCT
  useEffect(() => {
    axios
      .get(`https://ecommerce-be-sand.vercel.app/products/${id}`)
      .then(res => {
        setProduct(res.data.product);
        setMainImage(res.data.product.mainImage?.path); // fix reset main image
      })
      .catch(err => console.log(err));
  }, [id]);

  // GET RELATED PRODUCTS
  useEffect(() => {
    if (!product) return;

    axios
      .get(`https://ecommerce-be-sand.vercel.app/products?category=${product.categoryId.slug}`)
      .then(res => {
        const filtered = res.data.products.filter(p => p.id !== product.id);
        setRelatedProducts(filtered.slice(0, 8));
      })
      .catch(err => console.log(err));
  }, [product]);

  const { addToCart } = useCart();

  const handleAdd = () => {
    if (!selectedColor) {
      alert("Please choose a color first!");
      return;
    }

    addToCart(product, selectedColor, counter);
    // alert("Added to cart!");
    //  toast.success("Added to cart!");
  };

  if (!product) return <p className="text-center p-10 text-lg">Loading...</p>;

  const colorList = Array.isArray(product.colors)
    ? product.colors
    : product?.colors?.split(",").map(c => c.trim());

  const swapImage = (imgPath) => {
    setMainImage(imgPath);
  };

  

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto details-container">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Images */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.subImages?.slice(0, 5).map((img, index) => (
              <img
                key={index}
                src={img.path}
                alt="sub"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:scale-105 transition"
                onClick={() => swapImage(img.path)}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              className="rounded-xl shadow-md w-full max-h-[450px] object-cover"
              src={mainImage}
              alt={product.name}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>

          <p className="text-xl font-semibold text-amber-600">
            {product.price}
            <span className="text-gray-400 text-sm ml-1">EGP</span>
          </p>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-amber-400" />
            <span className="text-gray-500">{product.AvgRate}</span>
            <span className="text-3xl text-gray-500"> | </span>
            <span className="text-gray-500">{product.ratingCount} Customer Review</span>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <p className="text-gray-700 font-medium mb-2">Available Colors:</p>

            <div className="flex gap-3">
              {colorList?.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${
                    selectedColor === color ? "border-amber-500 scale-110" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            {selectedColor && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: <span className="font-semibold">{selectedColor}</span>
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-3 quantity-counter">
            <button className="text-3xl px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
            >-</button>
            <span className="text-lg font-semibold">{counter}</span>
            <button className="text-3xl px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => setCounter(counter + 1)}
            >+</button>
          </div>

          <button className="mt-4 bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition"
          onClick={handleAdd}>
            Add to Cart
          </button>
          

          <hr className="my-4" />

          <p className="text-gray-500 text-sm">ID: {product.id}</p>
          <p className="text-gray-500 text-sm">
            Category: {product.brandId.slug} — {product.brandId.name}
          </p>

        </div>
      </div>

      <br /><br />
      <hr />

      {/* Tabs */}
      <div className="w-full border-b mt-10 flex gap-8 text-gray-600 tabs-div">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-3 transition relative ${
            activeTab === "description" ? "text-black font-semibold" : ""
          }`}
        >
          Description
          {activeTab === "description" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-500"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 transition relative ${
            activeTab === "reviews" ? "text-black font-semibold" : ""
          }`}
        >
          Reviews [{product.Reviews?.length || 0}]
          {activeTab === "reviews" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-500"></span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 leading-7">
        {activeTab === "description" && (
          <p>{product.description}</p>
        )}

        {activeTab === "reviews" && (
          <div>
            {product.Reviews?.length > 0 ? (
              product.Reviews.map((rev, idx) => (
                <div key={idx} className="border-b py-4">
                  <p className="font-semibold">{rev.id}</p>
                  <p className="text-sm text-gray-500">{rev.text}</p>
                  <p>⭐ {rev.rate}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        )}
      </div>

      <hr className="hr1" />

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-10 related">
          More Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {relatedProducts.map((item, index) => (
            <Link
              to={`/product/${item.id}`}
              key={index}
              className="w-full max-w-[220px] text-center group"
            >
              <img
                src={item.mainImage?.path}
                alt={item.name}
                className="w-full h-40 rounded-md mb-3 group-hover:scale-105 transition"
              />

              <p className="text-gray-700 text-sm line-clamp-1">{item.name}</p>
              <p className="font-semibold mt-1">{item.price}.00 EGP</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/shop"
            className="text-black font-medium border-b border-black pb-1 hover:text-gray-600 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}