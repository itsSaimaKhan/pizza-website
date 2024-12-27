import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const ProductCardGrid = () => {
  const productImages = [
    "/images/proc1.png",
    "/images/proc2.png",
    "/images/proc3.png",
    "/images/proc4.png",
    "/images/proc5.png",
    "/images/proc6.png",
  ];

  return (
    <div className="relative text-center p-10">
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/pizzaback.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      {/* Section Title */}
      <h1 className="text-4xl font-bold mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h2 className="text-3xl text-white z-10 relative">Order Now..!</h2>

      {/* Product Cards */}
      <section
        id="projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {productImages.map((image, index) => (
          <div
            key={index}
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              {/* Gradient Background Behind Image */}
              <div
                className="h-80 w-80 rounded-t-xl"
                style={{
                  background: "linear-gradient(135deg, #1e293b 0%, #000000 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Product Image */}
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="h-60 w-60 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="px-4 py-3">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Pizza Name {index + 1}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $1400
                  </p>
                  <del>
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      $1600
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaCartShopping className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
