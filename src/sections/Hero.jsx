// Components
// import BlueButton from "../components/BlueButton";
// import WhiteButton from "../components/WhiteButton";
// import Logo from "../assets/Pr-logo.png";

// import BgImageLg from "../assets/Images/bg.png";
// import BgImageSm from "../assets/Images/mobileBG.png";

// const HeroSm = () => {
//   return (
//     <>
//       <div className="w-screen h-screen">
//         <div className="relative">
//           <div className="w-screen h-screen">
//             <img src={BgImageSm} alt="Image" className="w-full h-full" />
//           </div>

//           <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-white font-poppins container mx-auto px-2 m-0">
//             <div className="moveInBottom w-16 md:w-20">
//               <img src={Logo} alt="Image" className="w-full h-full" />
//             </div>
//             <h2 className="moveInBottom text-xl font-semibold">
//               Hello world, this is Praveen Raj.
//             </h2>
//             <h1 className="text-2xl font-bold">
//               I love Building things that lives on the Internet.
//             </h1>
//             <p className="moveInTop font-inter text-base my-6">
//               Passionate about developing software and web applications using a
//               variety of cutting-edge tools and technologies with good
//               technical, problem-solving, and interpersonal skills.
//             </p>
//             <div className="moveInTop flex gap-6 items-center justify-center">
//               <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
//                 <BlueButton>My Resume</BlueButton>
//               </a>
//               <a href="#contact">
//                 <WhiteButton>Contact me</WhiteButton>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const HeroLg = () => {
//   return (
//     <>
//       <div className="w-screen h-screen">
//         <div className="relative">
//           <div className="w-screen h-screen">
//             <img src={BgImageLg} alt="Image" className="w-full h-full" />
//           </div>
//           <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-white font-poppins">
//             <div className="moveInBottom w-16 md:w-20">
//                 <img src={Logo} alt="Image" className="w-full h-full" />
//             </div>
//             <h2 className="moveInBottom text-2xl font-semibold">
//               Hello world, this is Praveen Raj.
//             </h2>
//             <h1 className="text-4xl font-bold">
//               I love Building things that lives on the Internet.
//             </h1>
//             <p className="moveInTop font-inter text-xl w-3/5 my-3">
//               Passionate about developing software and web applications using a
//               variety of cutting-edge tools and technologies with good
//               technical, problem-solving, and interpersonal skills.
//             </p>
//             <div className="moveInTop flex gap-6 w-full items-center justify-center mt-10">
//               <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
//                 <BlueButton>My Resume</BlueButton>
//               </a>
//               <a href="#contact">
//                 <WhiteButton>Contact me</WhiteButton>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h2>Under Construction, Coming Soon</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// const Hero = () => {
//   return (
//     <>
//       <div
//         className="w-screen h-screen flex items-center justify-center"
//         id="home"
//       >
//         <div className="lg:hidden">
//           <HeroSm />
//         </div>
//         <div className="hidden lg:block">
//           <HeroLg />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Hero;

// import Logo from "../assets/Pr-logo.png";
import GradientBg from "../assets/Images/tab-icon_blue-gradient-full.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-screen h-screen flex flex-col items-center justify-center text-center text-white font-inter relative"
      style={{
        backgroundImage: `url(${GradientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}

      <div className="z-10 flex flex-col items-center gap-4 px-4">
        {/* <img
          src={Logo}
          alt="Logo"
          className="w-20 h-20 animate-bounce-slow"
        /> */}

        <h1 className="text-2xl md:text-3xl font-bold mt-4">
          System update in progress: v3.0 coming soon.
        </h1>

        <p className="text-sm md:text-base text-gray-300">
          Saving changes… might take a few commits.
        </p>
      </div>
    </div>
  );
};



export default Hero;
