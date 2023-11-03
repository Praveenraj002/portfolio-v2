import SectionMiniHeader from "../components/SectionMiniHeader";
import SectionHeader from "../components/SectionHeader";

// Images
// import WorkflowImage from "../assets/Images/WorkflowImage.png";
import WorkflowCard from "../components/WorkflowCard";

const Workflow = () => {
  return (
    <>
      <div className="mt-12 md:mt-24" id="workflow">
        <SectionMiniHeader>WORKFLOW</SectionMiniHeader>
        <SectionHeader>My whole process</SectionHeader>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center">
          {/* <div className="w-full lg:hidden lg:w-1/2 flex justify-center items-center text-center">
            <img
              src={WorkflowImage}
              alt="image"
              className="w-full h-full items-center justify-center"
            />
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-10">
          <WorkflowCard
            number="01."
            title="Planning"
            content="Understanding the website's purpose and identifying its target audience. Additionally, selecting the right technology stack based on the website's specific requirements."
          />
          <WorkflowCard
            number="02."
            title="Designing"
            content="Creating design mockups using tools like Figma for a visual representation. Interactive prototypes to envision user interactions. Ensure responsiveness across different devices."
          />
          <WorkflowCard
            number="03."
            title="Development"
            content="Once designs are implemented, the focus will be on developing them while ensuring optimization in line with modern web practices, including aspects like speed, security, and reliability."
          />
          <WorkflowCard
            number="04."
            title="Deployment"
            content="After selecting a hosting platform, deploy the website and conduct thorough testing to ensure all functionalities operate smoothly. Continuously gather user feedback to implement enhancements and updates over time."
          />
        </div>
      </div>
    </>
  );
};

export default Workflow;
