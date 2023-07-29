import { Footer } from "./footer";
import { InvertibleCardExtended } from "./invertible-card-extended";
import Scraper from "./resources/scraper2.jpg";
import { Nav } from "./nav";

const concepts = {
  Macroeconomics: [
    "Presentation of the Different Players",
    "Diverse Investment Philosophies",
    "Intro to Credit",
    "Long/Short-term Debt Cycles",
  ],
  "Fixed Income": [
    "Bond Mechanics: Prices and Yields",
    "Bond Arbitrage",
    "Corporate vs. Government",
    "Asset-backed Securities",
  ],
  "Risk & Portfolio Management": [
    "Portfolio Mechanics",
    "Probability Distribution",
    "Backtesting & Forecasting",
    "Diversification",
  ],
  "Equity Research": [
    "Long/Short Selling",
    "Valuation Techniques",
    "DCF/Comps Analysis",
    "Fundamental Research",
  ],
  "Derivative Securities": [
    "Futures and Forward Contracts",
    "Options Mechanics and Valuation",
    "Forecasting Volatility",
    "Arbitrage, Hedging and Speculation",
  ],
  "Alternative Investments": [
    "Real Estate",
    "Commodities",
    "ETFs",
    "Funds of Funds",
  ],
  "Special Topics": [
    "Initial Public Offerings",
    "Mergers & Acquisitions",
    "Private Equity",
    "Venture Capital",
  ],
  "Quantitative Finance": [
    "Algorithmic Trading, Low Latency Systems",
    "Blockchain",
    "Applications of Machine Learning in Finance",
    "Market Making",
  ],
};

const workshops = {
  "Intro to Finance": [
    "Market Basics and Terminology",
    "Core and Alternative Asset Classes",
    "Financial Theory (Time Value of Money, Efficient Market Hypothesis, etc.)",
  ],
  "Financial Analysis & Modelling": [
    "Basic Financial Accounting",
    "Financial Statement Analysis",
    "Modeling Introduction and Exercises (DCF, LBO)",
  ],
  "Equity Research & Portfolio Management": [
    "Security Analysis",
    "Risk Theory (Capital Asset Pricing Model, Efficient Frontier)",
    "Portfolio Construction",
  ],
  Careers: [
    "Career paths in finance and beyond",
    "Resume building",
    "Professional workshops",
    "Interview prep workshops",
  ],
};

export const Education = () => {
  return (
    <div className="w-full">
      <Nav active="education" />
      <div className="flex flex-col h-header bg-meeting bg-cover bg-darken-slightly semi-md-lg:bg-center-14 bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          New Analyst Education
        </h1>
      </div>
      <div className="w-full relative h-screen-125 bg-leadership bg-cover bg-darken-more bg-blend-multiply hidden semi-md-lg:block">
        <InvertibleCardExtended
          bg={"black"}
          hText={"Experienced CIB members run new analyst education."}
          pText={
            "Analysts are our greatest asset. Every new analyst’s first semester is spent learning all about markets, investing, and finance through the new analyst education program."
          }
          hTextTwo={"New Analyst Curriculum"}
          concepts={concepts}
          rev={true}
        />
      </div>
      <div className="text-white pt-24 p-14 gap-y-8 semi-md-lg:hidden flex flex-col bg-leadership bg-cover bg-center bg-darken-more bg-blend-multiply">
        <h1 className="text-5xl bg-black -mt-24 -m-14 pt-24 pb-24 p-14 mb-8">
          Experienced CIB members run new analyst education.
        </h1>
        <p className="font-poppins font-extralight">
          Analysts are our greatest asset. Every new analyst's first semester is
          spent learning all about markets, investing, and finance through the
          new analyst education program.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-start">
          {Object.entries(concepts).map(([title, topics], index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h1 className="text-2xl font-normal mb-2">{title}</h1>
                {topics.map((item, index) => {
                  return (
                    <p className="text-xs" key={index}>
                      • {item}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full relative h-screen-125 bg-education bg-cover bg-darken-more bg-blend-multiply hidden semi-md-lg:block">
        <InvertibleCardExtended
          bg={"#181818"}
          hText={"CIB Workshops: beyond the classroom."}
          pText={
            "CIB's practical workshops help members succeed with investment management and career development skills for future career growth."
          }
          hTextTwo={"Workshops"}
          concepts={workshops}
          rev={false}
        />
      </div>
      <div className="text-white pt-24 p-14 gap-y-8 semi-md-lg:hidden flex flex-col bg-education bg-cover bg-center bg-darken-more bg-blend-multiply">
        <h1 className="text-5xl bg-black -mt-24 -m-14 pt-24 pb-24 p-14 mb-8">
          CIB Workshops: beyond the classroom.
        </h1>
        <p className="font-poppins font-extralight">
          CIB's practical workshops help members succeed with investment
          management and career development skills for future career growth.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-start">
          {Object.entries(workshops).map(([title, topics], index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h1 className="text-2xl font-normal mb-2">{title}</h1>
                {topics.map((item, index) => {
                  return (
                    <p className="text-xs" key={index}>
                      • {item}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
