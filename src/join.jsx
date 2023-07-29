import { Footer } from "./footer";
import { Gallery } from "./gallery";
import { InvertibleCard } from "./invertible-card";
import Trading from "./resources/trading.jpeg";
import Satellite from "./resources/satellite.jpeg";
import Scraper from "./resources/scraper2.jpg";
import { Nav } from "./nav";
import Match from "./resources/matchgroup.png";
import DraftKings from "./resources/draftkings.png";
import Square from "./resources/square.png";
import Multivariate from "./resources/multivariate.png";
import { Link } from "react-router-dom";

const timeline = [
  {
    event: "Infosession #1",
    desc: "Come learn about CIB and our investment strategies!",
    datetime: "Thursday Jan 19, 8 – 9:30 PM",
    location: "Wheeler 102",
  },
  {
    event: "Infosession #2",
    desc: "Same content as Infosession #1, no need to attend both.",
    datetime: "Tuesday Jan 24, 8 – 9:30 PM",
    location: "Wheeler 102",
  },
  {
    event: "Diversity Night",
    desc: "Minority-only event: open to all candidates who identify as an underrepresented individuals in finance.",
    datetime: "Thursday Jan 19, 8 – 9:30 PM",
    location: "Wheeler 120",
  },
  {
    event: "Meet the Women of CIB",
    desc: "Female-only event: open to all female-identifying candidates",
    datetime: "Thursday Jan 26, 8 – 9 PM",
    location: "Wheeler 120",
  },
  {
    event: "Application Deadline",
    datetime: "Friday Jan 27, 6 PM",
  },
  {
    event: "Virtual Office Hours*",
    datetime: "Saturday Jan 28, 9 – 11 AM\nSunday Jan 29, 3 – 5 PM",
    location: "Zoom",
  },
  {
    event: "First Round Interviews*",
    datetime: "Monday Jan 30 – Tuesday Jan 31",
  },
  {
    event: "Social Round*",
    datetime: "Tuesday Jan 31, 8 – 9 PM ",
  },
  {
    event: "Final Round Interviews*",
    datetime: "Wednesday Feb 1 – Thursday Feb 2",
  },
];

export const Join = () => {
  return (
    <div className="w-full">
      <Nav active="join-us" />
      <div className="flex flex-col h-header bg-women bg-cover bg-center bg-darken semi-md-lg:bg-center-14 bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          Spring 2023 Recruitment
        </h1>
      </div>
      <div className="relative flex h-auto flex-col gap-y-16 p-20 bg-black justify-center items-center">
        <h1 className="text-white text-5xl">Applications</h1>
        <div className="relative flex sm:flex-row flex-col gap-x-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmkR3lC0JhDCGNATlPz8g41px394RU0q3Vfj-3If0kcsZ_AA/viewform?usp=send_form"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white text-black font-poppins text-sm mt-4 w-56 px-9 py-6 hover:bg-gray-200">
              Fundamental Analyst
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6kWVwvJe1sRguqdjA2Ux8nZY56tOlYKPNBBAz6w-NnFujqg/closedform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white text-black font-poppins text-sm mt-4 w-56 px-9 py-6 hover:bg-gray-200">
              Quantitative Analyst
            </button>
          </a>
        </div>
        <p className="text-white font-poppins font-extralight mt-5 sm:w-1/2 w-full">
          <i>
            Note: Interview process may vary depending on the role you apply
            for. Should you interview, your interview will reflect the level of
            experience you apply with.
          </i>
        </p>
      </div>
      <div className="relative flex h-auto flex-col gap-y-16 p-20 bg-black justify-center items-center">
        <h1 className="text-white text-5xl">Timeline</h1>
        <div className="relative flex flex-col h-auto justify-center items-center md:w-1/3 sm:w-1/2 w-full">
          <vl
            className="w-full absolute top-1 h-full border-l-2 border-white"
            style={{ left: "6px" }}
          ></vl>
          {timeline.map((item, index) => {
            return (
              <div
                className="flex text-white font-poppins justify-center w-full gap-x-4"
                key={index}
              >
                <svg
                  preserveAspectRatio="none"
                  data-bbox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 200 200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g color="white">
                    <path
                      style={{ fill: "white" }}
                      d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"
                    ></path>
                  </g>
                </svg>
                <div className="flex flex-col -mt-1.5 mb-16 justify-center items-start w-full">
                  <h1 className="text-2xl mb-3">{item.event}</h1>
                  <h2 className="font-extralight whitespace-pre-line">
                    {item.datetime}
                  </h2>
                  <h3 className="font-extralight">{item.location}</h3>
                  <p className="text-sm font-extralight mt-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="self-end text-right text-white font-poppins whitespace-pre-line font-extralight">
          <i>
            {`* Invite-only\n\nTime Zone: Pacific Time\n\n Location: Sent with RSVP to recruitment events`}
          </i>
        </p>
      </div>
      <Footer />
    </div>
  );
};
