import React from "react";
import { CgMail } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="sm:px-8 px-5  sm:h-[60px] h-[60px] flex items-center justify-between border-b border-orange-400 mb-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl font-semibold "
      >
        Dev<span className="text-orange-400">Musi</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4"
      >
        <div className="flex items-center justify-center gap-2">
          <CgMail size={24} className="mt-1" />
          <div>
            <i className="text-sm hidden sm:block">musi6@gmail.com</i>
          </div>
        </div>
        <div className="h-6 bg-gray-400 w-[1px]"></div>
        <div className="flex items-center justify-center h-8 w-8 bg-orange-400 rounded-md">
          <RiMenu4Fill className="sm:h-[24px] h-[18px] text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
