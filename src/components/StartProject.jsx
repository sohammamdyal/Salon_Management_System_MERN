import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./../styles/StartProject.css";

function StartProject() {
  const [rotateVal, setRotateVal] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotateVal(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const elements = Array.from({ length: 2 }).map((_, i) => (
    <div key={i} className="outer-circle d-grid place-items-center">
      <div className="inner-circle position-relative">
        <div
          className="rotating-dot-wrapper position-absolute top-50 start-50"
          style={{ transform: `translate(-50%, -50%) rotate(${rotateVal}deg)` }}
        >
          <div className="dot bg-white rounded-circle"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="start-section d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="start-title">Ready</h1>
      <h1 className="start-title">To</h1>
      <h1 className="start-title">Glow</h1>

      <div className="circles-wrapper d-flex gap-3">{elements}</div>

      <div className="d-flex align-items-center justify-content-center gap-3 mt-4 group">
        <button className="btn-start mb-3">start the project</button>
        <div className="btn-arrow mb-3">
          <MdArrowOutward />
        </div>
      </div>
    </div>
  );
}

export default StartProject;
