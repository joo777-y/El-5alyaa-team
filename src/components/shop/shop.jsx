import React, { useEffect, useState } from 'react'
import './shop.css'
import img from '../../../images/ecoo-removebg-preview.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";



export default function Shop() {

  const[products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading]=useState(true);

  useEffect(() => {
  axios
    .get(`https://ecommerce-be-sand.vercel.app/products?page=${currentPage}`)
    .then(res => {
      const shuffled = shuffleArray(res.data.products);
      setProducts(shuffled);

      if (res.data.totalPages) {
        setTotalPages(res.data.totalPages);
      }
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
    
}, [currentPage]);

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const filteredProducts = products.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);

let sortedProducts = [...products];  
  if (sort === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "latest") {
    sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const displayedProducts = search
  ? filteredProducts       
  : sortedProducts;

  if(loading) return <h4 className='mt-32 mb-8'>Loading.......</h4>

  


  return (
    <div>
        <div className='ecommerce-img'>
          <div className="ecommerce-overlay">
             <img src={img} alt="ecoo" />
             <p className='p1'>Shop</p>
             <p><span>Home &gt;</span>  Shop </p>
          </div>
          
        </div>
        <div className="
  w-full 
  backdrop-blur-xl bg-amber-200 
  border border-white/50 
  rounded-3xl 
  shadow-[0_0_25px_rgba(0,0,0,0.08)]
  px-6 py-4 
  flex flex-wrap items-center justify-between
  gap-4
  sub-nav
">

  {/* Search */}
  <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      search-input
      flex-1 min-w-[200px]
      bg-white/60 
      border border-white/70 
      rounded-b-sm 
      px-4 py-2
      text-gray-800
      focus:outline-none 
      focus:ring-2 focus:ring-amber-400
      shadow-sm
    "
  />

  {/* Show Count */}
  <div className="flex items-center gap-2 bg-white/60 border border-white/70 px-4 py-2 rounded-b-sm  shadow-sm search-input">
    <span className="text-gray-700">Show</span>
    <input
      type="number"
      defaultValue={20}
      disabled
      className="w-16 bg-transparent text-center outline-none"
    />
  </div>

  {/* Sort */}
  <div className="flex items-center gap-2 bg-white/60 border border-white/70 px-4 py-2 rounded-b-sm shadow-sm search-input">
    <span className="text-gray-700">Sort</span>
    <select className="bg-transparent outline-none"
     value={sort}
        onChange={(e) => setSort(e.target.value)}
    >
      <option>Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="latest">Latest</option>
    </select>
  </div>

</div>


          <div className="products-div grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <div 
                key={product.id}
                className="bg-white shadow-md hover:shadow-xl rounded-2xl p-4 transition-all duration-300 border border-gray-100 gg"
              >
                <div className="w-full flex justify-center">
                  <img 
                    src={product.mainImage.path}
                    alt={product.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>

                <p className='text-gray-400'>{product.brandId.name}</p>

                <h2 className="mt-3 font-semibold text-gray-800 line-clamp-1 text-lg ">
                  {product.name}
                </h2>

                <p className="text-amber-600 font-bold text-md mt-1 product-price">
                  {product.price} EGP
                </p>
                <FontAwesomeIcon icon={faStar} className='text-amber-400'/> <span className='text-gray-400'>{product.AvgRate}</span>

                {/* <button 
                  className="mt-4 w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition cursor-pointer"
                >
                  View Details
                </button> */}
                <Link to={`/product/${product.id}`}>
                  <button className="product-btn mt-4 w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition cursor-pointer">View Details</button>
                </Link>
                
                </div>
              ))):
              <p className="text-center mt-4 text-red-500 font-semibold ">
                  Product not found
              </p>}
          </div>


          <div className="pagination-div">

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;

                return (

                  
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      px-4 py-2 rounded-b-sm transition pagnation-btn
                      ${currentPage === page ? "bg-orange-400 text-white" : "bg-orange-200"}
                    `}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}
              <button
                onClick={() => {
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className="px-4 py-2 rounded-xl bg-orange-200 pagination-next-btn"
              >
                Next
              </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 services-div'>
            <div>
                <h3 className='font-bold'>Free Delivery</h3>
                <p className='text-gray-500'>For all orders over 150 EGP, consectetur adipim scing elit.</p>
            </div>
            <div>
                <h3 className='font-bold'>90 Days Return</h3>
                <p className='text-gray-500'>if goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
                <h3 className='font-bold'>Secure Payment</h3>
                <p className='text-gray-500'>100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>


    </div>
  )
}
