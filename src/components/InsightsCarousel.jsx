import React from "react";
import "./../styles/InsightsCarousel.css"; // custom styles

const insights = [
  {
    id: 1,
    category: "Customer Care",
    title: "Benefits of Keratin Treatments: What Clients Should Know",
    description:
      "Keratin treatments smoothen frizz, add shine, and make hair more manageable for clients seeking.",
    bg: "bg-orange",
    image:"https://blog.tubikstudio.com/wp-content/uploads/2020/08/Web-Design_-16-Basic-Types-of-Web-Pages.png"
  },
  {
    id: 2,
    category: "Treatment",
    title: "Scalp Treatments: Healthy Hair Starts at the Roots",
    description:
      "Scalp care promotes hair growth, reduces dandruff, and ensures a healthy foundation for beautiful hair.",
    bg: "bg-blue",
    image:"https://blog.tubikstudio.com/wp-content/uploads/2017/06/Mobile-UI-Design_-15-Basic-Types-of-Screens.png"
  },
  {
    id: 3,
    category: "Care",
    title: "Dandruff Care & Professional Salon Solutions",
    description:
      "Effective dandruff care includes exfoliation, nourishing products, and expert salon treatments.",
    bg: "bg-green",
    image:"https://blog.tubikstudio.com/wp-content/uploads/2021/07/The-Anatomy-of-a-Web-Page_-14-Basic-Elements.png"
  },
  {
    id: 4,
    category: "Therapy",
    title: "Hair Spa Therapy: Relaxation + Hair Nourishment",
    description:
      "A hair spa combines deep conditioning with relaxation, restoring vitality and shine.",
    bg: "bg-purple",
    image:"https://blog.tubikstudio.com/wp-content/uploads/2017/03/Color-Theory_-Brief-Guide-For-Designers.png"
  },
  {
    id: 5,
    category: "Tips",
    title: "Seasonal Hair Care Tips (Summer, Monsoon, Winter)",
    description:
      "Customized hair routines for every season ensure protection, hydration, and long-term health.",
    bg: "bg-pink",
    image:"https://blog.tubikstudio.com/wp-content/uploads/2017/11/Knock-Design-into-Shape.-Psychology-of-Shapes.png"
  },
];

const InsightsCarousel = () => {
  return (
    <div className="container-fluid py-5 insights-carousel">
      <div className="row flex-nowrap overflow-auto">
        {insights.map((item) => (
          <div
            className={`col-md-4 col-sm-6 flex-shrink-0 px-3`}
            key={item.id}
          >
            <div className={`insight-card p-4 ${item.bg}`}>
              <p className="text-uppercase small fw-semibold">
                {item.category}
              </p>
              <h4 className="fw-bold">{item.title}</h4>
              <p className="mt-3">{item.description}</p>
              <div className="mt-5">
                <img
                  src={item.image}
                  alt="illustration"
                  style={{width: "70%", height: "auto"}}
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsCarousel;
