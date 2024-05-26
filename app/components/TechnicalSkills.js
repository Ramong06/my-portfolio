import { useEffect, useRef } from 'react';
import SkillTreeComponent from "./SkillTree";
import Carousel from "./Carousel";

const TechnicalSkills = () => {
  const techSkillsRef = useRef(null);

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

    if (techSkillsRef.current) {
      observer.observe(techSkillsRef.current);
    }

    return () => {
      if (techSkillsRef.current) {
        observer.unobserve(techSkillsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="techSkills"
      ref={techSkillsRef}
      className="relative pt-16 md:pt-24 w-full min-h-screen justify-center flex flex-col md:flex-row bg-darkPurple fade-in"
    >
      <div className="container mt-6 flex flex-col md:flex-row flex-1 items-center justify-between bg-darkPurple p-6 gap-6">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <SkillTreeComponent />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
