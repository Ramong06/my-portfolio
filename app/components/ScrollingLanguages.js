"use client"

export default function ScrollingLanguages() {
    return (
      <div className="relative overflow-hidden pt-6 h-32 bg-darkPurple">
        <div className="absolute flex items-center animate-scroll whitespace-nowrap">
          <i className="devicon-html5-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-css3-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-javascript-plain colored text-6xl mx-12"></i>
          <i className="devicon-typescript-plain colored text-6xl mx-12"></i>
          <i className="devicon-react-original-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-vuejs-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-python-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-java-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-git-plain-wordmark colored text-6xl mx-12"></i>
          <i className="devicon-azuredevops-plain colored text-6xl mx-12"></i>
        </div>
      </div>
    );
  }