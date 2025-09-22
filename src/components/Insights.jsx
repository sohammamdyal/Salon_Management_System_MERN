import React from "react";
import "./../styles/Insights.css";
const articles = [
    {
      id: 1,
      title: "Keratin locks in nourishment, reducing frizz and breakage.",
      author: "Keratin Treatment",
      date: "27 Aug. 25",
      image: "/images/k.jpg",
      tags: ["Nourishment", "Breakage"],
    },
    {
      id: 2,
      title: "Deep hydration therapy for soft, silky, and frizz-free hair",
      author: "Hair Spa",
      date: "08 Feb. 25",
      image: "/images/h.jpg",
      tags: ["Silky", "Soft"],
    },
    {
      id: 3,
      title: "Soothe your scalp and restore natural balance",
      author: "Dandruff Treatment",
      date: "07 Jan. 25",
      image: "/images/d.jpg",
      tags: ["Restore", "Health"],
    },
    {
      id: 4,
      title: "Targeted treatment that promotes circulation and reduces buildup",
      author: "Scalp Treatments",
      date: "09 Aug. 24",
      image: "/images/s.jpg",
      tags: ["Massage", "Circulation"],
    },
  ];

const Insights = () => {
  return (
    <div className="container-fluid insights-section">
        
    <div className="row g-4">
      {articles.map((article) => (
        <div key={article.id} className="col-12 col-md-6 col-lg-3">
          <div className="insights-card">
            {/* Image */}
            <img src={article.image} alt={article.title} />

            {/* Body */}
            <p className="insights-title">{article.title}</p>
            <p className="insights-author">
              By <span>{article.author}</span>
            </p>
            <p className="insights-date">{article.date}</p>

            {/* Tags */}
            <div className="insights-tags">
              {article.tags.map((tag, i) => (
                <span key={i} className="insights-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    
    </div>
  </div>
  );
};

export default Insights;
