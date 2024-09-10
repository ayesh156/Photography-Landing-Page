import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Benefit from "./components/Benefit.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceList from "./components/PriceList.jsx";
import CTAFooter from "./components/CTAFooter.jsx";

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
        </>
    )
}

export default App;
