import { Link } from "react-router-dom";
import "./full-card.css";

export const FullCard = ({ bg, hText, subHText, pText, bText, link }) => {
  const styles = {
    color: "white",
    paddingTop: "100px",
    height: "100%",
    width: "100%",
    position: "absolute",
    "background-clip": "content-box",
    "box-shadow": `inset 0 -100px ${bg}, inset 3.5rem 0 ${bg}, inset 0 100px ${bg}`,
  };
  return (
    <div style={styles} id="full-card">
      <div className="semi-md:ml-28 ml-14 flex flex-col mini:justify-end justify-start w-auto h-4/5">
        <h1 className="text-5xl mb-8">{hText}</h1>
        {subHText.map((item, index) => {
          return (
            <h1
              className="md:text-4xl text-xl font-poppins font-extralight w-full"
              key={index}
            >
              {item}
            </h1>
          );
        })}
        <div className="flex flex-col mt-8">
          <p className="font-poppins font-extralight semi-md:w-1/3 mini:w-2/3 w-full semi-md:text-base text-sm">
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
