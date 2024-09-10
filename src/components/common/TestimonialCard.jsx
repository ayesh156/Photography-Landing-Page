import React from "react";

const TestimonialCard = ({img,name,social,desc}) => {

    return (
    <div className="h-[331px] mx-8 lg:mx-0 lg:w-[387.5px] bg-secondary-green p-8 lg:p-[37px]">
        <div className="flex flex-row gap-7">
            <img src={img} alt=""/>
            <div className="">
                <h4 className="text-[24px] font-['Cormorant'] capitalize">{name}</h4>
                <span className="text-[15px] capitalize">{social}</span>
            </div>
        </div>
        <hr className="my-8 bg-white opacity-35"/>
        <p className="font-[300] text-[15px]">{desc}</p>
    </div>
    );

}
export default TestimonialCard;