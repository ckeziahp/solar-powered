import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087988/pexels-goumbik-518530_ovnafw.jpg", alt: "Product 1" },
  { id: 2, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087975/jonathan-castaneda-m5kmVivgqSs-unsplash_bxhj9k.jpg", alt: "Product 2" },
  { id: 3, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087983/pexels-ulad-r-2149879861-30834709_uanzcu.jpg", alt: "Product 3" },
];

const Products = () => {
  // Duplicate the products for a seamless looping effect
  const sliderProducts = [...products, ...products];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-black to-gray-500 flex justify-center items-center min-h-screen overflow-hidden">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>
        {/* Overflow hidden ensures the sliding items outside the container are not visible */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
            }}
          >
            {sliderProducts.map((product, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden bg-gray-100 w-full max-w-sm flex-shrink-0"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 text-center">
                    {product.alt}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
