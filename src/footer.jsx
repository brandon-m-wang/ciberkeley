import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full h-52 bg-black text-white font-poppins font-extralight flex gap-y-8 flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full gap-x-8">
        <a
          className="text-2xl"
          href="https://www.instagram.com/berkeleycib/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="text-2xl"
          href="https://www.facebook.com/ciberkeley/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          className="text-2xl"
          href="https://www.linkedin.com/company/capital-investments-at-berkeley/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>ciberkeley@gmail.com</p>
    </div>
  );
};
