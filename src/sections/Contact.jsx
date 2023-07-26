import SectionMiniHeader from "../components/SectionMiniHeader";
import SectionHeader from "../components/SectionHeader";
// import { Link } from "react-router-dom";

import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mt-8 md:mt-10" id="contact">
            <SectionMiniHeader>CONTACT</SectionMiniHeader>
            <SectionHeader>
              Lets get <span className="text-atlassianBlue">Started!</span>
            </SectionHeader>
          </div>
          <div className="text-center my-4">
            <h2 className="relative text-sm md:text-lg font-poppins font-semibold text-white bg-red-600 rounded-md py-2 px-4">
              I&apos;m currently looking for any opportunities, my inbox is
              always open. Whether you have a question or just want to say hi or
              want to hire me, feel free to contact me. I’ll try my best to get
              back to you!
            </h2>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center text-center text-atlassianBlue text-xl md:text-2xl gap-3 md:gap-4 my-4">
          <a
            href="reachpraveenrajsl@gmail.com"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <SiGmail />
          </a>

          <a
            href="https://www.linkedin.com/in/praveenraj002/"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/praveenraj_dev/"
            className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <div className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out">
            <FaTwitter />
          </div>
          <div className="border-2 border-atlassianBlue rounded-full p-2 hover:bg-atlassianBlue hover:text-white cursor-pointer drop-shadow-md transition duration-300 ease-in-out">
            <FaGithub />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
