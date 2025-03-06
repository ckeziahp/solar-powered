import React from "react";

const products = [
  { id: 1, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087988/pexels-goumbik-518530_ovnafw.jpg", alt: "Product 1" },
  { id: 2, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087975/jonathan-castaneda-m5kmVivgqSs-unsplash_bxhj9k.jpg", alt: "Product 2" },
  { id: 3, src: "https://res.cloudinary.com/dxnamnbff/image/upload/v1741087983/pexels-ulad-r-2149879861-30834709_uanzcu.jpg", alt: "Product 3" },
];

const Products = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-500 min-h-screen flex flex-col place-content-center jsutify-items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg shadow-lg overflow-hidden bg-gray-100 w-full max-w-sm">
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
        </div>
      </div>
    </section>
  );
};

export default Products;
