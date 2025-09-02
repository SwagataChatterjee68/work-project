import ProductCard from "./ProductCard";

export default function JustForYou() {
  const products = [
    { image: "/laptop.png", title: "Gaming Laptop", price: 750, discount: 25 },
    { image: "/monitor.png", title: "4K Monitor", price: 750 },
    { image: "/controller.png", title: "Wireless Controller", price: 750 },
    { image: "/keyboard.png", title: "Mechanical Keyboard", price: 750 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Just For You</h2>
        <button className="text-sm px-4 py-2 border border-black rounded">
          See All
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
