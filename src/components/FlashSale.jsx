"use client";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import styles from "@/app/ui/home.module.css";
import { useState, useEffect } from "react";
import { useWishlist } from "@/context/WishlistContext";

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
    });

    // Countdown Timer
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

    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const product = [
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

    function TimeBox({ label, value }) {
        return (
            <div className="flex flex-col items-center">
                <span className="text-lg font-bold">{String(value).padStart(2, "0")}</span>
                <span className="text-xs text-gray-500">{label}</span>
            </div>
        );
    }

    return (
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
                    {product.map((item) => {
                        const isWishlisted = wishlist.some((w) => w.id === item.id);

                        return (
                            <div
                                key={item.id}
                                className="relative bg-[#FDFBD44A] rounded-lg shadow hover:shadow-lg transition p-4"
                            >
                                {/* Discount Badge */}
                                <span className="absolute top-3 left-3 bg-[#FFA500] text-white text-xs px-2 py-1 rounded">
                                    {item.discount}
                                </span>

                                {/* Wishlist Button */}
                                <button
                                    onClick={() =>
                                        isWishlisted ? removeFromWishlist(item.id) : addToWishlist(item)
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
                                    className="w-full bg-black text-white py-2 flex justify-center items-center gap-2 text-sm hover:bg-gray-800 transition cursor-pointer"
                                >
                                    Add To Cart
                                </button>

                                {/* Info */}
                                <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <p className="text-[#FFA500] font-bold">${item.price}</p>
                                    <p className="text-gray-400 line-through text-sm">${item.oldPrice}</p>
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
        </section>
    );
};

export default FlashSale;
