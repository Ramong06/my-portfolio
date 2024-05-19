'use client'

// page.js or your specific main page file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSKills from './components/TechnicalSkills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <TechnicalSKills />
        </div>
    );
};

export default Home;


