// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const Icons = [FaFacebookF, FaTwitter, FaInstagram];
  return (
    <footer className="bg-slate-600 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
        <p className="mb-4">
          Follow us on social media for updates and promotions!
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          {Icons.map((Icon, index) => (
            <motion.a
              initial={{ rotate: 0, scale: 0.9 }}
              whileHover={{ rotate: 360, scale: 1 }}
              key={index}
              href="#"
              className="text-gray-400 hover:text-white"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Your Food Delivery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
