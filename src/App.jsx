import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Benefit from "./components/Benefit.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceList from "./components/PriceList.jsx";
import CTAFooter from "./components/CTAFooter.jsx";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import whatsappUser from "./assets/whatsapp_user.jpeg"
import gmail from "./assets/gmail-icon.svg"
import {useState} from "react";
import EmailModal from "./components/common/EmailModal.jsx";

function App() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Portfolio />
            <Benefit />
            <Testimonial />
            <PriceList />
            <CTAFooter />
            <button onClick={() => setOpen(true)} className="fixed bottom-28 right-8 lg:right-[31px] z-50 bg-white rounded-full border border-gray-300 p-2">
                <img src={gmail} alt="gmail"/>
            </button>
            <EmailModal open={open} onClose={() => setOpen(false)} />
            <FloatingWhatsApp phoneNumber="+94 783233760" avatar={whatsappUser} accountName="Unknown User" className="text-primary-black"/>

        </>
    )
}

export default App;
