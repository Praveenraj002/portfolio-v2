/* eslint-disable react/prop-types */

const SectionMiniHeader = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 text-center">
        <div className="font-inter text-sm lg:text-base text-atlassianBlue font-extrabold my-2 md:my-3">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default SectionMiniHeader;
