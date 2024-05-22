"use client"

export default function ScrollingLanguages() {
    return (
      <div className="relative overflow-hidden pt-4 h-32 bg-darkPurple">
        <div className="absolute flex items-center animate-scroll whitespace-nowrap">
          <i className="devicon-html5-plain-wordmark colored text-6xl mx-4"></i>
          <i className="devicon-css3-plain-wordmark colored text-6xl mx-4"></i>
          <i className="devicon-javascript-plain colored text-6xl mx-4"></i>
          <i className="devicon-react-original-wordmark colored text-6xl mx-4"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-6xl mx-4"></i>
          <i className="devicon-python-plain-wordmark colored text-6xl mx-4"></i>
          <i className="devicon-java-plain-wordmark colored text-6xl mx-4"></i>
          {/* Add more icons as needed */}
        </div>
      </div>
    );
  }