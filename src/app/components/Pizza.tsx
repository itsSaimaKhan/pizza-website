// import React from "react";

const products = [
  {
    id: 1,
    title: "Pizza",
    category: "Fixing",
    price: "600.00",
    image: "/images/pngegg (83).png", // Ensure this image exists in the public/images directory
    bgColor: "bg-red-500", // Changed to red
  },
  {
    id: 2,
    title: "Classy Pizza",
    category: "Delights",
    price: "800.00",
    image: "/images/pngegg (82).png", // Ensure this image exists in the public/images directory
    bgColor: "bg-blue-500", // Changed to blue
  },
  {
    id: 3,
    title: "Familz",
    category: "Fixing",
    price: "1600.00",
    image: "/images/pngegg (80).png", // Ensure this image exists in the public/images directory
    bgColor: "bg-green-500", // Changed to green
  },
];

export default function ProductList() {
  return (
    <div className="p-6 flex flex-wrap items-center justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group w-80 h-96`}
        >
          {/* Background SVG */}
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-105 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Product Image */}
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-60 h-60 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(circle, black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-64 h-64 object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Product Details */}
          <div className="relative text-white px-6 pb-6 mt-4">
            <span className="block opacity-75 text-sm mb-2">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-sm font-bold px-4 py-2">
                Rs. {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
