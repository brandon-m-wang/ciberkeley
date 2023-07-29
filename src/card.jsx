import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ bg, hText, pText, bText, link }) => {
  const styles = {
    color: "white",
    paddingTop: "3.5rem",
    height: "100%",
    width: "100%",
    position: "absolute",
    "background-clip": "content-box",
    "box-shadow": `inset 0 -100px ${bg}, inset 3.5rem 0 ${bg}, inset 0 275px ${bg}`,
  };
  return (
    <div
      style={styles}
      id="card"
      className="semi-md-lg:h-section pointer-events-auto"
    >
      <div className="flex semi-md-lg:flex-row flex-col semi-md-lg:items-center items-start semi-md-lg:h-48 h-44 w-full justify-between md:gap-x-72 gap-x-16">
        <h1
          className="ml-14 semi-md-lg:text-5xl sm:text-3xl text-xl mini:mr-0 mr-14 mb-4 semi-md-lg:mb-0"
          style={{ "flex-basis": "35%" }}
        >
          {hText}
        </h1>
        <div
          className="semi-md-lg:ml-0 ml-14 flex flex-col semi-md-lg:w-1/2 w-auto"
          style={{ "flex-basis": "60%" }}
        >
          <p className="font-poppins font-extralight semi-md-lg:mr-16 mr-8 semi-md-lg:w-3/4 w-7/8 md:text-lg text-sm">
            {pText}
          </p>
          <Link to={link}>
            <button className="bg-white text-black font-poppins mini:text-sm text-xs mt-4 px-3 py-2 hover:bg-gray-200">
              {bText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
