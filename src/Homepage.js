// Homepage.js
import React, { useState } from 'react';
import Section from './Section';
import './Homepage.css';
import CommentSection from './CommentSection';
function Homepage() {
    
    return (
        <div>

            <div id="trending">
                <Section city="Taiwan" images={[{ src: "pictures/taiwan/image1.jpg", alt: "Street pic" , overlayText: "Taiwan Picture"},{ src: "pictures/taiwan/image2.jpg", alt: "", overlayText: "Taiwan Picture" },{ src: "pictures/taiwan/image3.jpg", alt: "" , overlayText: "Taiwan Picture" },{ src: "pictures/taiwan/image4.jpg", alt: "" , overlayText: "Taiwan Picture" },{ src: "pictures/paris/image5.jpg", alt: "" , overlayText: "Taiwan Picture" } /* Add other images */]} />
                <Section city="Paris" images={[{ src: "pictures/paris/image1.jpg", alt: ""  , overlayText: "Paris Picture"},{ src: "pictures/paris/image2.jpg", alt: ""  , overlayText: "Paris  Picture"},{ src: "pictures/paris/image3.jpg", alt: "" , overlayText: "Paris Picture"} ,{ src: "pictures/paris/image4.jpg", alt: ""  , overlayText: "Paris Picture"},{ src: "pictures/paris/image5.jpg", alt: ""  , overlayText: "Paris Picture"}]} />
                {/* Add more sections as needed */}
            </div>
            <CommentSection />
        </div>
    );
}

export default Homepage;
