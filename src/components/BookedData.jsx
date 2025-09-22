import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BookedData = () => {
    const { id } = useParams();
        const [bookings, setBookings] = useState([]);
    const [service, setService] = useState({});

    const fetchBookings = async () => {
        const res = await fetch(`http://localhost:5000/bookings?serviceId=${id}`);
        const data = await res.json();
        setBookings(data);
    };

    const fetchServices = async () => {
        const res = await fetch(`http://localhost:5000/services/${id}`);
        const data = await res.json();
        setService(data);
    };

    useEffect(() => {
        fetchBookings();
        fetchServices();
    }, [id]);


  return (
    <div>
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
            <h5 className="fw-bold mb-0">{booking.title}</h5>
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
      
    </div>
  )
}

export default BookedData
