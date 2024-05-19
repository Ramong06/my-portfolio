import Image from "next/image";
import ParticleEffect from "./ParticleEffect";

const Hero = () => {
    return (
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden text-white" id="home">
        <ParticleEffect />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold shadow-text-shadow">
            Hello, I'm Ramon Garza
          </h1>
          <p className="text-sm md:text-xl shadow-text-shadow">
            Web Developer | Software Architect | Problem Solver
          </p>
        </div>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-5 text-sm md:text-2xl underline decoration-2 hover:no-underline cursor-pointer"
        >
          Learn more about me ↓
        </a>
      </div>
    );
};

export default Hero;