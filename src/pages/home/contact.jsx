import React from 'react'
import { motion } from "framer-motion";
import man from "../../assets/images/man.jpg"

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100 p-10">
      <motion.div 
        initial={{ opacity: 30, y: 50 }} 
        animate={{ opacity: 1, y: 10}} 
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-lg w-full"
      >
        <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12" style={{
        backgroundImage: `url(${man})`,
        height: "98vh",
        position: "relative",
        backgroundSize: "cover",
      }}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-blue-200 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-gray-700">
              Fill up the form below to send us a message.
            </p>
          </div>
          <form >
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
            />
            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style={{ height: '121px' }}
            ></textarea>
            <div className="flex justify-between">
              <input
                className="shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
        {/* <div><h1 className="text-3xl font-bold text-center text-green-600">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">We'd love to hear from you! Fill out the form below.</p>
        </div>
        
        <form className="mt-6 space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">📍 Accra, Ghana</p>
          <p className="text-gray-600">📧 support@solarcharge.com</p>
          <p className="text-gray-600">📞 +233 123 456 789</p>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
