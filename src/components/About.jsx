import React from "react";
import "./../styles/About.css";

function About() {
  return (
    <div className="about-section container-fluid py-5 px-4 px-md-5">
      {/* Intro text */}
      <h2 className="about-heading">
        At VogueTrack, we empower salons with smart, stylish, and seamless{" "}
        <span>management solutions</span>,
        <span className="underline"> helping beauty professionals</span>,
        <span className="underline"> focus on creativity</span>, we
        <span className="underline"> take care of organization and growth</span>
        .
      </h2>

      {/* Divider */}
      <div className="custom-divider my-5"></div>

      {/* What you can expect */}
      <div className="row gy-4 mb-5">
        <div className="col-12 col-md-4">
          <h4 className="fw-semibold">What you can expect:</h4>
        </div>
        <div className="col-12 col-md-5">
          <p>
            With VogueTrack, you can expect effortless scheduling, streamlined
            client management, insightful analytics, and a modern solution that
            keeps your salon running at its best.
          </p>
          <p className="mt-3">
            Expect a stylish, user-friendly platform that simplifies daily
            operations, enhances client experiences, and helps your salon grow
            with confidence.
          </p>
        </div>
        <div className="col-12 col-md-3 social-links">
          <p>S :</p>
          <p>Instagram</p>
          <p>Behance</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>
      </div>

      {/* Divider */}
      <div className="custom-divider my-5"></div>

      {/* Our approach */}
      <div className="row gy-4 align-items-start">
        <div className="col-12 col-md-6">
          <h1 className="fw-bold mb-3">Our approach:</h1>
          <button className="btn btn-dark rounded-pill d-flex align-items-center gap-2 px-4 py-3">
            READ MORE <span className="dot"></span>
          </button>
        </div>
        <div className="col-12 col-md-6">
          <div className="about-image">
          <video
              className="video"
              src="/images/about.mp4"
              muted
              loop
              autoPlay
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
