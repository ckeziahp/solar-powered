import React from "react";

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

        {/* Phone */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-600">Phone</h3>
          <p className="hover:text-red-200">
            +233-533141229 / +233-538547420
          </p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">
            Our Location
          </h3>
          <div className="w-full h-60 mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5099164319457!2d-1.212185414349402!3d5.710195994221787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzMuOSJOIDHCsDE1JzAyLjkiRQ!5e0!3m2!1sen!2sgh!4v1611784445134!5m2!1sen!2sgh"
              allowFullScreen=""
              loading="lazy"
              title="Twifo Hemang Presbyterian Church Ghana"
            ></iframe>
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Twifo+Hemang+Presbyterian+Church+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-4 py-2 rounded hover:bg-red-500 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
