import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/home.css"
import Marquee from "./Marquee";
import About from "./About";
import Featured from "./Featured";
import Footer from "./Footer";
import StartProject from "./StartProject";
import AdvertisePage from "./AdvertisePage";
import CounterSection from "./CounterSection";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const heroText = ["Seamless Salon", "Experience,", "Anytime"];
  const subText = ["Managing your salon, from", "bookings to billing made simple"];




  return (
    <>
    <div className="container-fluid hero-section text-dark" style={{backgroundColor: "#f5f5f5"}} >
      {/* HERO TEXT */}
      <div className="row">
        <div className="col-12 mt-5 pt-5 px-4 px-sm-5 hero-text">
          {heroText.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-end gap-2 overflow-hidden mb-2"
            >
              {/* Image box for 2nd word */}
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="hero-img-box"
                >
                  <img
                    className="w-100 h-100 object-fit-cover rounded"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt="ochi"
                  />
                </motion.div>
              )}

              {/* Text animation */}
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="hero-heading fw-bold text-uppercase"
               >
                {item}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>

      {/* SUBTEXT + CTA */}
      <div className="row border-top border-secondary mt-5 pt-4 pb-4 px-2 px-sm-4 align-items-center justify-content-between">
        {/* Sub text */}
        <div className="col-12 col-sm-8 d-flex flex-column flex-sm-row gap-3 mb-3 mb-sm-0">
          {subText.map((item, i) => (
            <p key={i} className="fs-5 fw-normal m-0">
              {item}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <div className="col-auto d-flex gap-3 align-items-center start-project">
          <motion.div
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            className="px-4 py-2 border rounded-pill text-uppercase fs-5 fw-medium transition"
          >
            Ready to Glow
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            className="fs-4 p-2 border rounded-circle"
          >
            <MdArrowOutward />
          </motion.div>
        </div>
      </div>
    
    </div>

<Marquee />
<About />
<CounterSection />
<Featured />
<AdvertisePage />
<StartProject />
<Footer />

</>
  );
}

export default App;
