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

function App() {

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
            <FloatingWhatsApp phoneNumber="+94 783233760" avatar={whatsappUser}  accountName="Unknown User" className="text-primary-black"/>

        </>
    )
}

export default App;
