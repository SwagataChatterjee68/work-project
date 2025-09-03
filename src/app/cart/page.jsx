
"use client";
import { useCart } from "@/context/CartContext";
import { IoIosClose } from "react-icons/io";
export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-black">Cart</span>
      </div>

      <div className="w-full border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm font-medium">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id} className="border-t">
                <td className="p-3 flex items-center gap-3">
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="w-14 h-14 object-contain" />
                    <div className="relative">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute left-0 -top-14 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                      >
                        <IoIosClose className="text-xl" />
                      </button>
                    </div>
                  </div>

                  {item.title}
                </td>
                <td className="p-3">${item.price}</td>

                <td className="p-3">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded text-center"
                  />
                </td>
                <td className="p-3">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Actions */}
        <div className="flex flex-col gap-4">
          <button className="border-2 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Return To Shop
          </button>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-2 rounded w-48"
            />
            <button className="bg-[#FF8400] text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Right Cart Totals */}
        <div className="border rounded-lg p-6 w-full md:w-80">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="w-full bg-[#FF8400] text-white py-2 mt-4 rounded">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}