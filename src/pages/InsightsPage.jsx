import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/InsightsPage.css";
import BlogPage from "../components/BlogPage";
import InsightsCarousel from "../components/InsightsCarousel";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";

const InsightsPage = () => {
  return (
    <>
    <BlogPage />
    <div className="insights-section">
      <div className="row g-0">
        {/* Left Side */}
        <div className="col-md-6 left-panel d-flex flex-column justify-content-center p-5">
          <h1 className="fw-bold display-4 mb-4">
            Business & <br /> Management Insights
          </h1>
          <hr />
          <div className="d-flex justify-content-between text-muted small">
            <span>Salon Strategy</span>
            <span>2025</span>
            <span>5 Key Practices</span>
          </div>
          <p className="mt-4">
            To build long-term success, your salon must focus not only on
            attracting new clients but also on **retaining existing ones**.  
            Client loyalty comes from delivering consistent service quality,
            creating personalized experiences, and nurturing relationships.
          </p>
          <p className="fw-semibold mt-3">
            How to Increase Client Retention in Your Salon
          </p>
        </div>

        {/* Right Side */}
        <div className="col-md-6 right-panel d-flex align-items-center justify-content-center">
        <video
              className="video"
              src="/images/bus.mp4"
              muted
              loop
              autoPlay
              playsInline
            />
        </div>
      </div>
    </div>

    <InsightsCarousel />
    <SubscribeSection />
    <Footer />
    </>
  );
};

export default InsightsPage;
