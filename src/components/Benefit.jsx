import WhyMeCard from "./common/WhyMeCard.jsx";
import { whymeItems} from "../constants/index.jsx";

const Benefit = () => {

    return (
        <div className="relative min-h-screen bg-primary-black">

            <div className="lg:h-[682px] h-[1510px] pt-[75px]">

                <div className="flex flex-col lg:flex-row justify-between">

                    <div
                        className="font-[400] text-center lg:text-left text-white lg:w-[356px] lg:mx-[120px] mx-8">
                        <h1 className="text-5xl lg:text-[70px] font-['Cormorant']">WHY ME</h1>
                        <p className="text-primary-white text-[20px] pt-6">Tincidunt sagittis mollis nec suspendisse sed
                            felis massa urna
                            nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                    </div>

                    {/* Repeated Components */}
                    {whymeItems.slice(0,2).map((item, i) => (
                        <WhyMeCard key={i} left={item.left} textColor={item.textColor} topic={item.topic} desc={item.desc} img={item.img} />
                    ))}
                </div>

                <div className="flex flex-col lg:mt-[113px] lg:flex-row justify-between">
                    {/* Repeated Components */}
                    {whymeItems.slice(2,5).map((item, i) => (
                        <WhyMeCard key={i} left={item.left} textColor={item.textColor} topic={item.topic} desc={item.desc} img={item.img} />
                    ))}
                </div>

            </div>

        </div>
    );

}

export default Benefit;
