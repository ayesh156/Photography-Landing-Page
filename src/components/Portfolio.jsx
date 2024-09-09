import noah from '../assets/noah-buscher-1-kPytLsVkY-unsplash-PhotoRoom.png';
import {portfolioItems} from '../constants/index.jsx';
import down_arrow from '../assets/down-arrow.svg'
import ImageSlider from "./common/ImageSlider.jsx";
import React, { useState } from 'react';
import Gallery from "./common/Gallery.jsx";

const AboutusSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="relative min-h-screen bg-primary-black">

            {/* Main Section */}
            <div className="relative h-[2250px] lg:h-[1170px] pt-[76px]">

                <div className="flex flex-col justify-between">
                    {/* Left Section */}
                    <div
                        className="lg:mx-[120px] font-[400] text-5xl font-['Cormorant'] text-center lg:text-right lg:text-[70px] lg:leading-[85px] text-white">
                        <span>PORTFOLIO</span>
                    </div>

                    {/* Right Section */}
                    <div
                        className="lg:mx-[120px] text-center mt-8 lg:mt-[55px] lg:text-right">
                        <div className="lg:flex lg:justify-end">
                            <ul className="flex flex-col lg:flex-row gap-2 lg:gap-0 font-['Cormorant']">
                                {portfolioItems.map((item, i) => (
                                    <li key={i} className="lg:ml-[68px]">
                                        <button
                                            onClick={() => setActiveIndex(i)} // Set active index on click
                                            className={` text-2xl lg:text-3xl capitalize ${activeIndex === i ? 'text-white' : 'text-primary-white'}`} // Conditionally apply text-white
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div
                    className="absolute top-[372px] w-full">
                    <Gallery />
                </div>
            </div>


        </div>
    );

}

export default AboutusSection;
