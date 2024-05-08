// components/About.js

const About = () => {
    return (
      <div id="about" className="mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center shadow-lg p-6 bg-opacity-20 bg-black rounded-lg max-w-4xl mx-auto">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 lg:mr-4">
            <img
              src="./images/IMG_1196.jpg"
              alt="Ramon Garza"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
          <div className="flex-grow max-w-lg space-y-4 items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
            <hr className="border-t border-gray-700" />
            <p className="text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              velit, lobortis ut magna varius, blandit adipiscing nunc.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Vivamus in interdum ipsum, sit amet adipiscing sem.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;
