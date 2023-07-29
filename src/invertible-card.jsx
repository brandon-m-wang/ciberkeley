import "./invertible-card.css";

import { useState } from "react";
import { useEffect } from "react";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const InvertibleCard = ({ bg, hText, pText, pTextTwo, rev }) => {
  const styles = {
    color: "white",
    paddingTop: "3.5rem",
    height: "100%",
    width: "100%",
    position: "absolute",
    "background-clip": "content-box",
    "box-shadow": `inset 0 -100px ${bg}, inset ${
      rev ? "-3.5rem" : "3.5rem"
    } 0 ${bg}, inset 0 275px ${bg}`,
  };
  const stylesMini = {
    color: "white",
    paddingTop: "3.5rem",
    height: "100%",
    width: "100%",
    position: "absolute",
    "background-clip": "content-box",
    "box-shadow": `inset 0 -350px black, inset ${
      rev ? "-3.5rem" : "3.5rem"
    } 0 ${bg}, inset 0 275px ${bg}`,
  };
  const size = useWindowSize();

  if (size.width <= 1100) {
    styles.background = bg;
  }

  return (
    <>
      <div
        style={stylesMini}
        className="opacity-60"
        id="invertible-card-mini"
      ></div>
      <div style={styles} id="invertible-card">
        <div
          className={`flex items-center text-center semi-md-lg:text-start ${
            rev ? "semi-md-lg:flex-row-reverse" : "semi-md-lg:flex-row"
          } flex-col semi-md-lg:h-48 w-full justify-between gap-x-72 gap-y-8`}
        >
          <h1
            className={`${rev ? "" : "semi-md-lg:ml-14"} text-5xl`}
            style={{ "flex-basis": "35%" }}
          >
            {hText}
          </h1>
          <div
            className="flex flex-col semi-md-lg:items-end items-center semi-md-lg:w-1/2 w-full"
            style={{ "flex-basis": "60%" }}
          >
            <p
              className={`${
                rev ? "semi-md-lg:ml-14" : ""
              } font-poppins font-extralight semi-md-lg:mr-16 w-3/4`}
            >
              {pText}
            </p>
          </div>
        </div>
        <p
          className={`${
            rev
              ? "right-0 semi-md-lg:mr-20 semi-md-lg:text-right"
              : "semi-md-lg:ml-20"
          } top-1/2 semi-md-lg:absolute semi-md-lg:mt-24 mt-8 mb-8 semi-md-lg:mb-0 font-poppins font-extralight semi-md-lg:w-2/3 p-8 text-sm whitespace-pre-line`}
        >
          {pTextTwo}
        </p>
      </div>
    </>
  );
};
