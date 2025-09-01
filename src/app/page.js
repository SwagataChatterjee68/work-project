// app/page.tsx  (if using Next.js 13+ App Router)
// or pages/index.tsx (if using Pages Router)
"use client";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  // Set countdown target (e.g., 3 days from now)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Dummy products
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 4,
      reviews: 88,
      img: "saleproduct1.png",
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      img: "saleproduct2.png",
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      img: "/saleproduct3.png",
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 5,
      reviews: 99,
      img: "/saleproduct4.png",
    },
  ];

  const categories = [
    { name: "Woman’s Fashion", href: "/" },
    { name: "Men’s Fashion", href: "/" },
    { name: "Electronics", href: "/" },
    { name: "Home & Lifestyle", href: "/" },
    { name: "Medicine", href: "/" },
    { name: "Sports & Outdoor", href: "/" },
    { name: "Baby's & Toys", href: "/" },
    { name: "Groceries & Pets", href: "/" },
    { name: "Health & Beauty", href: "/" },
  ];

  const category = [
  { id: 1, name: "Phones", icon: "phone" },
  { id: 2, name: "Computers", icon: "computer" },
  { id: 3, name: "SmartWatch", icon: "watch" },
  { id: 4, name: "Camera", icon: "camera", active: true },
  { id: 5, name: "HeadPhones", icon: "headphone" },
  { id: 6, name: "Gaming", icon: "game" },
];

const bestSelling = [
  {
    id: 1,
    title: "The north coat",
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
    img: "/bestselling1.png",
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
    img: "/bestselling2.png",
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
    img: "/bestselling3.png",
  },
  {
    id: 4,
    title: "Small BookShelf",
    price: 360,
    oldPrice: 400,
    rating: 5,
    reviews: 65,
    img: "/bestselling4.png",
  },
];

  return (
    <div className="flex flex-col min-h-screen py-10">
      {/* Hero Section */}
      <section className={`${styles.header}max-w-7xl mx-auto`}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5 ">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                {category.name}
              </Link>
            ))}
          </div>
          <div className="h-96 border-l-2 border-gray-500 "></div>
          <img src="/header.png" alt="" className={styles.headerimg} />
        </div>
      </section>

      <section className="w-full bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-20 mb-8">
            <div>
              <p className="text-[#FFA500] font-semibold">Today’s</p>
              <h2 className={`${styles.sale} font-bold`}>Flash Sales</h2>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FDFBD44A] rounded-lg shadow hover:shadow-lg transition p-4"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-[#FFA500] text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
                {/* Wishlist */}
                <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
                  <FiHeart size={18} />
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
                <div className="flex items-center gap-1 text-[#FFA500]  text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-600 text-xs ml-2">
                    ({item.reviews})
                  </span>
                </div>

                {/* Add to Cart */}
                <button className="mt-3 w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-800 transition">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#FFA500] text-white px-6 py-2 rounded hover:bg-orange-600 transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <div className="w-full px-6 py-10">
      {/* Browse by Category */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-4">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {category.map((cat) => (
            <div
              key={cat.id}
              className={`flex flex-col items-center justify-center border rounded-md p-6 cursor-pointer transition ${
                cat.active
                  ? "bg-[#FF8400] text-white border-orange-500"
                  : "hover:border-orange-500"
              }`}
            >
              <span className="text-3xl">{cat.icon}</span>
              <p className="mt-2 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">Best Selling Products</h2>
        <button className="bg-[#FF8400] text-white px-4 py-2 rounded hover:bg-orange-600">
          View All
        </button>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSelling.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FDFBD44A] rounded-lg shadow hover:shadow-lg transition p-4"
              >
                {/* Discount Badge */}
                
                {/* Wishlist */}
                <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
                  <FiHeart size={18} />
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
                <div className="flex items-center gap-1 text-[#FFA500]  text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-600 text-xs ml-2">
                    ({item.reviews})
                  </span>
                </div>
    
              </div>
            ))}
          </div>
    </div>
    </div>
  );
}
function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold">{String(value).padStart(2, "0")}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}