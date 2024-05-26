"use client"
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-lightDarkPurple text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-4">
        <p className="mb-4 md:mb-0">Created by Ramon Garza and the power of Next.js</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Ramong06" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-500">
          <i className="devicon-github-original-wordmark text-6xl mx-12"></i>
          </a>
          <a href="https://www.linkedin.com/in/ramon-garza-software-engineer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-500">
          <i className="devicon-linkedin-plain-wordmark text-6xl mx-12"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
