// App.js
import React, { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import EatPage from './EatPage';
import ExplorePage from './ExplorePage';
import ProfilePage from './ProfilePage';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleCloseProfilePage = () => {
    setSelectedProfile(null);
    setCurrentPage('about'); // Change the page back to 'about' when closing profile page
  };


  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setCurrentPage('profile');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'about':
        return <AboutPage onProfileClick={handleProfileClick} />; 
      case 'eat':
        return <EatPage />;
      case 'relax':
        return <ExplorePage />;
      case 'profile':
        return <ProfilePage profile={selectedProfile} onClose={handleCloseProfilePage}/>;
      default:
        return null;
    }
  };

  const rearrangeSections = () => {
    console.log("Function is being called");

    const trendingDiv = document.getElementById("trending");

    const sections = trendingDiv.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const cityName = section.getAttribute("data-city").toLowerCase();

      console.log("City Name:", cityName);
      console.log("Search Term:", searchTerm);

      if (cityName.includes(searchTerm.toLowerCase())) {
        console.log("Match found:", cityName);
        trendingDiv.insertBefore(section, trendingDiv.firstChild);
      } else {
        console.log("No match:", cityName);
        trendingDiv.appendChild(section);
      }
    }
  };

  return (
    <div className="App">
      {/* Pass handlePageChange function to the Header component */}
      <Header onSearch={setSearchTerm} rearrangeSections={rearrangeSections} onPageChange={handlePageChange} />
      {/* Render the corresponding page */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
