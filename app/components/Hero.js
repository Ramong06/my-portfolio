// components/Hero.js
import ThreeScene from './ThreeScene'; // Assuming this is your 3D cube component

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col justify-between items-center text-center px-4">
            <div className="pt-10"> {/* Padding top to push everything down */}
                <ThreeScene />
            </div>
            <div className="z-10"> {/* Ensure text appears above the cube with a higher z-index */}
                <h1 className="text-4xl font-bold text-black">Hello, I'm Ramon Garza</h1>
                <p className="text-xl text-black">Web Developer | Software Architect | Problem Solver</p>
            </div>
            <a href="#about-me" className="mb-5 text-lg text-black underline decoration-2 hover:no-underline pb-2"> {/* Margin bottom for spacing */}
                Learn more about me ↓
            </a>
        </div>
    );
};

export default Hero;
