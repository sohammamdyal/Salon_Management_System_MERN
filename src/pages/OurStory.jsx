import React from 'react'
import "./../styles/OurStory.css"
const OurStory = () => {
    const partnerships = [
        {
          id: 1,
          logo: "https://dummyimage.com/80x80/000/fff.png&text=S",
          name: "Saloon",
          desc: "Looks Salon is one of the most powerful and fastest growing salon chain brand PanIndia, that has given the hairstyling industry a new horizon. Emerging as the largest single salon chain in the country."
        },
        {
          id: 2,
          logo: "https://dummyimage.com/80x80/000/fff.png&text=.CV",
          name: "Corporate Vision",
          desc: "Our vision is to be a leading customer centric salon chain, warmly welcoming all customers for an experience which takes them on a high in terms of quality Hair, beauty & Skin services in a hygienic, relaxed, comfortable environment to make their day fabulous."
        },
        {
          id: 3,
          logo: "https://dummyimage.com/80x80/000/fff.png&text=CP",
          name: "Customer Promise",
          desc: "Our commitment is to always try to master the art of exemplary services & experience; it is our endeavor to serve with excellence. We feel under oath to provide an unwinding environment with precision, detail and purpose where you can immerse yourself in peace and luxury. We promise to deliver with consummate skill and impeccable ambience on every visit."
        },
        {
          id: 4,
          logo: "https://dummyimage.com/80x80/000/fff.png&text=HS",
          name: "History of Salon",
          desc: "Looks salon was established in January,1989 and has consistently shown year on year growth and is now a chain of 162 branches PanIndia."
        }
      ];
  return (
    <div>
        <div className="partnerships-container">
      {/* Heading */}
      <h1 className="partnerships-heading">
        We’ve built long-lasting partnerships with the most ambitious brands
        across the globe:
      </h1>

      {/* Divider */}
      <div className="divider"></div>

      {/* Grid */}
      <div className="partnerships-grid">
        {partnerships.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <h3 className="partner-name">{partner.name}</h3>
            <p className="partner-desc">{partner.desc}</p>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default OurStory
