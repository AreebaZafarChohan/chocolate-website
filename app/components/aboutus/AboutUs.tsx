"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AboutBgItem from "../aboutBgItem/AboutBgItem";
import OurSpeciality from "../ourSpeciality/OurSpeciality";

const AboutUs = () => {
    const [showStory, setShowStory] = useState(false);

    const changeBgHandlerNext = () => {
      const items = document.querySelectorAll(".about-item");
      document.querySelector(".about-slide")?.appendChild(items[0]);
    };
  
    const changeBgHandlerPrev = () => {
      const items = document.querySelectorAll(".about-item");
      document.querySelector(".about-slide")?.prepend(items[items.length - 1]);
    };
  
    const toggleStory = () => {
      setShowStory(!showStory);
    };
  
    // Background images array
    const bgImages = [
      "./images/bg1.jpg",
      "./images/bg2.jpg",
      "./images/bg3.jpg",
      "./images/bg4.jpg",
      "./images/bg5.jpg",
      "./images/bg6.jpg",
    ];
  
    return (
      <section>
        <div className="about-container">
        <div className="about-slide">
          {bgImages.map((image, index) => (
            <AboutBgItem
              key={index}
              bgImage={image}
              showStory={showStory}
              toggleStory={toggleStory}
            />
          ))}
        </div>
        <div className="about-buttons">
          <button className="prev" onClick={changeBgHandlerPrev}>
            <FaArrowLeft />
          </button>
          <button className="next" onClick={changeBgHandlerNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div >
        <OurSpeciality />
      </div>
      </section>
  
  );
};

export default AboutUs;
