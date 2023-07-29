import Leadership from "./resources/leadership.jpeg";
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
import MatchPDF from "./resources/match.pdf";
import DraftKingsPDF from "./resources/draftkings.pdf";
import SquarePDF from "./resources/square.pdf";
import MultivariatePDF from "./resources/pairs.pdf";

const research = [
  {
    img: Multivariate,
    title:
      "Multivariate Pairs Trading: Identification and Modeling of Highly Cointegrated Equity Bundles",
    date: "1/25/21",
    link: MultivariatePDF,
  },
  {
    img: DraftKings,
    title: "CIB bets on DraftKings (NASDAQ:DKNG)",
    date: "12/11/20",
    link: DraftKingsPDF,
  },
  {
    img: Square,
    title: "CIB buys Square Inc. (NYSE:SQ)",
    date: "11/4/20",
    link: SquarePDF,
  },
  {
    img: Match,
    title: "Why CIB Swiped Right on Match Group Inc. (NASDAQ:MTCH)",
    date: "10/20/20",
    link: MatchPDF,
  },
];

export const Fund = () => {
  return (
    <div className="w-full">
      <Nav active="the-fund" />
      <div className="flex flex-col h-header bg-analyst bg-center semi-md-lg:bg-center-45 bg-cover bg-darken bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14 ">
          CIB Multi-Strategy Fund
        </h1>
      </div>
      <div className="w-full relative semi-md-lg:h-section h-auto semi-md-lg:block flex flex-col-reverse">
        <img
          className="brightness-50 semi-md-lg:absolute relative w-full semi-md-lg:h-section h-80 object-cover object-center semi-md-lg:pt-gallery pt-0"
          style={{
            "-webkit-filter": "brightness(50%)",
          }}
          src={Scraper}
          alt={Scraper}
        />
        <InvertibleCard
          bg={"black"}
          hText={"Fundamental Investment"}
          pText={
            "Portfolio Teams develop and deliver fundamentally driven investment pitches across equities, fixed income, commodities, currencies, and derivatives. "
          }
          pTextTwo={
            "Fundamental teams are led by a portfolio manager, focusing on a specific industry, strategy, or asset class for the semester. PMs are subject matter experts in their area of focus, leading analysts in conducting rigorous research to create actionable investment ideas throughout the semester. \n\nFundamental teams take a bottom-up approach to investing. Analysts research a universe of assets/companies chosen by their PM. They understand industry dynamics, market-moving factors and conduct strategy-specific research - pushing out multiple pitches throughout the semester. "
          }
          rev={false}
        />
      </div>
      <div className="w-full relative semi-md-lg:h-section h-auto semi-md-lg:block flex flex-col-reverse">
        <img
          className="brightness-50 semi-md-lg:absolute relative w-full semi-md-lg:h-section h-80 object-cover object-center semi-md-lg:pt-gallery pt-0"
          style={{
            "-webkit-filter": "brightness(50%)",
          }}
          src={Trading}
          alt={Trading}
        />
        <InvertibleCard
          bg={"#181818"}
          hText={"Quantitative Trading"}
          pText={
            "The Quantitative Trading division builds implementable systematic trading strategies through a combination of modeling and portfolio optimization."
          }
          pTextTwo={
            "Quantitative analysts work in teams of three under a project manager responsible for supporting and guiding their efforts. Throughout the project, analysts are encouraged to apply their quantitative skills to real-world problems, using statistical models to generate market insights. \n\n We provide analysts with a strong foundation in key concepts that are essential to success in quantitative finance. These concepts include financial modeling, risk management, portfolio optimization, and derivative pricing, varying from project to project."
          }
          rev={true}
        />
      </div>
      <div className="w-full relative semi-md-lg:h-section h-auto semi-md-lg:block flex flex-col-reverse">
        <img
          className="brightness-50 semi-md-lg:absolute relative w-full semi-md-lg:h-section h-80 object-cover object-center semi-md-lg:pt-gallery pt-0"
          style={{
            "-webkit-filter": "brightness(50%)",
          }}
          src={Satellite}
          alt={Satellite}
        />
        <InvertibleCard
          bg={"#303030"}
          hText={"Alternative Data Research"}
          pText={
            "CIB Labs is our in-house alternative data economic research division. Labs provides data-driven insights for portfolio teams and broad market research for the club."
          }
          pTextTwo={
            "CIB Labs is the in-house alternative data research division in CIB which sits in between the Fundamental and Quantitative divisions. Projects are born out of the desire to answer a question about an investment thesis or the broader markets. Then, we leverage data science to triangulate an answer to the investment question.\n\nOne of the key advantages of CIB Labs is its ability to mobilize alternative data sources. This includes everything from weather & climate data to satellite imagery analysis. By incorporating a wide range of data sources into its models, we are able to generate unique insights into the market that are not available through traditional sources."
          }
          rev={false}
        />
      </div>
      <div
        className="flex flex-col gap-y-8 justify-center items-center p-20 pb-40 text-white"
        style={{ backgroundColor: "#484848" }}
      >
        <h1 className="text-5xl text-center mb-20">Research Samples</h1>
        {research.map((item, index) => (
          <div
            className="flex flex-col semi-md-lg:flex-row gap-y-16 pb-16 semi-md-lg:gap-y-0 semi-md-lg:pb-0 font-poppins gap-x-16 w-full justify-start items-center"
            index={index}
          >
            <img
              src={item.img}
              className="w-96 semi-md-lg:h-96 h-auto grayscale"
              style={{ filter: "grayscale(100%) brightness(110%)" }}
              alt={""}
            />
            <div className="semi-md-lg:w-1/2 w-full flex flex-col gap-y-4 items-start">
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-sm font-extralight">{item.date}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                <p
                  className="text-sm font-extralight underline"
                  style={{
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "1px",
                  }}
                >
                  Read More
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
