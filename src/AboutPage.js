import React from 'react';
import Profile from './Profile';
import './AboutPage.css'
const AboutPage = ({ onProfileClick }) => {
  // Sample profile data
  const profiles = [
    { id: 1, name: 'John Doe', imageUrl: 'pictures/profile/jack.jpg', bio: 'Bio of John Doe' },
    { id: 2, name: 'Jane Smith',  imageUrl: 'pictures/profile/jane.png', bio: 'Bio of Jane Smith' }, 
    { id: 3, name: 'Andre Doe', imageUrl: 'pictures/profile/andrea.jpg', bio: 'Bio of Andrea' },
    { id: 4, name: 'Alex Smith',  imageUrl: 'pictures/profile/alex.jpg', bio: 'Bio of Alex' }
  ];

  const handleClick = (profile) => {
    onProfileClick(profile);
  };

 

   return (
    <div class="heading">
      <div>
     <h1>Discover</h1>
     <h3>Explore our team</h3>
     <img src="pictures/Aboutpage.png" height="250px" width="750px"></img>
     </div>
        <div class="Subheading">
          <h2>Authors</h2>
          <h3>Our adventurers!</h3>
          <div className="profiles">
        {profiles.map(profile => (
          <Profile
            key={profile.id}
            profile={profile}
            onProfileClick={handleClick} // Pass onProfileClick function to Profile component
          />
        ))}
      </div>
    </div>
    </div>
    
  )
};

export default AboutPage;
