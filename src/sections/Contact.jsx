import SectionMiniHeader from "../components/SectionMiniHeader";
import SectionHeader from "../components/SectionHeader";
// import { Link } from "react-router-dom";

import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
// import { GoDotFill } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mt-8 md:mt-10" id="contact">
            <SectionMiniHeader>CONTACT</SectionMiniHeader>
            <SectionHeader>
              Let&apos;s <span className="text-atlassianBlue">Connect</span>
            </SectionHeader>
          </div>
          <div className="text-center my-2">
            <p className="mb-3">
              I&apos;m excited to connect with others to chat about projects and
              ideas.
            </p>
            <h2
              className="relative text-sm md:text-lg text-center font-poppins font-semibold text-green-600 bg-green-300 rounded-md py-2 px-4 block"
              data-aos="flip-up"
            >
              Available For work
            </h2>
            {/* <h2
              className="relative text-sm md:text-lg text-center font-poppins font-semibold text-red-600 bg-red-300 rounded-md py-2 px-4 block"
              data-aos="flip-up"
            >
              Unavailable for work
            </h2> */}
          </div>
        </div>
        <div
          className="flex flex-row flex-wrap items-center justify-center text-center text-atlassianBlue text-xl md:text-2xl gap-3 md:gap-4 my-4"
          data-aos="zoom-in-down"
        >
          <a
            href="https://www.linkedin.com/in/praveenraj002/"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/praveenraj.webdev/"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/rajpraveen002"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            {/* <FaTwitter /> */}
            <RiTwitterXFill />
          </a>
          <a
            href="https://github.com/Praveenraj002"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
