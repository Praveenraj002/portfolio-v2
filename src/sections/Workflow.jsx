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
            title="Discovery Call"
            content="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."
          />
          <WorkflowCard
            number="02."
            title="Design phase"
            content="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you and your audience.."
          />
          <WorkflowCard
            number="03."
            title="Build phase"
            content="Once you’re happy with the designs, I will proceed to building them making sure everything is optimized to follow modern web practices, such as speed, security and reliability."
          />
          <WorkflowCard
            number="04."
            title="Launch phase"
            content="After I’ve completed the build and double checked everything alongside your approval, it’s time to launch your website. In this phase I will also provide some training videos on how you can add content to your website."
          />
        </div>
      </div>
    </>
  );
};

export default Workflow;
