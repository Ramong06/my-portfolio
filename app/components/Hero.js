import { useState, useEffect } from "react";
import Cube from "./Cube";
import ScrollingLanguages from "./ScrollingLanguages";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home").offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="relative z-10 w-full mt-4">
        <ScrollingLanguages />
      </div>
    </div>
  );
}
