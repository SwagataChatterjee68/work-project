"use client";
import Image from "next/image";

export default function ProductCard({ image, title, price, discount }) {
  return (
    <div className="relative group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-100">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 text-center">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-sm text-red-500 font-semibold">${price}</p>
      </div>

      {/* Add to Cart - appears only on hover */}
      <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition">
        Add to Cart
      </button>
    </div>
  );
}
