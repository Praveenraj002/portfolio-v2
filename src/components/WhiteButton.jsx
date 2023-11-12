/* eslint-disable react/prop-types */
const WhiteButton = ({ children, onClick }) => {
  return (
    <>
      <button
        className="bg-transparent border-2 rounded-sm border-white text-white font-semibold py-2 px-4 hover:bg-atlassianLightBlue hover:border-atlassianLightBlue hover:text-deepBlue"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default WhiteButton;
