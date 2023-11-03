import SectionMiniHeader from "../components/SectionMiniHeader";
import SectionHeader from "../components/SectionHeader";

// Images
import WebDevImage from "../assets/Images/web-development.png";
import MentorImage from "../assets/Images/mentor-image.png";

const Services = () => {
  return (
    <>
      <div className="mt-12 md:mt-24" id="services">
        <SectionMiniHeader>SERVICES</SectionMiniHeader>
        <SectionHeader>Services I Offer</SectionHeader>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center my-4">
          <h2 className="text-xl md:text-2xl font-poppins font-semibold">
            You don’t just need a website, you need a{" "}
            <span className="text-atlassianBlue">high-performing</span> website.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 my-6">
          <div
            className="flex flex-col items-center justify-center text-center bg-cardViolet pt-6 rounded-sm drop-shadow-lg w-full md:w-2/5"
            data-aos="zoom-out-right"
          >
            <div className="px-2 py-4 flex flex-col items-center gap-3 text-center justify-center">
              <div className="w-84">
                <img src={WebDevImage} alt="Image" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-atlassianBlue">
                  E2E Web Development
                </h1>
              </div>
              <div>
                <p className="">
                  When I say High-performing website: more than aesthetics, it
                  establishes you as an expert, earning visitor&apos;s trust.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center text-center bg-cardBlue  rounded-sm drop-shadow-lg w-full md:w-2/5"
            data-aos="zoom-out-left"
          >
            <div className="px-2 py-4 flex flex-col items-center gap-3 text-center justify-center">
              <div className="w-84">
                <img src={MentorImage} alt="Image" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-atlassianBlue">
                  Ed Content Creation
                </h1>
              </div>
              <div>
                <p className="">
                  Just launched an Instagram page focused on web development
                  tips and resources for building a successful career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
