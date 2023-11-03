/* eslint-disable react/prop-types */
const WorkflowCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start text-start bg-atlassianLightBlue pt-6 rounded-sm drop-shadow-lg w-full lg:w-[450px] lg:h-[300px] mt-4 lg:mt-6 hover:drop-shadow-xl cursor-pointer"
        data-aos="zoom-in-up"
      >
        <div className="px-4 py-4 flex flex-col items-start gap-3 text-start justify-start">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-atlassianBlue">
              {props.number}
            </h1>
            <h1 className="text-2xl my-4 font-bold font-poppins text-atlassianBlue">
              {props.title}
            </h1>
          </div>
          <divc>
            <p className="pb-4">{props.content}</p>
          </divc>
        </div>
      </div>
    </>
  );
};

export default WorkflowCard;
