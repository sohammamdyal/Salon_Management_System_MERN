import React, { useState } from 'react'
import "./../styles/Highlightss.css"
import { motion } from 'framer-motion';
import Footer from './Footer';
const Highlightss = () => {
    const data = [
        {id: 1, title: "STYLE", image: "feature1", subArr: ["CLASSIC CUTS, TRENDY STYLES, BLOW-DRY, AND MORE."] },
        {id: 2, title: "POSE", image: "feature2", subArr: ["HIGHLIGHING, BALANCE, FULL COLOR, AND ROOT TOUCH-UPS"] },
        {id: 3, title: "FREGRENCE", image: "feature3", subArr: ["KERATIN, HAIR SPA, DANDRUFF & SCALP TREATMENTS."] },
        {id: 4, title: "GLOW", image: "feature4", subArr: ["BEARD TRIMMING, SHAVING, AND STYLING."] },
        {id: 5, title: "GLOW", image: "feature4", subArr: ["FACIALS, CLEANUPS, AND SKIN POLISHING."] },
      ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

      const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };
    
  return (
    <div>
        <div className="container-fluid pt-5 px-4 px-md-5 mb-5">
      <h1 className="fw-bold featured-heading">Our Highlights</h1>
      <div className="custom-divider my-4"></div>

      <div className="row gy-5 gx-4">
        {data.map((card, no) => (
          <div
            key={no}
            className="col-12 col-md-6"
            onMouseEnter={() => handleMouseEnter(no)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/services/${card.id}`)}
            style={{ cursor: "pointer"}}
          >
            <h3 className="d-flex align-items-center gap-2 mb-3 fs-5 fw-light">
              <span className="dot" /> {card.title}
            </h3>

            <div className="position-relative project-card">
              {hoveredIndex === no && (
                <h2 className="hover-title d-none d-md-flex position-absolute">
                  {card.title.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                      className="d-inline-block"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </h2>
              )}
              <div className={`project-image ${card.image}`}></div>
            </div>

            <div className="mt-3 d-flex flex-wrap gap-2">
              {card.subArr.map((tag, index) => (
                <button key={index} className="btn btn-outline-dark btn-sm rounded-pill tag-btn">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

<Footer />      
    </div>
  )
}

export default Highlightss
