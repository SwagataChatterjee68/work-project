"use client";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { BsCartPlus } from "react-icons/bs";

export default function JustForYou() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/laptop.png",
      discount: "-35%",
    },
    {
      id: 2,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct3.png",
    },
    {
      id: 3,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct1.png",
    },
    {
      id: 4,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct2.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-orange-500"></div>
          <h2 className="text-lg font-semibold">Just For You</h2>
        </div>
        <button className="border px-5 py-2 rounded hover:bg-black hover:text-white transition">
          See All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image with discount + eye */}
            <div className="relative">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100">
                <FiEye size={16} />
              </button>
              
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain"
              />
              <button
              onClick={() => addToCart(item)}
              className="w-full cursor-pointer bg-black text-white py-2 flex justify-center items-center gap-2 text-sm hover:bg-gray-800 transition"
            >
              <BsCartPlus className="text-2xl" /> Add To Cart
            </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-orange-600 font-bold">${item.price}</p>
              <div className="flex items-center text-yellow-500 text-sm mt-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 text-xs ml-2">
                  ({item.reviews})
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            
          </div>
        ))}
      </div>
    </section>
  );
}
