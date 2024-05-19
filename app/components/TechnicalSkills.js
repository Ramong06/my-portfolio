import SkillTreeComponent from "./SkillTree";

const TechnicalSKills = () => {
    return (
      <div
        id="techSkills"
        className="relative pt-16 md:pt-24 w-full min-h-screen justify-center flex flex-col md:flex-row bg-black"
      >
        <div className="container flex flex-col md:flex-row flex-1 items-center justify-center p-6">
          <div className="w-full">
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
          className="absolute bottom-5 text-sm md:text-2xl underline decoration-2 hover:no-underline cursor-pointer"
        >
          Contact Me ↓
        </a>
      </div>
    );
};

export default TechnicalSKills;