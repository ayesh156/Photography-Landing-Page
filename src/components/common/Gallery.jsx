import {portfolioImg} from "../../constants/index.jsx";
import right_arrow from "../../assets/portfolio_img/right_arrow.png";

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="gallery-container">

            {portfolioImg.map((item, i) => (
                <a key={i} href={item.image} className={item.class}>
                    <img alt={item.name} src={item.image}/>
                    {item.name === 'img-10' && (
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 backdrop-blur-lg border-b border-gray-900 text-3xl lg:text-[39px] text-white border-none rounded cursor-pointer z-10 flex flex-col items-center justify-center space-x-2">
                            <span>See More</span>
                            <img src={right_arrow} alt="right_arrow" style={{ width: '80px' }} />
                        </button>
                    )}
                </a>
            ))}
        </div>
    );
}

export default Gallery;