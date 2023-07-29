import { Card } from "./card.jsx";
import { Gallery } from "./gallery.jsx";
import Laughing from "./resources/laughing.jpeg";
import Meeting from "./resources/meeting.jpeg";
import Pier from "./resources/pier.jpg";
import Analyst from "./resources/analyst.jpeg";
import Terrace from "./resources/terrace.jpeg";
import Team from "./resources/team.png";
import Dock from "./resources/dock.jpg";
import { FullCard } from "./full-card";
import { Footer } from "./footer";
import { Nav } from "./nav.jsx";
import "./home.css";

export const Home = () => {
  return (
    <div className="w-full home">
      <Nav active="home" />
      <div className="flex flex-col h-screen gap-8 justify-center items-center">
        <h1 className="select-none text-white semi-lg:text-6xl md:text-5xl sm:text-3xl mini:text-2xl text-base text-center mt-14 border-t-2 border-b-2 pt-2 pb-1">
          CAPITAL INVESTMENTS AT BERKELEY
        </h1>
        <h1 className="text-white semi-lg:text-2xl sm:text-lg text-sm text-center font-poppins font-extralight pr-8 pl-8 sm:pl-0 sm:pr-0">
          Berkeley’s only multi-strategy undergraduate investment fund
        </h1>
        <h1 className="text-white text-xl text-center">EST. 2012</h1>
      </div>
      <div className="bg-black w-full flex md:flex-row flex-col items-start text-white font-poppins font-light">
        <div
          className="flex text-right md:m-20 md:ml-14 m-0 mt-20 ml-14 md:text-2.5xl text-2xl"
          style={{ "flex-basis": "30%" }}
        >
          <h1>Who we are</h1>
        </div>
        <div
          className="flex sm:m-20 m-14 mb-20 md:mt-20 mt-10 md:text-2.25xl text-base border-l-2 pl-8 md:pr-14 pr-0"
          style={{ "flex-basis": "100%" }}
        >
          <p className="font-lusitana">
            CIB is UC Berkeley’s only multi-strategy hedge fund across L/S
            equity, global macro, and quantitative strategies. We are
            responsible for all aspects of the fund from research to trading. We
            strive for superior risk-adjusted returns across our investment
            pillars.
          </p>
        </div>
      </div>
      <div className="w-full relative semi-md-lg:h-section h-section-lite pointer-events-none">
        <Gallery images={[Laughing]} />
        <Card
          bg={"#181818"}
          hText={"Diverse minds united by a passion for finance."}
          pText={
            "Our team is determined to continuously search for better solutions. Every day, we challenge ourselves to rethink and enhance our approaches, systems, and technology to achieve exceptional outcomes and sustainable success."
          }
          bText={"Learn More"}
          link={"/about"}
        />
      </div>
      <div
        className="w-full relative semi-md-lg:h-96 h-auto flex semi-md-lg:flex-row flex-col items-start justify-between gap-x-16 p-14 md:pb-14 pb-20 pt-20 semi-md-lg:gap-y-0 gap-y-8"
        style={{ "background-color": "#303030" }}
      >
        <div
          className="flex flex-col items-start justify-center text-white"
          style={{ flexBasis: "33%" }}
        >
          <h1 className="md:text-4xl text-3xl pb-6">94% Haas Admit Rate</h1>
          <p className="font-poppins font-extralight semi-lg:text-base text-sm">
            At CIB, we equip members with the skills and experience necessary to
            succeed in the highly competitive admissions process for Haas.
            Members develop critical thinking, teamwork, and leadership
            abilities that are highly valued by the Haas community.
          </p>
        </div>
        <div
          style={{ flexBasis: "33%" }}
          className="flex flex-col items-start justify-center text-white"
        >
          <h1 className="md:text-4xl text-3xl pb-6">Placements at Top Firms</h1>
          <p className="font-poppins font-extralight semi-lg:text-base text-sm">
            Our members place in all divisions of finance including L/S
            equities, investment banking, quantitative finance, and more. Year
            after year, CIB accounts for a significant proportion of placements
            out of Berkeley at top funds and investment banks.
          </p>
        </div>
        <div
          style={{ flexBasis: "33%" }}
          className="flex flex-col items-start justify-center text-white"
        >
          <h1 className="md:text-4xl text-3xl pb-6">20+ Majors Represented</h1>
          <p className="font-poppins font-extralight semi-lg:text-base text-sm">
            From Media Studies to Political Science, CIB is a diverse community
            of students from all backgrounds and all majors. We welcome students
            from all disciplines and encourage members to explore their
            interests and passions.
          </p>
        </div>
      </div>
      <div className="w-full relative semi-md:h-section h-section-lite">
        <img
          className="brightness-50 absolute w-full semi-md:h-section h-section-lite object-cover object-center"
          style={{
            "-webkit-filter": "brightness(50%)",
          }}
          src={Team}
          alt={"team"}
        />
        <FullCard
          bg={"#484848"}
          hText={"Investment Arms"}
          subHText={[
            "Fundamental Investment",
            "Quantitative Trading",
            "Alternative Data Strategies",
          ]}
          pText={
            "Learn more about our investment philosophy and our approach to generating optimal returns for the fund."
          }
          bText={"The Fund"}
          link={"/the-fund"}
        />
      </div>
      <Footer />
    </div>
  );
};
