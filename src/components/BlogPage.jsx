import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blog-section container-fluid py-5">
      <div className="container">
        {/* Blog Header */}
        <h1 className="fw-bold mb-5">Salon Insights</h1>

        <div className="row g-4">
          {/* Left Big Card */}
          <div className="col-md-6">
            <div className="big-card p-4 d-flex flex-column justify-content-between position-relative overflow-hidden">
              {/* Video as background */}
              <video
                className="video position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                src="/images/insight.mp4"
                muted
                loop
                autoPlay
                playsInline
              />

              {/* Overlay with text */}
              <div className="position-relative text-white">
                <p className="text-uppercase small fw-semibold">Business</p>
                <h3 className="fw-bold">
                  Smart Salon Management for Growth and Efficiency
                </h3>
                <p>
                  Discover how modern salon management tools can streamline
                  bookings, improve customer satisfaction, and boost overall
                  business performance.
                </p>
              </div>

              {/* Optional image inside overlay */}
              <div className="position-relative mt-3">
                <img
                  src="https://blog.tubikstudio.com/wp-content/uploads/2025/04/Sketchbook-as-a-Source-of-Inspiration-and-Idea-Search.png"
                  alt="illustration"
                  className="blog-illustration img-fluid rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="col-md-6">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-sm-12">
                <div className="card-wrapper h-100">
                  <div className="small-card p-4 bg-orange">
                    <img
                      src="https://blog.tubikstudio.com/wp-content/uploads/2025/03/UX_-6-Web-and-Mobile-Design-Projects-for-Online-Shopping.png"
                      alt="illustration"
                      className="blog-illustration "
                      style={{ marginLeft: "20px", width: "180px" }}
                    />
                  </div>
                  <p className="text-uppercase small fw-semibold mt-2">UI/UX</p>
                  <h5 className="fw-bold">
                    Ecommerce UI/UX: 6 Web and Mobile Design Projects for Online
                    Shopping
                  </h5>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-sm-12">
                <div className="card-wrapper h-100">
                  <div className="small-card p-4 bg-purple">
                    <img
                      src="https://blog.tubikstudio.com/wp-content/uploads/2025/02/Case-Study_-HotelCard-Service-Illustrations.-Digital-Art-for-User-Experience.png"
                      alt="illustration"
                      className="blog-illustration "
                      style={{ marginLeft: "20px", width: "180px" }}
                    />
                  </div>
                  <p className="text-uppercase small fw-semibold mt-2">
                    Business
                  </p>
                  <h5 className="fw-bold">
                    Case Study: HotelCard Service Illustrations. Digital Art for
                    User Experience
                  </h5>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-sm-12">
                <div className="card-wrapper h-100">
                  <div className="small-card p-4 bg-green">
                    <img
                      src="https://blog.tubikstudio.com/wp-content/uploads/2025/02/UX-Projects-for-Finance-and-Business.png"
                      alt="illustration"
                      className="blog-illustration "
                      style={{ marginLeft: "20px", width: "180px" }}
                    />
                  </div>
                  <p className="text-uppercase small fw-semibold mt-2">
                    Design
                  </p>
                  <h5 className="fw-bold">
                    Creative Process of Character Illustrations for Branding
                  </h5>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 col-sm-12">
                <div className="card-wrapper h-100">
                  <div className="small-card p-4 bg-pink">
                    <img
                      src="https://blog.tubikstudio.com/wp-content/uploads/2025/01/Case-Study_-Adam-Braun.-Creating-Personal-Website-for-Entrepreneur.png"
                      alt="illustration"
                      className="blog-illustration "
                      style={{ marginLeft: "20px", width: "180px" }}
                    />
                  </div>
                  <p className="text-uppercase small fw-semibold mt-2">
                    Case Study
                  </p>
                  <h5 className="fw-bold">
                    How Illustrations Improve User Experience in Digital
                    Products
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
