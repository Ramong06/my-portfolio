import React, { useState } from 'react';

const projects = [
  {
    title: 'Pizza Site',
    image: './images/pizza-site.png',
    description: 'A mock front end e-commerce homepage for a pizza restaurant built with React.',
    link: 'https://restaurant-template5406.netlify.app',
    github: 'https://github.com/Ramong06/pizza-site',
  },
  {
    title: 'Video Game Blog',
    image: './images/game-blog.png',
    description: 'A mock up of a Gaming Blog Landing Page built with Vue.js and CSS. This shows the power of Vue.js to build landing pages for your business!',
    link: 'https://game-blog5488.netlify.app/',
    github: 'https://github.com/Ramong06/game-blog-vue',
  },
  {
    title: 'Ask Winston',
    image: './images/ask-winston.png',
    description: 'A music suggestion engine built with jQuery, HTML and CSS.',
    link: 'https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/',
    github: 'https://github.com/On-Your-Marc-GO/Ask-Winston-Music-Rec-Engine',
  },
  {
    title: 'Pokedex',
    image: './images/pokedex2.png',
    description: 'A Pokedex built with Next.js, Tailwind CSS, PokeAPI this Web application has stats and info on over 300 Pokemon!',
    link: 'https://check-the-weather-three.vercel.app/pokedex',
    github: 'https://github.com/Ramong06/check-the-weather',
  }
  // Add more projects as needed
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="carousel-button left absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="carousel-button right absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
      >
        &#9654;
      </button>
      <div
        className="carousel-wrapper flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="carousel-slide min-w-full px-2">
            <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300">
                <h3 className="bg-black bg-opacity-75 text-white py-1 px-2 rounded max-w-xs text-center">{project.title}</h3>
                <p className="bg-black bg-opacity-75 text-white py-1 px-2 rounded max-w-xs text-center">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-white mt-5 py-2 px-4 rounded-full hover:bg-purple-950 transition duration-300">
                    View Project
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-white mt-5 py-2 px-4 rounded-full hover:bg-purple-950 transition duration-300">
                    GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
