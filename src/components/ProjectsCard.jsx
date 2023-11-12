/* eslint-disable react/prop-types */
const ProjectsCard = ({ title, description, demo, repo }) => {
  return (
    <>
      <div className="bg-white w-full md:h-[460px] lg:w-[350px] lg:h-[400px] p-4 rounded-sm drop-shadow-md hover:drop-shadow-2xl cursor-pointer transition duration-300">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-atlassianBlue font-poppins font-bold text-xl md:text-2xl my-2 md:my-4">
            {title}
          </h1>
          {/* {courseBasedProject ? (
            <p className="relative text-xs md:text-xs text-center font-poppins font-semibold text-gray-600 bg-gray-300 rounded-md py-1 px-2 flex flex-row items-center justify-center mb-4">
              Course Based Project
            </p>
          ) : (
            <p className="relative text-xs md:text-xs text-center font-poppins font-semibold text-green-600 bg-green-300 rounded-md py-1 px-2 flex flex-row items-center justify-center mb-4">
              Own Side project
            </p>
          )} */}
          <p>{description}</p>
          <div className="w-full my-6 md:my-8 flex flex-col gap-4">
            <a
              href={demo}
              className="bg-atlassianBlue w-full py-2 border-2 border-atlassianBlue text-white font-poppins rounded-md  hover:bg-atlassianLightBlue hover:text-atlassianBlue font-semibold transition duration-300"
            >
              Demo
            </a>
            <a
              href={repo}
              className="bg-atlassianBlue w-full py-2 border-2 border-atlassianBlue text-white font-poppins rounded-md hover:bg-atlassianLightBlue hover:text-atlassianBlue font-semibold transition duration-300"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
