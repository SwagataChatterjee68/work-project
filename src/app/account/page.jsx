"use client";
import { useState } from "react";
export default function AccountPage() {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };
    return (
        <div className="max-w-6xl mx-auto px-6 py-32">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-6">
                Home / <span className="text-black">My Account</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">Manage My Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="text-orange-500 font-medium cursor-pointer">My Profile</li>
                        <li className="cursor-pointer hover:text-orange-500">Address Book</li>
                        <li className="cursor-pointer hover:text-orange-500">My Payment Options</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">My Orders</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="cursor-pointer hover:text-orange-500">My Returns</li>
                        <li className="cursor-pointer hover:text-orange-500">My Cancellations</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h3>
                </aside>

                {/* Profile Form */}
                <div className="flex justify-center py-10 bg-gray-100 min-h-screen">
                    <div className="bg-white w-full max-w-3xl shadow-md rounded-lg p-8">
                        {/* Header */}
                        <h2 className="text-xl font-semibold text-red-500 mb-6">
                            Edit Your Profile
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
