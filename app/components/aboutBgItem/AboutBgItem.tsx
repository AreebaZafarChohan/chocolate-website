import React from 'react';
import { BgPropType } from '@/types/componentTypes';

const AboutBgItem: React.FC<BgPropType> = ({ bgImage, showStory, toggleStory }) => {
  return (
    <div className="about-item" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-content flex flex-col justify-center items-start">
        <div className="name">About Us</div>
        <div className="desc mt-2">
          We started our chocolate-making journey in 1995, with a vision
          to bring high-quality, handcrafted chocolates to everyone. What
          began as a small passion project has grown into a well-loved
          brand, known for its delicious variety and attention to detail.
          Today, we continue to innovate while staying rooted in the
          traditions that have defined us from the start.
        </div>
        <div className="desc text-lg leading-7 mb-4">
          {showStory
            ? "OUR STORY: Since 1995, we have been passionately creating the finest chocolates, driven by the love for craftsmanship and innovation. Our journey began with a simple idea: to make every moment sweeter with artisanal chocolates. Over the years, we have perfected our craft, using the best ingredients to ensure each bite is a celebration."
            : ""}
        </div>
        <button
          onClick={toggleStory}
          className="toggle-btn mt-4 text-orange-950
           font-semibold border-2 shadow-md p-2 rounded-lg"
        >
          {showStory ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default AboutBgItem;