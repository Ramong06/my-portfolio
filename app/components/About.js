import SkillTreeComponent from "./SkillTree";

const About = () => {
    return (
      <div
        id="about"
        className="w-full min-h-screen flex flex-col md:flex-row bg-neutral-950"
      >
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center p-6">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <img
                src="./images/IMG_1196.jpg"
                alt="Ramon Garza"
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover mx-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <SkillTreeComponent />
        </div>
      </div>
    );
};

export default About;
