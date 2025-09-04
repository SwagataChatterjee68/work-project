"use client";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { FaTrash } from "react-icons/fa";
import JustForYou from "@/components/JustForYou";
import { BsCartPlus } from "react-icons/bs";

export default function WishlistPage() {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleMoveAllToBag = () => {
        wishlist.forEach(item => {
            addToCart(item);
        });
        clearWishlist();
    };

    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-32">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Wishlist ({wishlist.length})</h2>
                    {wishlist.length > 0 && (
                        <button
                            onClick={handleMoveAllToBag}
                            className="text-sm px-4 py-2 border rounded hover:bg-gray-100"
                        >
                            Move All To Bag
                        </button>
                    )}
                </div>

                {/* Wishlist Grid */}
                {wishlist.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {wishlist.map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                            >
                                {/* Discount Badge (optional) */}
                                {item.discount && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        {item.discount}
                                    </span>
                                )}

                                {/* Remove button */}
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="absolute top-2 right-2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
                                >
                                    <FaTrash className="text-gray-600 text-sm" />
                                </button>

                                {/* Product Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-48 object-contain bg-white"
                                />
                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-full bg-black text-white py-2 flex justify-center items-center gap-2 text-sm hover:bg-gray-800 transition"
                                >
                                    <BsCartPlus className="text-2xl" /> Add To Cart
                                </button>

                                {/* Info */}
                                <div className="p-4 text-center">
                                    <h3 className="text-sm font-medium">{item.title}</h3>
                                    <p className="text-red-600 font-semibold mt-1">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">Your wishlist is empty.</p>
                )}
            </section>
            <JustForYou />
        </div>

    );
}
