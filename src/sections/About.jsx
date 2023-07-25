// Components
import SectionHeader from "../components/SectionHeader";
import SectionMiniHeader from "../components/SectionMiniHeader";

// Assets
import PraveenImage from "../assets/praveen.jpg";

const About = () => {
  return (
    <>
      <div id="about">
        <SectionMiniHeader>ABOUT</SectionMiniHeader>
        <SectionHeader>Know more about me</SectionHeader>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row items-center justify-center my-8">
          <div className="w-1/2 lg:w-60">
            <img
              src={PraveenImage}
              alt="Image"
              className="w-full h-full rounded-sm drop-shadow-lg cursor-pointer hover:drop-shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-start">
            <p className="mb-3">
              Hello! My full name is{" "}
              <span className="text-atlassianBlue">Praveen Raj SL.</span>{" "}
              I&apos;m from Chennai, Tamil Nadu, India. I Build things for the
              web. My interest in web development started back in 2019 when i
              decided to do something in the C-19 Pandemic lockdown.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at 2
              startup E-learning companies namely{" "}
              <span className="text-atlassianBlue">Techsnap</span> where i
              worked as a Front end development Intern and <span className="text-atlassianBlue">DevTown</span>{" "}
              where i worked as a web development Intern and where i started my
              career as a web developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
