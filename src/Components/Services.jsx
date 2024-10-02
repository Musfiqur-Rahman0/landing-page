import React from "react";
import services from "../Consents";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = () => {
  const TextColors = ["#ffb703", "#8eef07", "#64e9ee", "#1e96fc", "#d52941"];
  const BgColors = ["#fce8b5", "#eefcda", "#d4feff", "#b8deff", "#ffb6c0"];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 70,
        stiffness: 600,
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      whileInView="visible"
      className="flex w-full flex-col gap-10"
    >
      <div className="pt-14">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="text-center text-orange-400 tracking-widest"
        >
          OUR SERVICES
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center sm:text-3xl text-xl font-semibold"
        >
          Discover Exceptional Food Ordering Services
        </motion.h1>
      </div>

      <motion.div
        variants={menuVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="sm:h-[200px] h-auto w-auto sm:w-auto p-4 border rounded-lg relative"
            >
              <motion.div
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="sm:h-10 sm:w-10 h-8 w-8 flex items-center justify-center rounded-md"
                style={{ background: BgColors[index] }}
              >
                <Icon style={{ color: TextColors[index] }} size={24} />
              </motion.div>

              <h2 className="my-5 text-2xl font-semibold tracking-tight">
                {service.text}
              </h2>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-2 sm:bottom-4 flex w-full items-center gap-3 text-orange-400 "
              >
                Learn more
                <FaAngleRight size={14} />
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
