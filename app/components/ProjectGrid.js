import React from 'react';

const projects = [
  {
    title: 'Pokedex',
    image: './images/pokedex.png',
    description: 'A Pokedex built with Next.js, Tailwind CSS, PokeAPI this Web application has stats and info on over 300 Pokemon!',
    link: 'https://check-the-weather-three.vercel.app/pokedex',
  },
  {
    title: 'Video Game Blog',
    image: './images/game-blog.png',
    description: 'A mock up of a Gaming Blog Landing Page built with Vue.js and CSS. This shows the power of Vue.js to build landing pages for your business!',
    link: 'https://game-blog5488.netlify.app/',
  },
  {
    title: 'Pizza Site',
    image: './images/pizza-site.png',
    description: 'A mock front end e-commerce homepage for a pizza restaurant built with React.',
    link: 'https://restaurant-template5406.netlify.app',
  },
  {
    title: 'Ask Winston',
    image: './images/ask-winston.png',
    description: 'A music suggestion engine built with jQuery, HTML and CSS.',
    link: 'https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/',
  },
  // Add more projects as needed
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="relative group transform transition-transform duration-300 hover:scale-105 w-full">
          <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-fit" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-shadow-md">{project.title}</h3>
            <p className="mb-4 text-shadow-md">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
