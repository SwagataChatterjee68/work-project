import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

const BestSeller = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const bestSelling = [
    {
      id: 5,
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
      img: "/bestselling1.png",
    },
    {
      id: 6,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 65,
      img: "/bestselling2.png",
    },
    {
      id: 7,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 5,
      reviews: 65,
      img: "/bestselling3.png",
    },
    {
      id: 8,
      title: "Small BookShelf",
      price: 360,
      oldPrice: 400,
      rating: 5,
      reviews: 65,
      img: "/bestselling4.png",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">Best Selling Products</h2>
        <button className="bg-[#FF8400] text-white px-4 py-2 rounded hover:bg-orange-600">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSelling.map((item) => {
          const isWishlisted = wishlist.some((w) => w.id === item.id);

          return (
            <div
              key={item.id}
              className="relative bg-[#FDFBD44A] rounded-lg shadow hover:shadow-lg transition p-4"
            >
              {/* Wishlist Button */}
              <button
                onClick={() =>
                  isWishlisted
                    ? removeFromWishlist(item.id)
                    : addToWishlist(item)
                }
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              >
                {isWishlisted ? (
                  <FaHeart size={18} className="text-red-500" />
                ) : (
                  <FiHeart size={18} />
                )}
              </button>

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-3"
              />

              {/* Info */}
              <h3 className="font-medium text-sm mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[#FFA500] font-bold">${item.price}</p>
                <p className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[#FFA500] text-sm">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 text-xs ml-2">
                  ({item.reviews})
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
