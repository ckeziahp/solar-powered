import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10 text-white relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxnamnbff/image/upload/v1741246330/charge.jpg_aqp5vy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur Overlay for Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      {/* Contact Card with Glass Effect */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
          Get in Touch
        </h2>

        {/* Email */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-600">Email</h3>
          <a
            href="mailto:kwekuamfo7@gmail.com"
            className="hover:text-red-200"
          >
            kwekuamfo7@gmail.com
          </a>
        </div>

        {/* Phone - WhatsApp Icon + Number */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-600">WhatsApp</h3>
          <div className="flex flex-col space-y-2">
            {/* WhatsApp Link for First Number */}
            <a
              href="https://wa.me/233533141229"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-white">+233-533141229</span>
            </a>

            {/* WhatsApp Link for Second Number */}
            <a
              href="https://wa.me/233538547420"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-white">+233-538547420</span>
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">
            Our Location
          </h3>
          {/* Clicking the Map Opens Google Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Twifo+Hemang+Presbyterian+Church+Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-60"
          >
            <iframe
              className="w-full h-full rounded-lg pointer-events-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5099164319457!2d-1.212185414349402!3d5.710195994221787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzMuOSJOIDHCsDE1JzAyLjkiRQ!5e0!3m2!1sen!2sgh!4v1611784445134!5m2!1sen!2sgh"
              allowFullScreen=""
              loading="lazy"
              title="Twifo Hemang Presbyterian Church Ghana"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
