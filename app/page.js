'use client'

// page.js or your specific main page file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
};

export default Home;


