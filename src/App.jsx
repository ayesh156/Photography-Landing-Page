import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Benefit from "./components/Benefit.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceList from "./components/PriceList.jsx";
import CTAFooter from "./components/CTAFooter.jsx";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
            <div className="fixed bottom-10 right-4 lg:right-10 z-50">
                <FloatingWhatsApp phoneNumber="+94 783233760"  accountName="Guest" className="text-primary-black"/>
            </div>
        </>
    )
}

export default App;
