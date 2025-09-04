"use client";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import styles from "@/components/navbar/navbar.module.css";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm flex items-center justify-center relative py-2">
        <p className="text-center text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline cursor-pointer">ShopNow</span>
        </p>
        <div className="absolute right-6 cursor-pointer flex items-center space-x-1">
          <span>English</span>
          <span>▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${styles.mainNav} flex items-center justify-between px-6 py-2`}
      >
        <div className="text-lg font-bold">LOGO</div>

        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/" className="cursor-pointer hover:text-black">
            Home
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-black">
            Contact
          </Link>
          <Link href="/about" className="cursor-pointer hover:text-black">
            About
          </Link>
          <Link
            href="/register"
            className="cursor-pointer border-b-2 border-black"
          >
            Sign Up
          </Link>
        </ul>

        {/* Search + Icons */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="hidden md:flex items-center bg-yellow-100 rounded-md px-3 py-2 w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <FiSearch className="text-gray-700" />
          </div>

          <Link href="/wishlist" className="relative">
            <FaRegHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart with badge */}
          <Link href="/cart" className="relative">
            <IoCartOutline className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/account" className="relative">
            <FaRegUser className="text-xl" />
            {/* {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )} */}
          </Link>


          
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 text-gray-800 font-medium">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Sign Up</p>

          {/* Search for Mobile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-yellow-100 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <FiSearch className="text-gray-700" />
            </div>
            <FaRegHeart className="text-xl" />
            <Link href="/cart" className="relative">
              <IoCartOutline className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <FaRegUser className="text-xl" />
          </div>
        </div>
      )}
    </header>
  );
}
