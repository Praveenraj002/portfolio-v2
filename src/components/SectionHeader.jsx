/* eslint-disable react/prop-types */

const SectionHeader = (props) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="font-poppins text-xl lg:text-2xl text-black font-bold mb-6">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
