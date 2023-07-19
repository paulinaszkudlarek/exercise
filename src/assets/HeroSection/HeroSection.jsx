import React from 'react';
import './HeroSection.scss'

function HeroSection() {
  return (
    <div className="hero-section">
      <h2 className="hero-section__subtitle">Creative Template</h2>
      <h1 className="hero-section__title">
        <span className="hero-section__title__first-part">Welcome</span>
        <span className="hero-section__title__second-part">to MoGo</span>
      </h1>
      <button className="hero-section__button">Learn More</button>
    </div>
  );
}

export default HeroSection;
