// app/page.tsx  (if using Next.js 13+ App Router)
// or pages/index.tsx (if using Pages Router)
"use client";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Wishlist from "@/components/Wishlist";
import JustForYou from "@/components/JustForYou";
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
  const [current, setCurrent] = useState(0);
  const images = [
    { id: 1, src: "/header.png", alt: "Image 1" },
    { id: 2, src: "/header2.avif", alt: "Image 2" },
    { id: 3, src: "/images/img3.jpg", alt: "Image 3" },
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
  const product = [
    {
      id: 1,
      title: "Bleed Dry Dog Food",
      price: 100,
      rating: 4,
      reviews: 20,
      img: "/products/dogfood.png",
    },
    {
      id: 2,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rating: 5,
      reviews: 123,
      img: "/products/camera.png",
    },
    {
      id: 3,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 55,
      img: "/products/laptop.png",
    },
    {
      id: 4,
      title: "Curelology Product Set",
      price: 500,
      rating: 5,
      reviews: 105,
      img: "/products/cream.png",
    },
    {
      id: 5,
      title: "Kids Electric Car",
      price: 150,
      rating: 4,
      reviews: 40,
      img: "/products/car.png",
    },
    {
      id: 6,
      title: "Soccer Shoes",
      price: 120,
      rating: 4,
      reviews: 60,
      img: "/products/shoes.png",
    },
    {
      id: 7,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 55,
      img: "/products/laptop.png",
    },
    {
      id: 8,
      title: "Wireless Game Controller",
      price: 90,
      rating: 4,
      reviews: 46,
      img: "/products/gamepad.png",
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
          {/* <img src="/header.png" alt="" className={styles.headerimg} /> */}
          <img
            src={images[current].src}
            alt={images[current].alt}
            className={styles.headerimg} 
          />
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
                className={`flex flex-col items-center justify-center border rounded-md p-6 cursor-pointer transition ${cat.active
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
      <div className="w-full px-6 py-10">
        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white rounded-lg p-8 mb-12">
          {/* Left side */}
          <div>
            <p className="text-sm text-orange-500 font-medium">Categories</p>
            <h1 className="text-3xl font-bold my-3">Enhance Your Music Experience</h1>
            {/* Countdown */}
            <div className="flex gap-4 my-4">
              {["23", "05", "59", "35"].map((time, i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center font-bold"
                >
                  {time}
                </div>
              ))}
            </div>
            <button className="bg-orange-500 px-6 py-2 rounded text-white hover:bg-orange-600">
              Buy Now!
            </button>
          </div>

          {/* Right side - Speaker image */}
          <div className="mt-6 md:mt-0">
            <img src="/banner/speaker.png" alt="Speaker" className="w-[350px]" />
          </div>
        </div>

        {/* Explore Our Products */}
        <div className="mb-8">
          <p className="text-orange-500 font-medium">Our Products</p>
          <h2 className="text-xl font-bold">Explore Our Products</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {product.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow hover:shadow-lg transition p-4 group"
            >
              {/* Wishlist */}
              <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
                <FaHeart size={18} />
              </button>

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-3"
              />

              {/* Product Info */}
              <h3 className="font-medium text-sm mb-2">{item.title}</h3>
              <p className="text-red-500 font-bold mb-1">${item.price}</p>

              {/* Ratings */}
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 text-xs ml-2">
                  ({item.reviews})
                </span>
              </div>

              {/* Add to Cart (hover only) */}
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-black text-white py-2 rounded text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            View All Products
          </button>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="mb-8">
          <span className="text-orange-500 font-semibold">Featured</span>
          <h2 className="text-2xl md:text-3xl font-bold">New Arrival</h2>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative group">
            <Image
              src="/ps5.jpg"
              alt="PlayStation 5"
              width={500}
              height={500}
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">PlayStation 5</h3>
              <p className="text-sm">Black and White version of PS5</p>
              <button className="mt-2 bg-white text-black px-3 py-1 text-sm rounded">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <Image
              src="/women.jpg"
              alt="Women's Collections"
              width={500}
              height={500}
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Women&apos;s Collections</h3>
              <p className="text-sm">Give your wardrobe vibe</p>
              <button className="mt-2 bg-white text-black px-3 py-1 text-sm rounded">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            <Image
              src="/speaker.jpg"
              alt="Speakers"
              width={500}
              height={500}
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Speakers</h3>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="mt-2 bg-white text-black px-3 py-1 text-sm rounded">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group">
            <Image
              src="/perfume.jpg"
              alt="Perfume"
              width={500}
              height={500}
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Perfume</h3>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="mt-2 bg-white text-black px-3 py-1 text-sm rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
          <div>
            <h3 className="font-bold text-lg">Free and Fast Delivery</h3>
            <p className="text-gray-500 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">24/7 Customer Service</h3>
            <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Money Back Guarantee</h3>
            <p className="text-gray-500 text-sm">
              We return money within 30 days
            </p>
          </div>
        </div>
      </section>
      <Wishlist />
      <JustForYou />
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


// "use client";
// import { useState } from "react";

// const images = [
//   { id: 1, src: "/images/img1.jpg", alt: "Image 1" },
//   { id: 2, src: "/images/img2.jpg", alt: "Image 2" },
//   { id: 3, src: "/images/img3.jpg", alt: "Image 3" },
// ];

// export default function ImageSlider() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       <div className="overflow-hidden rounded-2xl">
//         <img
//           src={images[current].src}
//           alt={images[current].alt}
//           className="w-full h-80 object-cover transition-all duration-500"
//         />
//       </div>

//       {/* Prev button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//       >
//         ❮
//       </button>

//       {/* Next button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//       >
//         ❯
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center gap-2 mt-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-400"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }