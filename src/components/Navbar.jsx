import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";
function Navbar({ user }) {
  return (
    <nav className="d-flex justify-content-between align-items-center py-2 px-4">
      {/* Logo */}
      <div className="logo fw-bold fs-3" ><img src="https://dummyimage.com/80x80/000/fff.png&text=VT" style={{width: "40px", height: "40px", objectFit: "cover", marginRight:"10px", borderRadius:"30px"}} />VogueTrack</div>

      {/* Navigation Links */}
      <div className="d-flex gap-4 nav-links">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/ourwork">Our work</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/insightspage">Insights</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Right side: show username if logged in */}
      <div className="contact">
        {user ? (
          <span className="fw-semibold text-dark">
            {user.image && <img
                src={user.image}
                alt="User"
                className="rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  border: "2px solid #444",
                }}
              />}{" "} {user.username}
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
