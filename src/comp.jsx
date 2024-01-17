import { Footer } from "./footer";
import { Nav } from "./nav";
import HS from "./resources/HS_CASE.png";

const timeline = [
  {
    event: "Registration deadline",
    datetime: "11/15/2023",
  },
  {
    event: "First Round due",
    datetime: "11/24/2023",
  },
  {
    event: "Finalists announced",
    datetime: "11/27/2023",
  },
  {
    event: "Second Round due",
    datetime: "12/01/2023",
  },
  {
    event: "Winners announced",
    datetime: "12/04/2023",
  },
];

export const Comp = () => {
  return (
    <div className="w-full font-light">
      <Nav active="comp" />
      <div className="flex flex-col h-header bg-bull bg-cover bg-center bg-darken semi-md-lg:bg-center-14 bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          High School Case Competition
        </h1>
      </div>
      <div className="px-20 font-poppins pt-20 bg-black w-full text-white">
        <section class="text-center">
          <h1 class="text-5xl text-white mb-16">
            Welcome to CIB's High School Case Competition!
          </h1>
        </section>
        <section class="bg-blue-100 p-6 rounded-md mb-10 shadow-md">
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">
            📝 Submission Guidelines 📝
          </h3>
          <p class="text-lg text-gray-600 mb-4">
            Please adhere to the following requirements to ensure successful
            entry into the pitch competition (you will be sent a submission link
            after registering):
          </p>
          <ul class="text-gray-600 list-decimal pl-8 mb-4">
            <li class="mb-2">
              <strong>Participation Format:</strong> Students can pitch
              individually or form pairs to jointly create and present the
              pitch.
            </li>
            <li class="mb-2">
              <strong>L/S Pitch:</strong> Submit an investment recommendation
              (long or short) on a stock from the list below. Please present an
              argument to either buy (long) or sell (short) the stock. The
              recommendation should include extensive qualitative considerations
              in addition to quantitative analysis. Depict a deep understanding
              of the company, the market in which it operates, and its financial
              standing.{" "}
              <b>
                All research must be limited to publicly available information
                only.
              </b>
            </li>
            <li class="mb-2">
              <strong>Company Selection:</strong> Choose a company from the
              pre-selected list and be sure to include the stock ticker in your
              analysis:
              <ul class="list-disc pl-5 text-gray-600 mb-2 mt-2">
                <li>Toast (NYSE: TOST)</li>
                <li>Nvidia (NASDAQ: NVDA)</li>
                <li>Thermo Fisher (NYSE: TMO)</li>
                <li>Starbucks (NASDAQ: SBUX)</li>
                <li>John Deere (NYSE: DE)</li>
                <li>Aptiv (NYSE: APTV)</li>
                <li>Lululemon (NYSE: LULU)</li>
                <li>Lyft (NYSE: LYFT)</li>
              </ul>
              Your analysis should be data-driven and include relevant financial
              metrics and future projections.
            </li>
            <li class="mb-2">
              <strong>Slide Deck:</strong> Please provide an electronic (PDF)
              version of the presentation of your recommendation. It should be
              in slide format. The PDF presentation is not to exceed 10 slides
              (excluding the cover page). Any additional deliverables (ex. Excel
              Backup) may be attached as well.
            </li>
            <li class="mb-2">
              <strong>Tips for Success:</strong> A great stock pitch should
              include:
              <ul class="list-disc pl-5 text-gray-600 mb-2 mt-2">
                <li>Background information on the company and industry</li>
                <li>
                  Investment recommendation, price target, and recommended
                  holding period
                </li>
                <li>
                  Detail into investment thesis and drivers of your investment
                  thesis
                </li>
                <li>
                  [Optional] Valuation of the company – a model for why the
                  company is worth more than it's current stock price indicates
                </li>
                <li>Risks of this investment</li>
              </ul>
              Aim for brevity and clarity. Your pitch should reflect a view of
              what will happen to the company in the future, rather than a
              summary of the past.
            </li>
            <li>
              <strong>Language & Content:</strong> Ensure that your presentation
              is in clear, professional English and adheres to academic honesty
              and integrity guidelines. All data and research used should be
              accurately cited and referenced.
            </li>
          </ul>

          <p class="text-lg text-gray-600">
            Please ensure that your submission and presentations align with
            these guidelines. We look forward to reading your pitch!
          </p>
        </section>

        <div className="relative flex h-auto flex-col gap-y-16 p-20 bg-black justify-center items-center">
          <h1 className="text-white text-5xl">Key Dates</h1>
          <div className="relative flex flex-col h-auto justify-center items-center md:w-1/3 sm:w-1/2 w-full">
            <vl
              className="w-full absolute top-1 border-l-2 border-white"
              style={{ left: "6px", height: "calc(100% - 9rem)" }}
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
                  <div className="flex flex-col -mt-2.5 mb-16 justify-center items-start w-full">
                    <h1 className="text-2xl mb-3">{item.event}</h1>
                    <h2 className="font-extralight whitespace-pre-line">
                      {item.datetime}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <section class="text-center mb-10">
          <h3 class="text-5xl text-white mb-16">Why Participate?</h3>
          <p class="text-lg text-white mb-4">
            💸 Win $200 and get a headstart in your financial journey!
          </p>
          <p class="text-lg text-white mb-4">
            ☕ Exclusive Networking sessions via coffee chats with our
            distinguished club members and successful alumni!
          </p>
          <p class="text-lg text-white mb-4">
            🚀 Propel your career with a hands-on experience that puts your
            market knowledge to the test!
          </p>
        </section>

        <section class="bg-yellow-100 p-6 rounded-md mb-10">
          <h3 class="text-2xl font-semibold text-yellow-700 mb-4">
            🎉 Embrace the Challenge, Chart Your Course! 🎉
          </h3>
          <p class="text-lg text-gray-600 mb-4">
            Budding high-school investment enthusiasts, here's your chance to
            showcase your analytical prowess and gain invaluable feedback from
            seasoned undergraduates in the field!
          </p>
        </section>

        <section class="text-center flex gap-x-16 items-center justify-center">
          <a
            href="https://bit.ly/cibcase"
            class="inline-block bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
          >
            🔗 Easy Registration 🔗
          </a>
          <p class="inline-block bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
            PayPal @CIBerkeley
          </p>
        </section>

        <footer class="mt-12">
          <p class="text-white">With Warm Regards,</p>
          <p class="text-white font-semibold">
            The Team at Capital Investments at Berkeley
          </p>
        </footer>
        <div className="relative flex h-auto flex-col gap-y-16 p-20 bg-black justify-center items-center">
          <img src={HS} alt="" className="w-1/2"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};
