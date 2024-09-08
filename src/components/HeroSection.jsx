import noah from '../assets/noah-buscher-1-kPytLsVkY-unsplash-PhotoRoom.png';
import {socialIcons} from '../constants/index.jsx';

const HeroSection = () => {

    return (
        <div className="relative min-h-screen bg-black text-white">

            {/* Main Section */}
            <div className="relative grid grid-cols-2 h-[1024px]">
                {/* Left Section */}
                <div className="bg-[#233942]">

                </div>

                {/* Right Section */}
                <div className="relative flex justify-center items-center z-10 bg-black p-10">
                    {/* Overlay Text */}
                    <div className="absolute bottom-[250px] left-[183px] w-[326px] z-20">
                        <p className="text-[22px] text-[#898D92]">
                            Pellentesque Mauris A Lobortis In Bibendum Sed Lobortis Semper.
                            Eget Eu Vel Eu Vitae.
                        </p>
                    </div>

                </div>

                {/* Centered Image */}
                <img
                    src={noah}
                    alt="Photography"
                    className="absolute inset-0 mx-auto my-auto object-contain h-[851px] mt-[173px] w-auto opacity-90 z-10"
                />

                {/* Left side Text */}
                <div
                    className="leading-[109px] text-[90px] absolute left-[120px] font-[400] top-[345px] font-['Cormorant'] z-30">
                    <span>PHOTO</span><br/>
                    <span className="ml-24">GRAPHY</span>
                </div>

                {/* Order Now Button */}
                <div className="absolute bottom-[101px] left-1/2 transform -translate-x-1/2 w-[238px] h-[66px] z-30">
                    <button
                        className="text-[#898D92] text-[26px] border-[1.5px] border-white py-2 px-6 w-full h-full hover:bg-white hover:text-black transition">
                        Order Now
                    </button>
                    {/* Removing part of the right-side border */}
                    <div className="absolute right-[-1px] top-4 h-1/2 w-[3px] bg-black z-40"></div>
                </div>
        </div>

    {/* Social Links */
    }
    <div className="absolute right-[108px] top-[115px] z-50">
        <div className="flex flex-col items-center space-y-6">
            {/* Vertical Line */}
            <div className="h-[215px] w-[2px] bg-[#233942]"></div>

            {/* Icons */}
            {socialIcons.map((item, i) => (
                <a key={i} href="#" className="py-4">
                <img src={item.image} alt=""/>
                        </a>
                    ))}

                    {/* Vertical Line */}
                    <div className="h-[215px] w-[2px] bg-[#233942]"></div>
                </div>
            </div>
        </div>
    );

}

export default HeroSection;
