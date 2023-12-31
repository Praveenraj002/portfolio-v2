/* eslint-disable react/prop-types */
const TechStacksPill = (props) => {
  return (
    <>
      <div
        className="bg-white py-2 px-4 flex gap-3 font-poppins items-center justify-center drop-shadow-lg rounded-md"
        data-aos="fade-up-right"
      >
        <div className="text-2xl text-atlassianBlue">{props.icon}</div>
        <div className="font-semibold text-base">
          {props.title}{" "}
          <span className="text-red-600">{props.current && "*"}</span>
        </div>
      </div>
    </>
  );
};

export default TechStacksPill;
