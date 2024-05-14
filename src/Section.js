// Section.js
import React from 'react';
import Overlay from './Overlay';

function Section({ city, images }) {
    return (
        <div className="section" data-city={city}>
            <p>{city}</p>
            <div>
                <img src="pictures/profile/profile.jpg" alt="profile pic" className="profile" height="50px" width="50px" />
                <div className="demo">
                    {images.map((image, index) => (
                        <div className="image-container" key={index}>
                            <img src={image.src} alt={image.alt} height="300px" width="300px" />
                            <Overlay text={image.overlayText} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section;
