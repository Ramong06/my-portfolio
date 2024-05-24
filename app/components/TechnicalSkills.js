import SkillTreeComponent from "./SkillTree";
import ProjectGrid from "./ProjectGrid"; // Ensure this is the correct path to your ProjectGrid component

const TechnicalSkills = () => {
  return (
    <div
      id="techSkills"
      className="relative md:pt-24 w-full min-h-screen justify-center flex flex-col md:flex-row bg-darkPurple"
    >
      <div className="container flex flex-col md:flex-row flex-1 items-center justify-between p-6 gap-6">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <ProjectGrid />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5">
          <SkillTreeComponent />
        </div>
      </div>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-5 text-sm md:text-2xl underline decoration-2 hover:no-underline cursor-pointer text-white"
      >
        Contact Me ↓
      </a>
    </div>
  );
};

export default TechnicalSkills;
