import Image from "next/image";
import Cube from "./Cube";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center text-center px-4 overflow-hidden bg-darkPurple text-white" id="home">
      <div className="absolute inset-0 bg-darkPurple bg-opacity-50"></div>
      <div className="relative z-10 pt-[120px]"> {/* Adjust the padding top as needed */}
        <h1 className="text-2xl md:text-4xl font-bold font-poppins text-lime-500">
          Ramon Garza
        </h1>
        <p className="text-sm md:text-xl font-poppins">
          Web Development | Digital Marketing | Problem Solver
        </p>
      </div>
      <div className="relative z-10 mt-6 w-full" style={{ height: '600px' }}>
        <Cube />
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

