import React from 'react';
import './Explore.css';

const ExplorePage = () => {
  return (
    <div className="containerx">
      <h1>Discover Our Journey</h1>
      <div className="contentx">
        {/* Left Image with Text */}
        <div className="image-text-containerx">
          <div className="image-containerx">
            <img
              src="pictures/explore1.png"
              alt="Hikers on a mountain trail"
              className="image-left"
            />
          </div>
          <div className="text-container">
            <p>
              TravelTales Cafe is a cozy spot nestled in a bustling neighborhood,
              offering a variety of dishes inspired by global travels.
            </p>
            <p>
              The founders, avid travelers Sarah and Alex, have a passion for exploring
              new cultures and bringing those experiences to your table. With a menu
              curated from their travels, each dish has a story of discovery and taste.
            </p>
          </div>
        </div>


        {/* Right Image with Text */}
        <div className="image-text-containerx">
          <div className="text-container">
            <p>
              Step into TravelTales Cafe and embark on a gastronomic journey that
              celebrates the fusion of flavors and adventures.
            </p>
            <p>
            At TravelTales Cafe, the culinary adventure extends beyond the plate.
            Sarah and Alex have handpicked a selection of beverages that complement
            the cuisine, making your virtual journey all-encompassing.
          </p>
          </div>
          <div className="image-containerx">
            <img
              src="pictures/explore2.png"
              alt="Busy street scene"
              className="image-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
