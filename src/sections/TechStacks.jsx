// Components
import SectionHeader from "../components/SectionHeader";
import SectionMiniHeader from "../components/SectionMiniHeader";
import TechStacksPill from "../components/TechStacksPill";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  // FaSass,
  FaGit,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  // SiChakraui,
  SiRedux,
  // SiMicrosoftsqlserver,
  // SiNodedotjs,
  SiAmazonaws,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiFlask,
  SiPostgresql
} from "react-icons/si";
import { BsStars } from "react-icons/bs";

const TechStacks = () => {
  return (
    <>
      <div>
        <SectionMiniHeader>TECH STACKS</SectionMiniHeader>
        <SectionHeader>Technologies I&apos;ve been working with</SectionHeader>
      </div>
      <div className="container mx-auto px-4 lg:px-20 mb-6">
        <div className="flex justify-center flex-col md:flex-row flex-wrap gap-4">
          <TechStacksPill
            icon={<FaHtml5 className="text-orange-600" />}
            title="HTML"
          />
          <TechStacksPill
            icon={<FaCss3Alt className="text-blue-700" />}
            title="CSS"
          />
          {/* <TechStacksPill
            icon={<FaSass className="text-pink-700" />}
            title="Sass"
          /> */}
          <TechStacksPill
            icon={<SiJavascript className="text-yellow-400" />}
            title="JavaScript"
          />
          <TechStacksPill
            icon={<FaBootstrap className="text-violet-800" />}
            title="Bootstrap"
          />
          <TechStacksPill
            icon={<SiTypescript className="text-blue-600" />}
            title="TypeScript"
            current
          />
          <TechStacksPill
            icon={<FaGit className="text-orange-500" />}
            title="Git/GitHub"
          />
          <TechStacksPill
            icon={<FaReact className="text-blue-500" />}
            title="React.js"
          />
          <TechStacksPill
            icon={<SiRedux className="text-violet-500" />}
            title="Redux"
            current
          />
          <TechStacksPill
            icon={<SiTailwindcss className="text-tailwind" />}
            title="Tailwind CSS"
          />
          <TechStacksPill
            icon={<SiPython className="text-blue-500" />}
            title="Python"
            current
          />
          <TechStacksPill
            icon={<SiFastapi className="text-chakra" />}
            title="Fast API"
            current
          /> 
          <TechStacksPill
            icon={<SiFlask className="text-black" />}
            title="Flask"
          /> 
          {/* <TechStacksPill
            icon={<SiMicrosoftsqlserver className="text-red-500" />}
            title="MS SQL Server 2022"
            current
          /> */}
          {/* <TechStacksPill
            icon={<SiChakraui className="text-chakra" />}
            title="Chakra UI"
          /> */}
          {/* <TechStacksPill
            icon={<SiNodedotjs className="text-green-600" />}
            title="Node.js"
          /> */}
          {/*
          />*/}
          <TechStacksPill
            icon={<SiPostgresql className="text-blue-400" />}
            title="PostgreSQL"
          /> 
          <TechStacksPill
            icon={<SiMongodb className="text-green-700" />}
            title="Mongo DB"
          />
          <TechStacksPill
            icon={<SiAmazonaws className="text-blue-900" />}
            title="Cloud services"
            current
          /> 
          <TechStacksPill
            icon={<BsStars className="text-yellow-400" />}
            title="AI Stuff"
            current
          /> 
        </div>
      </div>
    </>
  );
};

export default TechStacks;
