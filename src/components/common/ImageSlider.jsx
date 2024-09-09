import {Swiper, SwiperSlide} from 'swiper/react';
import {useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {aboutImg, socialIcons} from "../../constants/index.jsx";

import {Navigation,EffectCoverflow} from 'swiper/modules';
import {CircleArrowLeft, CircleArrowRight} from "lucide-react";

const ImageSlider = () => {
    const swiper = useSwiper();

    return (
        <div className="relative min-h-screen text-white">
            <div className="swiper-custom">
            <Swiper
                effect={'coverflow'}
                slidesPerView={5}
                grabCursor={true}
                loop={true}
                spaceBetween={26}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                breakpoints={{
                    // When width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                    },
                    // When width is < 1024px
                    0: {
                        slidesPerView: 2,
                    },
                }}
                modules={[Navigation]}
                className="mt-20"
            >
                {/* Icons */}
                {aboutImg.map((item, i) => (
                    <SwiperSlide key={i} className="flex justify-center h-[358px] w-[293px]"><img className="h-full w-full object-cover" src={item.image} alt={item.name}/></SwiperSlide>
                ))}
                <div className="slider-controler">
                </div>
            </Swiper>
            <button className="swiper-button-prev"><CircleArrowLeft/></button>
            <button className="swiper-button-next"> <CircleArrowRight/></button>
            </div>
        </div>
    );

}

export default ImageSlider;
