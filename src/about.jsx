import History from "./resources/history.JPG";
import Terrace from "./resources/terrace.jpeg";
import Dock from "./resources/dock.jpg";
import Culture from "./resources/culture.jpeg";
import Philosophy from "./resources/pier.jpg";
import { Footer } from "./footer";
import { Nav } from "./nav";

export const About = () => {
  return (
    <div className="w-full">
      <Nav active="about" />
      <div className="flex flex-col h-header bg-teamTwo bg-cover bg-darken bg-center bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">About CIB</h1>
      </div>
      <div className="semi-md-lg:h-mini-section h-auto bg-black">
        <div className="ml-14 mr-14 pt-20 flex semi-md-lg:flex-row flex-col items-center gap-x-40">
          <div className="flex flex-col items-start text-white">
            <h1 className=" text-5xl text-center mb-8">History</h1>
            <p className="font-poppins font-extralight semi-lg:text-base text-sm">
              Capital Investments at Berkeley was established in 2012 with a
              mission to explore all aspects of the public markets. Since its
              inception, CIB has been driven by a passion for investment and a
              commitment to excellence.
              <br></br>
              <br></br>As a dynamic and innovative organization, CIB takes pride
              in its creative approach to investing, which leverages data-driven
              insights to gain a real-time edge across multiple asset classes
              and investment strategies.
              <br></br>
              <br></br>In the face of a rapidly evolving market environment, CIB
              has developed a reputation for being at the forefront of
              innovative investment practices.
            </p>
          </div>
          <img
            src={Terrace}
            className="max-h-80 semi-md-lg:m-0 m-16"
            alt="history"
          />
        </div>
      </div>
      <div
        className="semi-md-lg:h-mini-section h-auto bg-black"
        style={{ backgroundColor: "#181818" }}
      >
        <div className="ml-14 mr-14 pt-20 flex semi-md-lg:flex-row-reverse flex-col items-center gap-x-40">
          <div className="flex flex-col items-start text-white">
            <h1 className=" text-5xl text-center mb-8">Culture</h1>
            <p className="font-poppins font-extralight semi-lg:text-base text-sm">
              Our members are our greatest asset. <br></br>
              <br></br>We come from a multitude of academic and cultural
              backgrounds. Our diversified perspectives provide us with nuanced
              views on markets and global alumni networks.
              <br></br>
              <br></br>CIB is a fast-paced environment, where members are
              learning, teaching, and working together to become better
              professional investors. Above all we are a family, brought
              together by finance, sticking together because of community.
            </p>
          </div>
          <img
            src={Culture}
            className="max-h-80 semi-md-lg:m-0 m-16"
            alt="history"
          />
        </div>
      </div>
      <div
        className="semi-md-lg:h-mini-section h-auto"
        style={{ "background-color": "#303030" }}
      >
        <div className="ml-14 mr-14 pt-20 flex semi-md-lg:flex-row flex-col items-center gap-x-40">
          <div className="flex flex-col items-start text-white">
            <h1 className=" text-5xl text-center mb-8">Philosophy</h1>
            <p className="font-poppins font-extralight semi-lg:text-base text-sm">
              Every decision answers a question.
              <br></br>
              <br></br>At CIB we focus on the questions we ask just as much as
              the decisions we make. At the crux of our philosophy is a
              multi-dimensional approach to problem-solving and understanding
              the world. <br></br>
              <br></br>When we evaluate risk, we think about more than
              volatility. We evaluate investment externalities, time value, and
              emotional bias. This allows us to make sound investment decisions,
              leading to truly risk-adjusted returns.
            </p>
          </div>
          <img
            src={Philosophy}
            className="max-h-80 semi-md-lg:m-0 m-16"
            alt="history"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
