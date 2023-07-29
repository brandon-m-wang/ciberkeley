import { Link } from "react-router-dom";
import CIBLogo from "./resources/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import "./nav.css";

const content = [
  "Home",
  "About",
  "Leadership",
  "Network",
  "The Fund",
  "Education",
  "Join Us",
  "Member's Portal",
];

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

export const Nav = ({ active }) => {
  const size = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    console.log(location);
  }, [location]);

  return (
    <div className="absolute top-0 left-0 margin-auto w-full">
      <div className="flex justify-between items-center flex-shrink-0 text-white pt-4 pb-3 pl-8 pr-48 font-poppins">
        <Link to="/">
          <img id="logo" src={CIBLogo} alt="CIB" />
        </Link>
        <div
          onClick={toggleMenu}
          className={`semi-md-lg:hidden menu-button ${isOpen ? "is-open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu gap-y-8 ${isOpen ? "is-open" : ""}`}>
          {content.map((item) => {
            if (item === "Home") {
              return (
                <Link to={`/`}>
                  <span
                    className={`navbar-menu-item font-extralight text-md ${
                      active === item.toLowerCase().replace(" ", "-")
                        ? "underline"
                        : ""
                    }`}
                    style={{
                      textUnderlineOffset: "5px",
                      textDecorationThickness: "1px",
                    }}
                  >
                    {item}
                  </span>
                </Link>
              );
            }
            return (
              <Link
                to={`/${item.toLowerCase().replace("'", "").replace(" ", "-")}`}
                key={item}
              >
                <span
                  className={`navbar-menu-item font-extralight text-md ${
                    active ===
                    item.toLowerCase().replace("'", "").replace(" ", "-")
                      ? "underline"
                      : ""
                  }`}
                  style={{
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "1px",
                  }}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
        {content.map((item, index) => {
          if (size.width < 1100) {
            return;
          }
          if (item === "Home") {
            return (
              <Link to={`/`}>
                <span
                  className={`select-none font-extralight text-md ${
                    active ===
                    item.toLowerCase().replace("'", "").replace(" ", "-")
                      ? "underline"
                      : ""
                  }`}
                  style={{
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "1px",
                  }}
                >
                  {item}
                </span>
              </Link>
            );
          }
          return (
            <Link
              to={`/${item.toLowerCase().replace("'", "").replace(" ", "-")}`}
              key={index}
            >
              <span
                className={`select-none font-extralight text-md ${
                  active ===
                  item.toLowerCase().replace("'", "").replace(" ", "-")
                    ? "underline"
                    : ""
                }`}
                style={{
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "1px",
                }}
              >
                {item}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
