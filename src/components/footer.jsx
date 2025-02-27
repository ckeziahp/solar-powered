import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
    <div>
      <h3 className="text-xl font-semibold mb-3">Products</h3>
      <ul>
        <li className="mb-2">
          <a href="services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li className="mb-2">
          <a href="product" className="hover:text-gray-300">
            Product
          </a>
        </li>
        
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Company</h3>
      <ul>

        <li className="mb-2">
          <a href="about" className="hover:text-gray-300">
            About Us
          </a>
        </li>
        
        <li>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
        </li>

      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3">Support</h3>
      <ul>
        {/* <li className="mb-2">
          <a href="#" className="hover:text-gray-300">
            FAQ
          </a>
        </li> */}
        {/* <li className="mb-2">
          <a href="#" className="hover:text-gray-300">
            Help Center
          </a>
        </li> */}
        <li className="mb-2">
          <a href="contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </li>
        <li>
          <a href="privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
      <p className="text-gray-400 mb-3">
        Get the latest news and updates.
      </p>
      <form className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-2 rounded-md text-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 sm:ml-2 p-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>

{/* Bottom Section: Copyright */}

<div className="mt-8 border-t border-gray-800 pt-4 text-center">
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} Solar-powered. All rights reserved.
  </p>
</div>

  </div>




  )
}

export default Footer