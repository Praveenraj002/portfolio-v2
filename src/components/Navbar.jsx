const NavbarSm = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-poppins text-xl font-bold text-deepBlue cursor-pointer"
          >
            Praveen Raj
          </a>
          <div>
            <button
              id="menu-btn"
              className="z-30 block lg:hidden focus:outline-none hamburger"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center font-poppins">
          <a
            href="#home"
            className="font-poppins text-2xl font-bold text-deepBlue"
          >
            Praveen Raj
          </a>
          <div className="flex items-center gap-5 text-deepGray font-normal text-base">
            <a
              href="#about"
              className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#services"
              className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#workflow"
              className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out"
            >
              Workflow
            </a>
            <a
              href="#projects"
              className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="top-0 z-50" id="navbar">
        <div className="lg:hidden">
          <NavbarSm />
        </div>
        <div className="hidden lg:block">
          <NavbarLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
