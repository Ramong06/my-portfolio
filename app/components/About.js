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
      <div ref={aboutRef} className="w-full flex flex-1 items-center justify-center p-6 mt-10 bg-purple-700 large-rounded-corner fade-in">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="mb-6">
            <img
              src="./images/IMG_1196.jpg"
              alt="Ramon Garza"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center md:text-left">
            As a Software Engineer with over 4 years of hands-on experience, I specialize in creating and maintaining dynamic web and mobile applications. My expertise spans both frontend and backend development, allowing me to craft seamless, full-stack solutions. Thriving in collaborative settings, I excel in Agile environments, consistently delivering top-notch software. Driven by a passion for innovation and a commitment to lifelong learning, I am dedicated to enhancing team success through disciplined engineering practices and continuous improvement.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center md:text-left">
            Outside of work, I am a proud pet parent, avid gamer, and golf enthusiast, bringing the same enthusiasm and dedication to my hobbies as I do to my professional endeavors.
          </p>
        </div>
        <a
          href="#techSkills"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("techSkills")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-5 text-sm md:text-2xl underline decoration-2 hover:no-underline cursor-pointer text-white"
        >
          Technical Skills ↓
        </a>
      </div>
    </div>
  );
}
