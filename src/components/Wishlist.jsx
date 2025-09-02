import ProductCard from "./ProductCard";

export default function Wishlist() {
  const products = [
    { image: "/jacket.png", title: "Quilted Satin Jacket", price: 750, discount: 33 },
    { image: "/gamepad.png", title: "GPII Shooter USB Gamepad", price: 750 },
    { image: "/cpu.png", title: "RGB Liquid CPU Cooler", price: 750 },
    { image: "/bag.png", title: "Gucci Cufftle Bag", price: 750 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Wishlist (4)</h2>
        <button className="text-sm px-4 py-2 bg-black text-white rounded">
          Move All To Bag
        </button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
