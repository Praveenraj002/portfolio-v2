/* eslint-disable react/prop-types */
const ProjectsCard = (props) => {
  return (
    <>
      <div className="bg-white w-full md:h-[450px] lg:w-[350px] lg:h-[400px] p-4 rounded-sm drop-shadow-md hover:drop-shadow-2xl cursor-pointer transition duration-300">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-atlassianBlue font-poppins font-bold text-xl md:text-2xl my-4 md:my-6">
            {props.title}
          </h1>
          <p>{props.description}</p>
          <div className="w-full my-6 md:my-8 flex flex-col gap-4">
            <a
              href={props.demo}
              className="bg-atlassianBlue w-full py-2 border-2 border-atlassianBlue text-white font-poppins rounded-md  hover:bg-atlassianLightBlue hover:text-atlassianBlue font-semibold transition duration-300"
            >
              Demo
            </a>
            <a
              href={props.repo}
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
