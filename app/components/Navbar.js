// components/Navbar.js
const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold text-white">My Portfolio</div>
                <div className="space-x-4">
                    <a href="#home" className="text-white hover:underline">Home</a>
                    <a href="#about" className="text-white hover:underline">About</a>
                    <a href="#projects" className="text-white hover:underline">Projects</a>
                    <a href="#contact" className="text-white hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
