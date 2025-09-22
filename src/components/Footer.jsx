import React, { useState } from "react";
import "./../styles/Footer.css";

function Footer() {
  const linksData = [
    { head: "S:", sublink: ["Instagram", "Behance", "Facebook", "LinkedIn"] },
    {
      head: "L:",
      sublink: [
        "JM Road,Pune, India",
        "Wakad, Pune, India",
        "bhosari, Pune, India",
      ],
    },
    { head: "E:", sublink: ["sohammamdyal@gmail.com"] },
    {
      head: "M:",
      sublink: ["Home", "Services", "Our work", "About us", "Insights", "Contact us"],
    },
  ];

  const [link] = useState(linksData);

  return (
    <div className="container-fluid footer-section">
      <div className="row g-4">
        {/* Left Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
          <h1 className="footer-title">
            eye- <br /> opening
          </h1>
          <div className="footer-logo mt-4">
            <svg
              width="64"
              height="30"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.8393 10.2032C4.22951..." fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
          <h1 className="footer-title text-md-end">presentations</h1>
          <div className="row mt-5">
            <div className="col-md-8 d-flex flex-column gap-4">
              {link.slice(0, 3).map((elem, i) => (
                <div key={i}>
                  <h2 className="footer-head">{elem.head}</h2>
                  <div>
                    {elem.sublink.map((item, idx) => (
                      <p key={idx} className="footer-link">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              {link.slice(3, 4).map((elem, i) => (
                <div key={i}>
                  <h2 className="footer-head">{elem.head}</h2>
                  <div>
                    {elem.sublink.map((item, idx) => (
                      <p key={idx} className="footer-link">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
