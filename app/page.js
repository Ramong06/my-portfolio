'use client'

// page.js or your specific main page file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSKills from './components/TechnicalSkills';
import ScrollingLanguages from './components/ScrollingLanguages';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ScrollingLanguages />
            <About />
            <TechnicalSKills />
        </div>
    );
};

export default Home;


