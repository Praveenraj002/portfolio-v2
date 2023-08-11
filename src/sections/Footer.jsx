import Logo from "../assets/Pr-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-atlassianBlue mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 justify-center items-center py-6">
            <div className="w-16 md:w-20">
              <img src={Logo} alt="Image" className="w-full h-full" />
            </div>
            <h1 className="text-white font-poppins font-semibold text-sm md:text-base">
              reachpraveenrajsl@gmail.com
            </h1>
            <h1 className="text-white font-poppins font-semibold text-base md:text-lg">
              &copy; {currentYear} Praveen Raj. All rights reserved
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
