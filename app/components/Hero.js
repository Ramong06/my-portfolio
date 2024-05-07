// components/Hero.js
import ThreeScene from './ThreeScene';

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center text-white">
            <ThreeScene />
            <h1 className="text-4xl font-bold">Hello, I'm [Your Name]</h1>
            <p className="text-xl">Web Developer | Designer | Content Creator</p>
            <a href="#about-me" className="mt-10 text-lg underline decoration-2 hover:no-underline">
                Learn more about me ↓
            </a>
        </div>
    );
};

export default Hero;
