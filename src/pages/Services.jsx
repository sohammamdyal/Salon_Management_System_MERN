import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./../styles/Services.css";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import BookedData from "../components/BookedData";

function Services() {
    const navigate = useNavigate();
  const data = [
    {id: 1, title: "HAIRCUT", image: "feature1", subArr: ["CLASSIC CUTS, TRENDY STYLES, BLOW-DRY, AND MORE."] },
    {id: 2, title: "COLOURING", image: "feature2", subArr: ["HIGHLIGHING, BALANCE, FULL COLOR, AND ROOT TOUCH-UPS"] },
    {id: 3, title: "TREATMENTS", image: "feature3", subArr: ["KERATIN, HAIR SPA, DANDRUFF & SCALP TREATMENTS."] },
    {id: 4, title: "BEARD GROOM", image: "feature4", subArr: ["BEARD TRIMMING, SHAVING, AND STYLING."] },
    {id: 5, title: "SKIN CARE", image: "feature4", subArr: ["FACIALS, CLEANUPS, AND SKIN POLISHING."] },
  ];
  const { id } = useParams();
  const heroText = ["Our Services", "For","Seamless Salon", "Experience,"];
  const subText = ["For public and private companies", "From the first pitch to IPO"];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [service, setService] = useState([]);


 
  // 👇 reusable handlers
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const fetchBookings = async () => {
    const res = await fetch(`http://localhost:5000/bookings?serviceId=${id}`);
    const data = await res.json();
    setBookings(data);
  };

  const fetchServices = async () => {
    const res =  await fetch(`http://localhost:5000/services/${id}` );
    const data = await res.json();
    setService(data);
  }
  
  

  useEffect(() => {
    fetchBookings();
    fetchServices();
  }, [id]);

  return (
    <>
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
            </div>
          </div>
    
          {/* SUBTEXT + CTA */}
          <div className="row border-top border-secondary mt-5 pt-4 pb-4 px-4 px-sm-5 align-items-center justify-content-between">
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
                Start the project
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
    <div className="container-fluid pt-5 px-4 px-md-5 mb-5">
      <h1 className="fw-bold featured-heading">Our Service</h1>
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

<BookedData />
    

    <Footer />
    </>
  );
}

export default Services;
