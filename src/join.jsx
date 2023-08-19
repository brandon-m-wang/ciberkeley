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
    datetime: "Tuesday Aug 29, 8 – 10 PM",
    location: "Wheeler 220",
  },
  {
    event: "Women's X Diversity Night",
    desc: "Women/minority-only event: open to all candidates who identify as an underrepresented individuals in finance.",
    datetime: "Thursday Aug 30, 8 – 10 PM",
    location: "Wheeler 126",
  },
  {
    event: "Infosession #2",
    desc: "Same content as Infosession #1, no need to attend both.",
    datetime: "Thursday Aug 31, 8 – 10 PM",
    location: "Wheeler 220",
  },
  {
    event: "Application Deadline",
    datetime: "Friday Sept 1, 6 PM",
  },
  {
    event: "Virtual Office Hours*",
    datetime: "Friday Sept 2, 9 – 11 AM\nSunday Sept 8, 3 – 5 PM",
    location: "Zoom",
  },
  {
    event: "First Round Interview*",
    datetime: "Sunday Sept 3",
  },
  {
    event: "Social Round*",
    datetime: "Wednesday Sept 6, 8 – 10 PM ",
    location: "TBD",
  },
  {
    event: "Final Round Interview*",
    datetime: "Saturday Sept 9",
  },
];

export const Join = () => {
  return (
    <div className="w-full">
      <Nav active="join-us" />
      <div className="flex flex-col h-header bg-women bg-cover bg-center bg-darken semi-md-lg:bg-center-14 bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          Fall 2023 Recruitment
        </h1>
      </div>
      <div className="relative flex h-auto flex-col gap-y-16 p-20 bg-black justify-center items-center">
        <h1 className="text-white text-5xl">Applications (Open Soon)</h1>
        <div className="relative flex sm:flex-row flex-col gap-x-8">
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmkR3lC0JhDCGNATlPz8g41px394RU0q3Vfj-3If0kcsZ_AA/viewform?usp=send_form"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white text-black font-poppins text-sm mt-4 w-56 px-9 py-6 hover:bg-gray-200">
              Fundamental Analyst
            </button>
          </a> */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRa3slXw58HyWpz3z_UbjpnyTzVKatKYkSlx9N0zwWWsb6vg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white text-black font-poppins text-sm mt-4 w-56 px-9 py-6 hover:bg-gray-200">
              Fall 2023 Interest Form
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
