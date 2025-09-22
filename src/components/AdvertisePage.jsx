import React from "react";
import "./../styles/AdvertisePage.css"; // import custom css

const AdvertisePage = () => {
  const cards = [
    {
      id: 1,
      bgColor: "#004D40", // dark green
      title: "Organization",
      subtitle: "Streamlining appointment ",
      
      subtitleStyle: "outlined", // outlined button style
      titleColor: "#B2FF59",
    },
    {
      id: 2,
      bgColor: "#111111", // black
      title: "Client",
      subtitle: "service, loyalty, and satisfaction.",
      stars: 5,
      titleColor: "white",
    },
    {
        id: 2,
        bgColor: "#111111", // black
        title: "Growth & Innovation",
        subtitle: "Empowering salons with modern",
        stars: 5,
        titleColor: "white",
      },
  ];

  return (
    <>
    <div className="advertise-container">
      {/* Heading */}
      <div className="advertise-heading">
        <h2>
          Three principles we stand behind in <br /> every part of our work:
        </h2>
      </div>
    </div>
    <div className="custom-divider my-4"></div>
    <div className="cards-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-box"
          style={{ backgroundColor: card.bgColor }}
        >
          {/* Title / Logo */}
          {card.logo ? (
            <img src={card.logo} alt={card.title} className="card-logo " />
          ) : (
            <h2 style={{ color: card.titleColor }} >{card.title}</h2>
          )}

          {/* Stars */}
          {card.stars && (
            <div className="stars">
              {"★".repeat(card.stars)}
            </div>
          )}

          {/* Subtitle */}
          <div className="card-subtitle">
            <span className={card.subtitleStyle === "outlined" ? "outlined-btn" : "filled-btn"}>
              {card.subtitle}
            </span>
         </div>
        </div>
      ))}
    </div>

    <div className="container-fluid p-0 m-0 w-100 mt-5">
      <div className="row g-0">

        {/* Top row */}
        <div className="col-12 col-md-4 vogue-img-wrapper">
          <img
            src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/1.jpg"
            alt="style 1"
            className="vogue-img"
          />
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center" style={{backgroundColor: "#004d43", color: "#cdea68",borderRadius: "10px" }}>
       
          <h2 className="fw-bold mb-3 display-5">VogueTrack</h2>
          <button className="btn btn-warning px-4 py-2 fw-bold rounded-5">
            View Collection
          </button>
        </div>

        <div className="col-12 col-md-4 vogue-img-wrapper">
          <img
            src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/6.jpg"
            alt="style 2"
            className="vogue-img"
          />
        </div>

        {/* Bottom row */}
        <div className="col-12 col-md-4 vogue-img-wrapper">
          <img
            src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/4.jpg"
            alt="style 3"
            className="vogue-img"
          />
        </div>

        <div className="col-12 col-md-4 vogue-img-wrapper">
          <img
            src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/5.jpg"
            alt="style 4"
            className="vogue-img"
          />
        </div>

        <div className="col-12 col-md-4 vogue-img-wrapper">
          <img
            src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/3.jpg"
            alt="style 5"
            className="vogue-img"
          />
        </div>

      </div>
    </div>
       </>
  );
};

export default AdvertisePage;
