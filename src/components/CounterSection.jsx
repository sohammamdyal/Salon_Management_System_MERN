import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/CounterSection.css";

const CounterSection = () => {
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);
  const [experience, setExperience] = useState(0);

  // Animate counting
  useEffect(() => {
    let projectsInterval = setInterval(() => {
      setProjects((prev) => (prev < 900 ? prev + 5 : 900));
    }, 200);

    let awardsInterval = setInterval(() => {
      setAwards((prev) => (prev < 120 ? prev + 2 : 120));
    }, 250);

    let experienceInterval = setInterval(() => {
      setExperience((prev) => (prev < 10 ? prev + 1 : 10));
    }, 300);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(awardsInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4 counter-box">
        <p className="counter-label">Customers</p>
          <h1 className="counter-number">{projects}</h1>
         
        </div>
        <div className="col-md-4 counter-box">
        <p className="counter-label">Awards</p>
          <h1 className="counter-number">{awards}</h1>
     
        </div>
        <div className="col-md-4 counter-box">
        <p className="counter-label">Years of experience</p>
          <h1 className="counter-number">{experience}</h1>
         
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
