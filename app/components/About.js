import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="relative pt-16 md:pt-24 w-full min-h-screen flex flex-col md:flex-row bg-darkPurple"
    >
      <div ref={aboutRef} className="w-full flex flex-col md:flex-row items-center justify-center p-6 mt-6 bg-purple-950 large-rounded-corner fade-in">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0">
          <div className="shadow-lg border border-gray-400 rounded-full overflow-hidden">
            <img
              src="./images/IMG_1196.jpg"
              alt="Ramon Garza"
              className="w-56 h-56 md:w-64 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
            As a Software Engineer with over 4 years of hands-on experience, I specialize in creating and maintaining dynamic web and mobile applications. My expertise spans both frontend and backend development, 
            allowing me to craft seamless, full-stack solutions. Thriving in collaborative settings, I excel in Agile environments, consistently delivering top-notch software. Driven by a passion for innovation and a 
            commitment to lifelong learning, I am dedicated to enhancing team success through disciplined engineering practices and continuous improvement.
          </p>
          <p className="text-base md:text-lg pt-3 text-gray-700 leading-relaxed font-bold text-center md:text-left">
            What I bring to every project:
          </p>
          <ul className="list-disc list-inside pt-2 text-base md:text-lg text-gray-700 leading-relaxed">
            <li>Proficiency in JavaScript and JS Frameworks</li>
            <li>Collaborative mindset</li>
            <li>Mentorship</li>
            <li>Commitment to further learning and development</li>
          </ul>
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="#techSkills"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("techSkills")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-purple-950 text-white py-2 px-4 rounded-full hover:bg-lime-500 transition duration-300"
            >
              Technical Skills ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
