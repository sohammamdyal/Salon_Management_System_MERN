import React from 'react'
import "./../styles/OurWork.css"
import { motion } from 'framer-motion';
import Footer from './Footer';
const OurWork = () => {
    const videos = [
        { id: 1, src: "https://beardo.in/cdn/shop/videos/c/vp/4baae3238dd14db185d3a06272aebe97/4baae3238dd14db185d3a06272aebe97.HD-1080p-7.2Mbps-34174552.mp4?v=0" },
        { id: 2, src: "https://beardo.in/cdn/shop/videos/c/vp/01738b7b5da24469b609d7284e744255/01738b7b5da24469b609d7284e744255.HD-1080p-7.2Mbps-34189078.mp4?v=0" },
        { id: 3, src: "https://beardo.in/cdn/shop/videos/c/vp/4baae3238dd14db185d3a06272aebe97/4baae3238dd14db185d3a06272aebe97.HD-1080p-7.2Mbps-34174552.mp4?v=0" },
        { id: 4, src: "https://beardo.in/cdn/shop/videos/c/vp/4baae3238dd14db185d3a06272aebe97/4baae3238dd14db185d3a06272aebe97.HD-1080p-7.2Mbps-34174552.mp4?v=0" },
        { id: 5, src: "https://beardo.in/cdn/shop/videos/c/vp/4baae3238dd14db185d3a06272aebe97/4baae3238dd14db185d3a06272aebe97.HD-1080p-7.2Mbps-34174552.mp4?v=0" },
      ];

      const heroText = ["Our Work", "Showcasing", "Creativity"];
  const subText = ["For public and private companies", "From the first pitch to IPO"];
  return (
    <div>
        <div className="container-fluid hero-section text-dark" style={{backgroundColor: "#f8f9fa"}}>
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
               <div className="custom-divider " style={{borderTop: "2px solid #cdea68"}}></div>
            </div>
           
          </div>
          
        
        </div>
        <div style={{backgroundColor: "#f8f9fa"}}>
        <h1 className="fw-bold work-heading text-start px-4 px-md-5 my-5">Gallery</h1>
        <div className="custom-divider mb-5 " style={{borderTop: "2px solid #004d43"}}></div>
 <div className="video-gallery-container">
 
      <div className="video-gallery">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video
              className="video"
              src={video.src}
              muted
              loop
              autoPlay
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
    </div>

    <Footer />

      
    </div>
  )
}

export default OurWork
