import React from "react";
import "./../styles/SubscribeSection.css";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section text-center py-5">
      <div className="container">
        <h2 className="subscribe-title">Don&apos;t want to miss anything?</h2>
        <p className="subscribe-desc">
          Get weekly updates on the newest design stories, case studies and tips
          right in your mailbox.
        </p>

        <div className="subscribe-form d-flex justify-content-center align-items-center">
          <input
            type="email"
            className="subscribe-input"
            placeholder="email"
          />
          <button className="subscribe-btn">submit</button>
        </div>
      </div>
    </section>
  );
}
