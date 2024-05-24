import React from 'react';

const projects = [
  {
    title: 'Project One',
    image: './images/pokedex.png',
    description: 'A brief description of Project One.',
    link: 'https://project-one.com',
  },
  {
    title: 'Project Two',
    image: './images/game-blog.png',
    description: 'A brief description of Project Two.',
    link: 'https://project-two.com',
  },
  {
    title: 'Project Three',
    image: './images/twitter-clone.png',
    description: 'A brief description of Project Two.',
    link: 'https://project-two.com',
  },
  {
    title: 'Project Four',
    image: './images/ask-winston.png',
    description: 'A brief description of Project Two.',
    link: 'https://project-two.com',
  },
  // Add more projects as needed
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="relative group">
          <div className="relative w-full h-65 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-fit" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 underline">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
