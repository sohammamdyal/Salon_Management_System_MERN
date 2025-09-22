import React, { useState } from "react";
import "./../styles/ContactForm.css"; // Import the CSS file
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
const ContactForm = () => {
    const heroText = ["Let’s create", "your perfect salon ","experience together."];
    const [formData, setFormData] = useState({
        name: "",
        salon: "",
        service: "",
        date: "",
        stylist: "",
        email: "",
        phone: "",
        notes: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:4000/send-inquiry", formData);
          alert("Inquiry sent successfully! We’ll get back to you soon.");
          setFormData({
            name: "",
            salon: "",
            service: "",
            date: "",
            stylist: "",
            email: "",
            phone: "",
            notes: "",
          });
        } catch (error) {
          console.error("Error sending inquiry:", error);
          alert("Failed to send inquiry. Please try again.");
        }
      };
  return (

    <>
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
                   <div className="custom-divider "></div>
                </div>
               
              </div>
              
            
            </div>
            <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-line">
          Hi! My name is{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="inline-input"
            placeholder="Enter your name*"
          />{" "}
          and I’d like to book a service at{" "}
          <input
            type="text"
            name="salon"
            value={formData.salon}
            onChange={handleChange}
            className="inline-input"
            placeholder="Salon name*"
          />
        </div>

        <div className="form-line">
          I’m interested in{" "}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="inline-input"
          >
            <option value="">Select a service*</option>
            <option>Haircut</option>
            <option>Hair Coloring</option>
            <option>Styling</option>
            <option>Spa</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-line">
          on{" "}
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="inline-input"
          />
        </div>

        <div className="form-line">
          I would love to be styled by{" "}
          <input
            type="text"
            name="stylist"
            value={formData.stylist}
            onChange={handleChange}
            className="inline-input"
            placeholder="Preferred stylist or Any available"
          />
        </div>

        <div className="form-line">
          You can reach me at{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inline-input"
            placeholder="Your email*"
          />{" "}
          or{" "}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="inline-input"
            placeholder="Your phone number*"
          />{" "}
          to confirm my appointment.
        </div>

        <div className="form-line">
          Optionally, I’d like to share:{" "}
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="inline-input wide"
            placeholder="Special requests or notes..."
          />
        </div>

        <div className="form-privacy">
          <input type="checkbox" required />
          <span>
            I agree with the <a href="#">Privacy Policy</a>
          </span>
        </div>

        <button type="submit" className="send-btn">
          BOOK APPOINTMENT
        </button>
      </form>
    </div>

    <Footer />

    </>
  );
};

export default ContactForm;
