import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";

function App() {

    return (
        <div className="h-[3000px] m-0 p-0">
            <Navbar />
            <div className="mx-auto h-[1024px] bg-[#233942]">
                <HeroSection />
            </div>
        </div>
    )
}

export default App;
