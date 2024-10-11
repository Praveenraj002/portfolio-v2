// Components
import SectionHeader from "../components/SectionHeader";
import SectionMiniHeader from "../components/SectionMiniHeader";

// Assets
import PraveenImage from "../assets/praveen.jpg";
import avasoft from "../assets/ZEB-Header.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="about">
        <SectionMiniHeader>ABOUT</SectionMiniHeader>
        <SectionHeader>Know more about me</SectionHeader>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row items-center justify-center my-8">
          <div className="w-1/2 lg:w-60" data-aos="zoom-in">
            <img
              src={PraveenImage}
              alt="Image"
              className="w-full h-full rounded-sm drop-shadow-lg cursor-pointer hover:drop-shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col items-center  text-center lg:text-start lg:items-start">
            <p className="mb-3">
              Hello! My full name is{" "}
              <span className="text-atlassianBlue">Praveen Raj SL.</span>{" "}
              I&apos;m from Chennai, Tamil Nadu, India. I Build things for the
              web. My interest in web development started back in 2019 when i
              decided to do something in the C-19 Pandemic lockdown.
            </p>
            <p>
              Fast-forward to today, Im currently working in{" "}
              <Link
                className="text-atlassianBlue"
                to={"https://zeb.co/"}
              >
                Zeb
              </Link>{" "}
              as a Full Stack AI Engineer where I am actively
              engaged in learning and building projects utilizing
              cutting-edge technologies.
            </p>
            <img src={avasoft} alt="company-logo" className="w-28 md:36 my-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
