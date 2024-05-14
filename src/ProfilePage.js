import React from 'react';
import './Profile.css';
const ProfilePage = ({ profile, onClose }) => {
  return (
    <div className="travel-journal">
      <div className="header">
        <div className="profile-image">
          <img src={profile.imageUrl} alt="Travel Journal" />
        </div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>Exploring the world through</p>
          <div className="icons">
            <span>Experience</span>
            <span>Connection</span>
            <span>Discovery</span>
          </div>
          <div className="actions">
            <button>Follow</button>
            <button>message</button>
          </div>
        </div>
      </div>
      <div className="categories">
        <span>Local</span>
        <span>Cultural</span>
        <span>Accommodation</span>
      </div>
      <div className="gallery">
        <div className="gallery-item">
          <img src="pictures/dishes/chicken.jpg" alt="Local Cuisine" />
        </div>
        <div className="gallery-item">
          <img src="pictures/dishes/potato.jpg" alt="Cultural Dish" />
        </div>
        <div className="gallery-item">
          <img src="pictures/taiwan/image1.jpg"alt="Accommodation" />
        </div>
        <div className="gallery-item">
          <img src="pictures/paris/image3.jpg" alt="Textile" />
        </div>
        <div className="gallery-item">
          <img src="pictures/dishes/pasta.jpg"alt="Architecture" />
        </div>
        <div className="gallery-item">
          <img src="pictures/dishes/figs.jpg" alt="Crafts" />
        </div>
      </div>
    </div>
  );
};

 export default ProfilePage;