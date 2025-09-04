
"use client";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import FlashSale from "@/components/FlashSale";
import Category from "@/components/Category";
import BestSeller from "@/components/BestSeller";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function Home() {

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
  const { addToCart } = useCart();
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();

  const images = [
    { id: 1, src: "/header.png", alt: "Image 1" },
    { id: 2, src: "/header2.avif", alt: "Image 2" },
    { id: 3, src: "/images/img3.jpg", alt: "Image 3" },
  ];

  const products = [
    {
      id: 9,
      title: "Breed Dry Dog Food",
      price: 100,
      rating: 4,
      reviews: 35,
      img: "/dogfood.png",
    },
    {
      id: 10,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rating: 5,
      reviews: 95,
      img: "/camera.png",
    },
    {
      id: 11,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      img: "/laptop.png",
    },
    {
      id: 12,
      title: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      img: "/curology.png",
    },
    {
      id: 13,
      title: "Kids Electric Car",
      price: 100,
      rating: 4,
      reviews: 65,
      img: "/car.png",
    },
    {
      id: 14,
      title: "Soccer Cleats",
      price: 360,
      rating: 4,
      reviews: 95,
      img: "/shoes.png",
    },
    {
      id: 15,
      title: "ASUS ROG Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      img: "/gaminglaptop.png",
    },
    {
      id: 16,
      title: "GP11 Shooter USB Gamepad",
      price: 500,
      rating: 4,
      reviews: 145,
      img: "/gamepad.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-44">
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

      <FlashSale />

      <div className="w-full px-6 py-10">
        <Category />

        {/* Best Selling Products */}
        <BestSeller />
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

        <section className="max-w-7xl mx-auto px-6 py-10">
          {/* Section Header */}
          <div className="mb-8">
            <p className="text-[#FF8400] font-semibold text-sm">Our Products</p>
            <h2 className="text-2xl font-bold">Explore Our Products</h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((item) => {
              const isWishlisted = wishlist.some((w) => w.id === item.id);

              return (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg shadow hover:shadow-lg transition p-4"
                >
                  {/* Wishlist Toggle */}
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
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-black text-white py-2 flex justify-center items-center gap-2 text-sm hover:bg-gray-800 transition"
                  >
                    Add To Cart
                  </button>


                  {/* Title */}
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>

                  {/* Price */}
                  <p className="text-black font-bold mb-2">${item.price}</p>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-500 text-sm mb-3">
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

          {/* View All Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#FF8400] text-white px-6 py-2 rounded hover:bg-orange-600">
              View All Products
            </button>
          </div>
        </section>

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
    </div>
  );
}



