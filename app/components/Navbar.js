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
        <nav className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="text-lg font-bold text-black">My Portfolio</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-black hover:underline">Home</a>
                    <a href="#about" className="text-black hover:underline">About</a>
                    <a href="#projects" className="text-black hover:underline">Projects</a>
                    <a href="#contact" className="text-black hover:underline">Contact</a>
                </div>
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                {isOpen && (
                    <div className="absolute top-full right-0 bg-yellow w-full flex flex-col items-center py-2">
                        <a href="#home" className="text-black py-2 hover:underline">Home</a>
                        <a href="#about" className="text-black py-2 hover:underline">About</a>
                        <a href="#projects" className="text-black py-2 hover:underline">Projects</a>
                        <a href="#contact" className="text-black py-2 hover:underline">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
