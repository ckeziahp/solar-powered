import React from 'react'

const features = () => {
  return (
    <div id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-600">
          Discover a range of services designed to meet your financial needs.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              {/* Replace with your preferred icon */}
              <i className="fas fa-university"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Banking</h3>
            <p className="text-gray-600">
              Experience secure and efficient banking solutions tailored for you.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-credit-card"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Credit Services</h3>
            <p className="text-gray-600">
              Flexible credit options to empower your financial growth.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-piggy-bank"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Savings</h3>
            <p className="text-gray-600">
              Secure and high-yield savings options to build your wealth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default features