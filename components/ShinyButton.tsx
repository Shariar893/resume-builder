"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ShinyButton = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="h-[3rem] px-6 py-2.5 rounded-[2.5px] relative radial-gradient"
    >
      <span className="text-black text-xl tracking-wide h-full w-full  relative linear-mask font-space-grotesk flex items-center">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-[2.5px] p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
