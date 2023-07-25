/* eslint-disable react/prop-types */
const BlueButton = (props) => {
  return (
    <>
      <button className="bg-buttonBlue border-2 border-buttonBlue text-white font-semibold py-2 px-4 rounded-sm hover:bg-hoverButtonBlue hover:border-hoverButtonBlue">
        {props.children}
      </button>
    </>
  );
};

export default BlueButton;
