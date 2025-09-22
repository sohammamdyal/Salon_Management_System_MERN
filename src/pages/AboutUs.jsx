import React from 'react'
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import "./../styles/AboutUs.css"
import OurStory from './OurStory';
import Highlightss from '../components/Highlightss';

const AboutUs = () => {
    const heroText = ["About Us", "Crafting looks","with a touch", "of modern artistry."];
  const subText = ["For public and private companies", "From the first pitch to IPO"];
  return (
    <div>
       <div className="container-fluid hero-section text-dark" style={{backgroundColor: "#cdea68"}}>
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
               <div className="custom-divider "></div>
            </div>
           
          </div>
          
        
        </div>

        <OurStory />
        <Highlightss />
    </div>
  )
}

export default AboutUs
