import React from 'react'
import { TfiShine } from "react-icons/tfi";

const features = () => {
  return (
    <div  className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-600">
          Discover a range of services designed to meet your needs.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              {/* Replace with your preferred icon */}
              <i className="fas fa-university"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Chargiing</h3>
            <p className="text-gray-600">
              Experience secure and efficient charging solutions tailored for you.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="Tfishine"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Savings</h3>
            <p className="text-gray-600">
              Secure options to Charge your phone faster by saving on solar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default features