// Components
import BlueButton from "../components/BlueButton";
import WhiteButton from "../components/WhiteButton";
import Logo from "../assets/Pr-logo.png";

import BgImageLg from "../assets/Images/bg.png";
import BgImageSm from "../assets/Images/mobileBG.png";

const HeroSm = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="relative">
          <div className="w-screen h-screen">
            <img src={BgImageSm} alt="Image" className="w-full h-full" />
          </div>

          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-white font-poppins container mx-auto px-2 m-0">
            <div className="moveInBottom w-16 md:w-20">
              <img src={Logo} alt="Image" className="w-full h-full" />
            </div>
            <h2 className="moveInBottom text-xl font-semibold">
              Hello world, this is Praveen Raj.
            </h2>
            <h1 className="text-2xl font-bold">
              I love Building things that lives on the Internet.
            </h1>
            <p className="moveInTop font-inter text-base my-6">
              Passionate about developing software and web applications using a
              variety of cutting-edge tools and technologies with good
              technical, problem-solving, and interpersonal skills.
            </p>
            <div className="moveInTop flex gap-6 items-center justify-center">
              <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
                <BlueButton>My Resume</BlueButton>
              </a>
              <a href="#contact">
                <WhiteButton>Contact me</WhiteButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroLg = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="relative">
          <div className="w-screen h-screen">
            <img src={BgImageLg} alt="Image" className="w-full h-full" />
          </div>
          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-white font-poppins">
            <div className="moveInBottom w-16 md:w-20">
                <img src={Logo} alt="Image" className="w-full h-full" />
            </div>
            <h2 className="moveInBottom text-2xl font-semibold">
              Hello world, this is Praveen Raj.
            </h2>
            <h1 className="text-4xl font-bold">
              I love Building things that lives on the Internet.
            </h1>
            <p className="moveInTop font-inter text-xl w-3/5 my-3">
              Passionate about developing software and web applications using a
              variety of cutting-edge tools and technologies with good
              technical, problem-solving, and interpersonal skills.
            </p>
            <div className="moveInTop flex gap-6 w-full items-center justify-center mt-10">
              <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
                <BlueButton>My Resume</BlueButton>
              </a>
              <a href="#contact">
                <WhiteButton>Contact me</WhiteButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center"
        id="home"
      >
        <div className="lg:hidden">
          <HeroSm />
        </div>
        <div className="hidden lg:block">
          <HeroLg />
        </div>
      </div>
    </>
  );
};

export default Hero;
