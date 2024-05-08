import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);  // State for mobile menu toggle

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-10 py-6 transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className=" text-sm md:text-2xl font-bold text-white">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ramon{" "}
              <span className="text-blue-500 text-sm md:text-3xl font-handwriting">
                G
              </span>
              arza
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a href="#projects" className="text-white hover:underline">
              Projects
            </a>
            <a href="#contact" className="text-white hover:underline">
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 bg-yellow w-full flex flex-col items-center py-2">
              <a href="#home" className="text-white py-2 hover:underline">
                Home
              </a>
              <a href="#about" className="text-white py-2 hover:underline">
                About
              </a>
              <a href="#projects" className="text-white py-2 hover:underline">
                Projects
              </a>
              <a href="#contact" className="text-white py-2 hover:underline">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    );
};

export default Navbar;
