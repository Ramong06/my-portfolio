import SkillTreeComponent from "./SkillTree";
import Carousel from "./Carousel";

const TechnicalSkills = () => {
  return (
    <div
      id="techSkills"
      className="relative md:pt-24 w-full min-h-screen justify-center flex flex-col md:flex-row bg-darkPurple"
    >
      <div className="container flex flex-col md:flex-row flex-1 items-center justify-between p-6 gap-6">
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
