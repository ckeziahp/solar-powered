import React from "react"
// import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import solar1 from "../../assets/images/solar1.jpg"
import solar4 from "../../assets/images/solar4.jpg"
import solar2 from "../../assets/images/solar2.jpg"
import solar5 from "../../assets/images/solar5.jpg"

const productVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Products = () => {
  return (
    // <AnimatedSection className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">Our Products</h2>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[solar1, solar4, solar2,solar5].map((id) => (
            <motion.div
              key={id}
              className="bg-white text-black p-4 rounded-lg shadow-lg"
              variants={productVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${solar1, solar4, solar2,solar5}.jpg`}
                alt={`Solar Charger ${id}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">Solar Charger Model {String.fromCharCode(64 + id)}</h3>
              <p className="text-sm mt-2">Fast and efficient solar-powered charging solution.</p>
            </motion.div>
          ))}
        </div>
      </div>
    // </AnimatedSection>
  );
};

export default Products;
