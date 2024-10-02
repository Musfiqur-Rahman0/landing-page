import React from "react";
import { IoStar } from "react-icons/io5";
import heroImg from "../assets/delivery-service-with-mask-concept.png";
import { delay, motion } from "framer-motion";

const Hero = () => {
  const mainVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 70,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full h-auto flex sm:flex-row flex-row-reverse   bg-orange-50 rounded-lg sm:py-10"
    >
      {/* left section */}
      <motion.div
        variants={mainVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, delay: 0.3 }}
        className="py-3 sm:px-5  w-1/2 flex flex-col justify-center "
      >
        <motion.h1
          variants={itemVariants}
          className="sm:text-4xl text-xl sm:font-bold font-semibold tracking-tighter"
        >
          Design focused startUp, for StartUps
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 sm:text-sm text-[10px] pt-2 line-clamp-2 sm:line-clamp-none"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium
          nam repellat ad, voluptatibus{" "}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center sm:w-[80%] w-full sm:gap-4 gap-2 sm:pt-5 pt-2"
        >
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.9 }}
            className="w-1/2 bg-black text-white sm:p-2 p-1 rounded-md text-[10px]"
          >
            Order Now <span></span>
          </motion.button>
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.9 }}
            className="w-1/2 rounded-md sm:p-2 py-1 bg-[#f3eff5]  border-black border-x-2 text-[10px]"
          >
            Live Chat
          </motion.button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden lg:block sm:pt-2 pt-4 w-full"
        >
          <h3 className="text-xl tracking-tighter font-semibold">Reviews</h3>
          <div className="flex items-center gap-1 w-[50%] pt-2">
            {[...Array(5)].map((_, index) => (
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                key={index}
                className="sm:h-7 sm:w-7 h-5 bg-orange-400 flex items-center justify-center rounded-md text-white"
              >
                <IoStar />
              </motion.div>
            ))}
          </div>
          <div className="pt-2 ">
            <p className=" text-sm text-gray-400 ">
              Dolor sit, aipsumdipisicing elit. Inventore
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Right section */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 py-3 px-3 flex items-center justify-center"
      >
        <div className="flex items-center justify-center h-full ">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
