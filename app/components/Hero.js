import Image from "next/image";
import ParticleEffect from "./ParticleEffect";

const Hero = () => {
  return (
    <div className="relative min-h-screen h-screen flex flex-col items-center text-center px-4 overflow-hidden text-white" id="home">
      <ParticleEffect />
      <div className="absolute inset-0 bg-violet-950 bg-opacity-50"></div>
      <div className="relative z-10 pt-[120px]"> {/* Adjust the padding top as needed */}
        <h1 className="text-2xl md:text-4xl font-bold font-poppins text-lime-500">
          Ramon Garza
        </h1>
        <p className="text-sm md:text-xl font-poppins">
          Web Developer | Digital Marketer | Problem Solver
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
