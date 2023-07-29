import "./member.css";
import { Nav } from "./nav";
import { FaLock } from "react-icons/fa";
import { useRef } from "react";

export const Member = () => {
  const passwordInput = useRef(null);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      passwordInput.current.className += " shake";
      setTimeout(() => {
        passwordInput.current.className =
          passwordInput.current.className.replace(" shake", "");
      }, 100);
      console.log(passwordInput.current.className);
    }
  };
  return (
    <>
      <Nav active="members-portal" />
      <div className="w-screen h-screen bg-black flex flex-col gap-y-8 justify-center items-center">
        {/* password input box */}
        <FaLock className="text-white text-4xl" />
        <input
          ref={passwordInput}
          onKeyDown={handleKeyDown}
          type="password"
          className="select-none font-poppins font-extralight rounded w-48 p-1 pl-2"
          placeholder="Password"
        />
      </div>
    </>
  );
};
