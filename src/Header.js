// Header.js
import React, { useState } from 'react';
import Homepage from './Homepage';

function Header({ onSearch, rearrangeSections , onPageChange  }) {
    const [currentPath, setCurrentPath] = useState("/");

    const handleNavigation = (path) => {
        setCurrentPath(path);
    };

    return (
        <header>
            <div>
                <img src='pictures/logo.png'></img>
                <input type="text" placeholder="Search....." onChange={(e) => onSearch(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass" onClick={rearrangeSections}></i>

            </div>
            <div>
            <div>
    
        <button onClick={() => onPageChange('home')}>Home</button>
        <button onClick={() => onPageChange('about')}>About</button>
        <button onClick={() => onPageChange('eat')}>Eat</button>
        <button onClick={() => onPageChange('relax')}>Explore</button>
      </div>
            </div>
            <div>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </header>
    );
}
export default Header;
