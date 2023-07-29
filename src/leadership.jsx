import { Footer } from "./footer";
import Logo from "./resources/logo.png";
import Hayley from "./resources/hayley.jpeg";
import Sreetej from "./resources/sreetej.jpg";
import Prakash from "./resources/prakash.jpg";
import Chandni from "./resources/chandni.jpg";
import Frances from "./resources/frances.jpg";
import Sid from "./resources/sid.jpeg";
import Adit from "./resources/adit.jpg";
import Aman from "./resources/aman.jpg";
import Annie from "./resources/annie.jpeg";
import Chenchen from "./resources/chenchen.jpeg";
import Evan from "./resources/evan.png";
import Haris from "./resources/haris.jpg";
import Jane from "./resources/jane.png";
import Janush from "./resources/janush.png";
import Nathan from "./resources/nathan.png";
import Ray from "./resources/ray.jpg";
import Shri from "./resources/shri.jpeg";
import Tatiana from "./resources/tatiana.png";
import Surya from "./resources/surya.jpg";
import Medhika from "./resources/medhika.jpg";
import Max from "./resources/max.jpg";
import Vaarun from "./resources/vaarun.jpeg";
import Arunava from "./resources/arunava.jpg";
import Isaac from "./resources/isaac.jpeg";
import Zachary from "./resources/zachary.jpg";
import { Nav } from "./nav";

const presidents = [
  {
    name: "Hayley Lai",
    title: "Co-President",
    image: Hayley,
    linkedin: "https://www.linkedin.com/in/hayleyalai/",
  },
  {
    name: "Sreetej Kalapatapu",
    title: "Co-President & Education Director",
    image: Sreetej,
    linkedin: "https://www.linkedin.com/in/sreetejkalapatapu/",
  },
  {
    name: "Prakash Srivastava",
    title: "President, CIB Quant",
    image: Prakash,
    linkedin: "https://www.linkedin.com/in/apsrivastava141/",
  },
];

const leaders = [
  {
    name: "Chandni Pari Jain",
    title: "VP of Internal Operations",
    image: Chandni,
    linkedin: "https://www.linkedin.com/in/chandniparijain/",
  },
  {
    name: "Frances Wong",
    title: "VP of External Operations",
    image: Frances,
    linkedin: "https://www.linkedin.com/in/frances-wong-34a831189/",
  },
  {
    name: "Aman Arain",
    title: "VP, Fundamental Manager",
    image: Aman,
    linkedin: "https://www.linkedin.com/in/aarain13/",
  },
  {
    name: "Chenchen Ji",
    title: "VP of Diversity, Equity, & Inclusion (DEI)",
    image: Chenchen,
    linkedin: "https://www.linkedin.com/in/chenchen-ji-b320bb169/",
  },
  {
    name: "Janush Shah",
    title: "Co-Recruitment Chair",
    image: Janush,
    linkedin: "https://www.linkedin.com/in/janushshah/",
  },
  {
    name: "Annie (Tianyu) Huang",
    title: "Co-Recruitment Chair",
    image: Annie,
    linkedin: "https://www.linkedin.com/in/tianyu-annie-huang/",
  },
  {
    name: "Zachary Polyakov",
    title: "Co-Social Chair",
    image: Zachary,
    linkedin: "https://www.linkedin.com/in/zachary-polyakov-0a26998a/",
  },
  {
    name: "Tatiana Clüver",
    title: "Co-Social Chair",
    image: Tatiana,
    linkedin: "https://www.linkedin.com/in/tatianacluver/",
  },
  {
    name: "Haris Arain",
    title: "Co-External Outreach Chair",
    image: Haris,
    linkedin: "https://www.linkedin.com/in/haris-arain-140bb8195/",
  },
  {
    name: "Shri Gopal",
    title: "Co-External Outreach Chair",
    image: Shri,
    linkedin: "https://www.linkedin.com/in/shrinidhi-gopal/",
  },
  {
    name: "Adit Saxena",
    title: "Investment Committee",
    image: Adit,
    linkedin: "https://www.linkedin.com/in/adit-saxena-4a92591b8/",
  },
  {
    name: "Evan Mattis",
    title: "Investment Committee",
    image: Evan,
    linkedin: "https://www.linkedin.com/in/evan-s-mattis/",
  },
  {
    name: "Jane Wang",
    title: "Investment Committee",
    image: Jane,
    linkedin: "https://www.linkedin.com/in/jyjw/",
  },
  {
    name: "Ray Zhou",
    title: "Co-Education Chair",
    image: Ray,
    linkedin: "https://www.linkedin.com/in/rayzheruizhou/",
  },
  {
    name: "Nathan Lee",
    title: "Co-Education Chair",
    image: Nathan,
    linkedin: "https://www.linkedin.com/in/nathan-lee-027660210/",
  },
  {
    name: "Sid Punjabi",
    title: "Fund Manager",
    image: Sid,
    linkedin: "https://www.linkedin.com/in/sid-punjabi/",
  },
];

const managers = [
  {
    name: "Isaac Echeto",
    title: "Macro",
    image: Isaac,
  },
  {
    name: "Aman Arain",
    title: "Technology, Media & Telecom (TMT)",
    image: Aman,
  },
  {
    name: "Arunava Nag",
    title: "Healthcare",
    image: Arunava,
  },
  {
    name: "Vaarun Ramanathan",
    title: "Consumer",
    image: Vaarun,
  },
  {
    name: "Sid Punjabi",
    title: "Macro",
    image: Sid,
  },
];

const leads = [
  {
    name: "Adit Saxena",
    title: "Credit Rating Prediction",
    image: Adit,
  },
  {
    name: "Prakash Srivastava",
    title: "Generative Adversarial Networks",
    image: Prakash,
  },
  {
    name: "Surya Rajan",
    title: "Covered Calls",
    image: Surya,
  },
  {
    name: "Medhika Athreya",
    title: "Barbell Trading",
    image: Medhika,
  },
  {
    name: "Max Vaysburd",
    title: "Generative Adversarial Networks",
    image: Max,
  },
];

export const Leadership = () => {
  return (
    <div className="w-full bg-black text-white relative">
      <Nav active="leadership" />
      <div className="flex flex-col h-header bg-black bg-cover bg-darken bg-center bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          Leadership Team
        </h1>
      </div>
      <div className="ml-14 mr-14 flex flex-col items-center gap-y-16 mb-20 relative">
        <div className="presidents flex gap-x-4 flex-wrap justify-center relative gap-y-16">
          {presidents.map((president) => (
            <div className="relative flex flex-col items-center font-poppins gap-y-1 pointer-events-none">
              <img
                src={Logo}
                className="absolute h-8 left-0 top-1"
                alt="logo"
              />
              <img
                src={president.image}
                className="h-64 w-64 object-cover mb-3"
                alt="pic"
              />
              <h1 className="text-lg">{president.name}</h1>
              <p className="font-extralight text-sm">{president.title}</p>
            </div>
          ))}
        </div>
        <div className="relative leaders flex flex-wrap gap-x-4 gap-y-16 justify-center">
          {leaders.map((leader) => (
            <div className="relative flex flex-col items-center font-poppins gap-y-1 pointer-events-none">
              <img
                src={Logo}
                className="absolute h-8 left-0 top-1"
                alt="logo"
              />
              <img
                src={leader.image}
                className="h-64 w-64 object-cover mb-3"
                alt="pic"
              />
              <h1 className="text-lg">{leader.name}</h1>
              <p className="font-extralight text-sm">{leader.title}</p>
            </div>
          ))}
        </div>
        <h1 className="text-white text-6xl text-center mt-14 mb-20">
          Portfolio Managers (Spring '23)
        </h1>
        <div className="relative flex flex-col items-center">
          <div className="relative managers flex flex-wrap gap-x-4 justify-center gap-y-16">
            {managers.map((manager) => (
              <div className="relative flex flex-col items-center font-poppins gap-y-1 pointer-events-none">
                <img
                  src={Logo}
                  className="absolute h-8 left-0 top-1"
                  alt="logo"
                />
                <img
                  src={manager.image}
                  className="h-64 w-64 object-cover mb-3"
                  alt="pic"
                />
                <h1 className="text-lg">{manager.name}</h1>
                <p className="font-extralight text-sm">{manager.title}</p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-white text-6xl text-center mt-14 mb-20">
          Trading Group Leads (Spring '23)
        </h1>
        <div className="relative flex flex-col items-center">
          <div className="relative leads flex flex-wrap gap-x-4 justify-center gap-y-16">
            {leads.map((lead) => (
              <div className="relative flex flex-col items-center font-poppins gap-y-1 pointer-events-none">
                <img
                  src={Logo}
                  className="absolute h-8 left-0 top-1"
                  alt="logo"
                />
                <img
                  src={lead.image}
                  className="h-64 w-64 object-cover mb-3"
                  alt="pic"
                />
                <h1 className="text-lg">{lead.name}</h1>
                <p className="font-extralight text-sm">{lead.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
