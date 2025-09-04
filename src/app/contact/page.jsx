"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home / <span className="text-black">Contact</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Call Us */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call To Us</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-sm text-gray-800">Phone: +8801611112222</p>
                </div>
              </div>
            </div>

            {/* Write To Us */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Write To Us</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-800">
                    Emails: customer@exclusive.com <br />
                    support@exclusive.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6 space-y-6"
            >
              {/* Top Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
