import React from "react";
import "./hero.css";
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import HeroImage from '../Assets/hero_image.png';

const Hero = () => {
  return <div className="hero">
    {/* left column */}
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={handIcon} alt="Hand Icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="Arrow Icon" />
        </div>
    </div>
    {/* right column */}
    <div className="hero-right">
        <img src={HeroImage} alt="Hero-image" />
    </div>
  </div>;
};

export default Hero;
