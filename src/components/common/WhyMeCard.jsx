const WhyMeCard = ({ left, textColor, img, topic, desc }) => (
    <div
        style={{ left: window.innerWidth >= 1024 ? `${left}` : '0' }} // Use inline style for left positioning
        className="lg:absolute mt-10 lg:mt-0 text-center lg:text-left text-white lg:w-[251px] mx-16 lg:mx-0 lg:my-[10px]"
    >
        <img src={img} alt="img1" className="mb-5"/>
        <span className={`font-[500] text-xl capitalize ${textColor}`}>{topic}</span>
        <p className={`font-[300] text-[16px] mt-5 ${textColor}`}>
            {desc}
        </p>
    </div>

);

export default WhyMeCard;