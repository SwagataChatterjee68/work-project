// app/page.tsx  (if using Next.js 13+ App Router)
// or pages/index.tsx (if using Pages Router)
import Link from "next/link";
import styles from '@/app/ui/home.module.css';

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
  return (
    <div className="flex flex-col min-h-screen py-10">
      {/* Hero Section */}
      <section className={`${styles.header}max-w-7xl mx-auto`} >
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 py-10">
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

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-600">
              Across UAE on orders above AED 200
            </p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-600">
              All products sourced & checked by experts
            </p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">We’re here to help anytime</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example product cards */}
            {["Laptop", "Smartphone", "Tablet", "Accessory"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow rounded-lg p-4 text-center"
                >
                  <div className="h-40 bg-gray-200 rounded mb-4"></div>
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-500">
                    High-quality {item.toLowerCase()} at best price
                  </p>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
