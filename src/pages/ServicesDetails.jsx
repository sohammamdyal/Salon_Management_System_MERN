import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./../styles/ServicesDetails.css";
import Insights from "../components/Insights";
import BookingForm from "./BookingForm";
import Footer from "../components/Footer";


  const marqueeItems = Array.from({ length: 4 }).map((_, index) => (
    <motion.h1
      key={index}
      initial={{ x: 0 }}
      animate={{ x: "-70%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      className="marquee-text fw-bold"
    >
      Our Selected Plan
    </motion.h1>
  ));

function ServicesDetails() {
  const { id } = useParams();
//   const service = data.find((item) => item.id === parseInt(id));
  const [service, setService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookings, setBookings] = useState([]);
  
  const fetchServices = async () => {
    const res =  await fetch(`http://localhost:5000/services/${id}` );
    const data = await res.json();
    setService(data);
  }

  const fetchBookings = async () => {
    const res = await fetch(`http://localhost:5000/bookings?serviceId=${id}`);
    const data = await res.json();
    setBookings(data);
  };
  
  useEffect(() => {
    fetchServices();
    fetchBookings();
  }, [id]);



  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  return (
    <>
    <div className="container-fluid py-5 px-4 px-md-5 service-detail">
    <h1 className="fw-bold display-4 mb-4">SERVICES</h1>

{/* Subtext from screenshot */}
<p className="fs-4 mb-5">
  Our work has helped clients secure <strong>$400M+</strong> in funding,
  wow small and global stages, and shape how the world sees them.
</p>
      <div className="row align-items-center mb-5">
        {/* Left image */}
        <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
          <img
            src={service.image}
            alt={service.title}  
            className="img-fluid rounded"
          />
        </div>

        {/* Title */}
        <div className="col-12 col-md-10">
          <h1 className="fw-bold display-4">{service.title}</h1>
        </div>
      </div>

      <div className="row">
        {/* Description Label */}
        <div className="col-12 col-md-2 fw-bold">Description:</div>

        {/* Description Content */}
        <div className="col-12 col-md-7">{service.subArr}</div>

        {/* Tags */}
        <div className="col-12 col-md-3 d-flex flex-wrap gap-2 mt-3 mt-md-0">
          {service.subArr.map((tag, i) => (
            <span key={i} className="btn btn-outline-dark btn-sm rounded-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    
    </div>
    <Insights />

    <div className="container-fluid marquee-section text-white">
      <div className="marquee-wrapper d-flex align-items-center overflow-hidden">
        {marqueeItems}
      </div>
    </div>
    <div className="about-section container-fluid py-5 px-4 px-md-5">
    <div className="row gy-4 align-items-start">
  <div className="col-12 col-md-6">
    <h1 className="fw-bold mb-3">Our Selected Plan:</h1>
    {/* fetch add the static data  */}
    <div className="col-12 col-md-10">
          <h1 className="fw-bold display-4">{service.title}</h1>
        </div>
        <div className="col-12 col-md-2 fw-bold">Description:</div>

        {/* Description Content */}
        <div className="col-12 col-md-7 mb-2">{service.subArr}</div>
        <div className="col-12 col-md-2 fw-bold">Price:</div>
        <div className="col-12 col-md-7 mb-2">{service.price}</div>

        <div className="col-12 col-md-2 fw-bold">Duration:</div>
        <div className="col-12 col-md-7 mb-5">{service.duration}</div>

        <button className="btn btn-dark rounded-pill d-flex align-items-center gap-2 px-4 py-3"
        onClick={() => setShowBooking(true)}
        >
            Book Now <span className="dot"></span>
          </button>

  </div>

  <div className="col-12 col-md-6">
    <div className="service-image-wrapper">
      <img 
        src={service.image} 
        alt={service.title} 
        className="service-image"
      />
    </div>
  </div>
</div>
{showBooking && (
        <BookingForm serviceId={service.id} onClose={() => setShowBooking(false)} />
      )}
</div>

<div className="container-fluid py-5">
  <h1 className="fw-bold display-4 mb-4">Clients’ Booked</h1>

  {bookings.length === 0 ? (
    <p>No bookings yet for this service.</p>
  ) : (
    <div className="reviews-list">
      {bookings.map((booking, i) => (
        <div
          key={i}
          className="row border-top py-4 align-items-center"
        >
          {/* Left: Company / Service name */}
          <div className="col-12 col-md-2 mb-3 mb-md-0">
          <span className="fw-bold d-block mb-2">Services Name:</span>
            <h5 className="fw-bold mb-0">{service.title}</h5>
          </div>

          {/* Middle: Services (tags) */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <span className="fw-bold d-block mb-2">Services:</span>
            <div className="d-flex flex-wrap gap-2">
              {service.subArr?.map((tag, j) => (
                <span
                  key={j}
                  className="btn btn-outline-dark btn-sm rounded-pill px-3"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Booking Details + Client */}
          <div className="col-12 col-md-7 d-flex align-items-start gap-3">
            <img
              src={service.image} // replace with booking.clientImage if available
              alt="client"
              className="rounded-circle border"
              width="60"
              height="60"
              style={{ objectFit: "cover" }}
            />
            <div>
              <h6 className="fw-bold mb-1">
                {booking.clientName || "Anonymous"}
               
              </h6>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="btn btn-outline-dark btn-sm rounded-pill">
                  {booking.date}
                </span>
                <span className="btn btn-outline-dark btn-sm rounded-pill">
                  {booking.time}
                </span>
                <span className="btn btn-outline-dark btn-sm rounded-pill">
                  {service.duration}
                </span>
                <span className="btn btn-outline-dark btn-sm rounded-pill">
                  {service.price}
                </span>
              </div>
              <p className="mb-0 text-muted fst-italic">
                “Really enjoyed the service! Looking forward to the session 🎉”
              </p>
            </div>
            <div>
            <span
                  className={`badge rounded-pill px-3 py-2 ${
                    booking.status === "Confirmed"
                      ? "bg-success"
                      : booking.status === "Pending"
                      ? "bg-warning text-dark"
                      : booking.status === "Cancelled"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {booking.status || "Pending"}
                </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  )}
</div>

<Footer />




  

    </>
  );
}

export default ServicesDetails;
