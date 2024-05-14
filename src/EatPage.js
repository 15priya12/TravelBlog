import React from 'react'
import './Eat.css'
const EatPage = () => {
  return (
  
      <main>
        <h2  style={{textAlign:"center"}}>Must-Try Dishes</h2>
        <div className="dish-tiles">
          <div className="dish-tile">
            <img src="pictures/dishes/chicken.jpg" alt="Dish 1" />
            <p>Foodie Bites</p>
          </div>
          <div className="dish-tile">
            <img src="pictures/dishes/pasta.jpg" alt="Dish 2" />
            <p>Taste of Paradise</p>
          </div>
          <div className="dish-tile">
            <img src="pictures/dishes/potato.jpg" alt="Dish 3" />
            <p>Delicious Delights</p>
          </div>
          <div className="dish-tile">
            <img src="pictures/dishes/ricebowl.jpg" alt="Dish 4" />
            <p>Culinary Adventure</p>
          </div>
        </div>

        <div className="info-tiles">
          <div className="info-tile">
            <i className="fa fa-map-marker"></i>
            <h3>Explore Local Experiences</h3>
            <p>Indulge in the local culture and vibe.</p>
          </div>
          <div className="info-tile">
            <i className="fa fa-cutlery"></i>
            <h3>Savor the Moment</h3>
            <p>Delight in authentic local cuisine.</p>
          </div>
          <div className="info-tile">
            <i className="fa fa-suitcase"></i>
            <h3>Travel in Comfort</h3>
            <p>Explore the world with ease and comfort.</p>
          </div>
        </div>

        <div className="featured-dish">
          <img src="pictures/dishes/figs.jpg" alt="Featured Dish" />
          <div className="dish-info">
            <h2>Have You Tried Our Fusion Pasta?</h2>
            <p>A tantalizing fusion of flavors that will leave you craving for more.</p>
          </div>
        </div>
      </main>
  );
}

export default EatPage
