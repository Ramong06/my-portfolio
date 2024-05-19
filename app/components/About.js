const About = () => {
    return (
        <div
            id="about"
            className="relative pt-16 md:pt-24 w-full min-h-screen justify-center flex flex-col md:flex-row bg-black"
        >
            <div className="container flex flex-col md:flex-row flex-1 items-center justify-center p-6">
                <div className="w-full">
                    <div className="mb-6">
                        <img
                            src="./images/IMG_1196.jpg"
                            alt="Ramon Garza"
                            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover mx-auto"
                        />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
                        As a Software Engineer with over 4 years of hands-on experience, I specialize in creating and maintaining dynamic web and mobile applications. My expertise spans both frontend and backend development, 
                        allowing me to craft seamless, full-stack solutions. Thriving in collaborative settings, I excel in Agile environments, consistently delivering top-notch software. 
                        Driven by a passion for innovation and a commitment to lifelong learning, I am dedicated to enhancing team success through disciplined engineering practices and continuous improvement.
                    </p>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
                        Outside of work, I am a proud pet parent, avid gamer, and golf enthusiast, bringing the same enthusiasm and dedication to my hobbies as I do to my professional endeavors.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
