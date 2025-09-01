// app/page.tsx  (if using Next.js 13+ App Router)
// or pages/index.tsx (if using Pages Router)
"use client";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set countdown target (e.g., 3 days from now)
  useEffect(() => {
    const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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

  const products = [
    {
      id: 1,
      img: "/images/product1.jpg",
      title: "FLORAL PRINT DRESS",
      oldPrice: "$50.00",
      newPrice: "$40.00",
      sold: 50,
      available: 20,
    },
    {
      id: 2,
      img: "/images/product2.jpg",
      title: "FLORAL PRINT DRESS",
      oldPrice: "$50.00",
      newPrice: "$40.00",
      sold: 50,
      available: 20,
    },
    {
      id: 3,
      img: "/images/product3.jpg",
      title: "FLORAL PRINT DRESS",
      oldPrice: "$50.00",
      newPrice: "$40.00",
      sold: 50,
      available: 20,
    },
    {
      id: 4,
      img: "/images/product4.jpg",
      title: "FLORAL PRINT DRESS",
      oldPrice: "$50.00",
      newPrice: "$40.00",
      sold: 50,
      available: 20,
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
          <div className="h-96 border-l-2 border-gray-500"></div>
          <img src="/header.png" alt="" />
        </div>
      </section>

      

      <div className="max-w-7xl mx-auto  flex flex-col py-8">
        {/* Flash Sale Section */}
        <div className=" rounded-xl p-6 w-11/12 max-w-6xl">
          {/* Title */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              FLASH SALE
            </h2>
            <div className="bg-red-700 text-white px-4 py-1 rounded font-mono text-lg">
              {String(timeLeft.days).padStart(2, "0")}d :{" "}
              {String(timeLeft.hours).padStart(2, "0")}h :{" "}
              {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
              {String(timeLeft.seconds).padStart(2, "0")}s
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 relative">
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  -15%
                </span>
                <div className="h-60 flex items-center justify-center mb-4 overflow-hidden rounded">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-yellow-500">★★★★★ (20)</p>
                  <h3 className="font-semibold mt-1">{product.title}</h3>
                  <p className="line-through text-gray-400">
                    {product.oldPrice}
                  </p>
                  <p className="text-red-600 font-bold">{product.newPrice}</p>
                  <div className="flex justify-between text-sm mt-1 text-gray-600">
                    <p>Sold: {product.sold}</p>
                    <p>Available: {product.available}</p>
                  </div>
                  <button className="mt-3 bg-black text-white px-4 py-2 rounded">
                    SELECT OPTIONS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
