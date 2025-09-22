import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../styles/BookingForm.css";
import { useParams } from "react-router-dom";

const BookingForm = ({ serviceId, onClose }) => {
    const { id } = useParams();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      date: "",
      time: "",
      seat: "",
    });
const [service, setService] = useState(null);
  

const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  const seats = ["Seat 1", "Seat 2", "Seat 3", "Seat 4"];

  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch(`http://localhost:5000/services/${id}`);
      const data = await res.json();
      setService(data);
    };
    fetchService();
  }, [id]);
  if (!service) return <p>Loading service details...</p>;

//   useEffect(() => {
//     fetch(`http://localhost:5000/services/${serviceId}`)
//       .then((res) => res.json())
//       .then((data) => setService(data))
//       .catch((err) => console.error(err));
//   }, [serviceId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const bookingData = {
        ...formData,
        serviceTitle: service.title,
        servicePrice: service.price,
        serviceDuration: service.duration,
      };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then(() => {
        alert("Booking Confirmed ✅");
        onClose();
      })
      .catch((err) => console.error(err));
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="booking-modal">
    <div className="booking-card p-4">
      <button className="btn-close" onClick={onClose}></button>

      <h2 className="fw-bold mb-4">Book Your Appointment</h2>

      {/* ✅ Service details */}
      <div className="mb-4 p-3 border rounded bg-light">
        <h4>{service.title}</h4>
        <p className="mb-1"><strong>Price:</strong> {service.price}</p>
        <p className="mb-0"><strong>Duration:</strong> {service.duration}</p>
      </div>

      {/* ✅ Multi-step booking form */}
      {step === 1 && (
        <div>
          <label className="form-label">Select Date:</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
          />
          <button className="btn btn-dark mt-3" onClick={handleNext}>
            Next
          </button>
        </div>
      )}

{step === 2 && (
        <div>
          <label className="form-label fw-semibold">Select Time Slot</label>
          <div className="d-flex flex-wrap gap-2">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                className={`btn ${formData.time === slot ? "btn-dark" : "btn-outline-dark"} rounded-pill`}
                onClick={() => setFormData({ ...formData, time: slot })}
              >
                {slot}
              </button>
            ))}
          </div>
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-secondary" onClick={handlePrev}>
              Back
            </button>
            <button className="btn btn-dark" onClick={handleNext} disabled={!formData.time}>
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <label className="form-label">Select Seat:</label>
          <select
            name="seat"
            className="form-select"
            value={formData.seat}
            onChange={handleChange}
          >
            <option value="">Choose a seat</option>
            <option value="Seat 1">Seat 1</option>
            <option value="Seat 2">Seat 2</option>
            <option value="Seat 3">Seat 3</option>
          </select>
          
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-secondary" onClick={handlePrev}>
              Back
            </button>
            <button className="btn btn-dark" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h5>Confirm Your Booking</h5>
          <p><strong>Service:</strong> {service.title}</p>
          <p><strong>Price:</strong> {service.price}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Seat:</strong> {formData.seat}</p>
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-secondary" onClick={handlePrev}>
              Back
            </button>
            <button className="btn btn-success" onClick={handleConfirm}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default BookingForm;
