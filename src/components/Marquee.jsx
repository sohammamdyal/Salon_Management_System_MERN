import React from "react";
import { motion } from "framer-motion";
import "./../styles/Marquee.css";

function Marquee() {
  const marqueeItems = Array.from({ length: 4 }).map((_, index) => (
    <motion.h1
      key={index}
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      className="marquee-text fw-bold"
    >
      VogueTrack -
    </motion.h1>
  ));

  return (
    <div className="container-fluid marquee-section text-white">
      <div className="marquee-wrapper d-flex align-items-center overflow-hidden">
        {marqueeItems}
      </div>
    </div>
  );
}

export default Marquee;
