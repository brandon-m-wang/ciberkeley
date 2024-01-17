import { Footer } from "./footer";
import Logo from "./resources/logo.png";
import Hayley from "./resources/hayley.jpeg";
import Sreetej from "./resources/sreetej.jpg";
import Prakash from "./resources/prakash.jpg";
import Chandni from "./resources/chandni.jpg";
import Frances from "./resources/frances.jpg";
import Sid from "./resources/sid.jpg";
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
import Mira from "./resources/mira.JPG";
import Vaarun from "./resources/vaarun.jpeg";
import Arunava from "./resources/arunava.jpg";
import Isaac from "./resources/isaac.jpeg";
import Zachary from "./resources/zachary.jpg";
import Allie from "./resources/allie.png";
import Ailun from "./resources/ailun.JPG";
import Gargee from "./resources/gargee.jpeg";
import Iris from "./resources/iris.jpeg";
import Abhi from "./resources/abhi.jpg";
import Hannah from "./resources/hannah.jpg";
import Nihal from "./resources/nihal.jpg";
import Sathya from "./resources/sathya.jpg";
import Kevin from "./resources/kevin.JPG";
import Aditya from "./resources/aditya.jpeg";
import Sanya from "./resources/sanya.jpeg";
import Kelly from "./resources/kelly.PNG";
import Vaishu from "./resources/vaishu.jpg";

import { Nav } from "./nav";
import { FaLinkedin } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

const presidents = [
  {
    name: "Frances Wong",
    title: "President",
    image: Frances,
    linkedin: "https://www.linkedin.com/in/frances-wong-34a831189/",
    coffee: "https://calendly.com/franceswong-wi4/cib-coffee-chat-1",
  },
  {
    name: "Arunava Nag",
    title: "President",
    image: Arunava,
    coffee: "https://calendly.com/arunavaknag/30min",
  },
];

const vps = [
  {
    name: "Mira Kapadia",
    title: "Quant VP",
    image: Mira,
    linkedin: "https://www.linkedin.com/in/mira-kapadia/",
    coffee: "https://calendly.com/mirakapadia/coffee-chat",
  },
  {
    name: "Chandni Pari Jain",
    title: "External VP",
    image: Chandni,
    linkedin: "https://www.linkedin.com/in/chandniparijain/",
    coffee: "",
  },
  {
    name: "Ray Zhou",
    title: "Fundamental VP",
    image: Ray,
    linkedin: "https://www.linkedin.com/in/rayzheruizhou/",
  },
  {
    name: "Gargee Piplani",
    title: "Internal VP",
    image: Gargee,
    linkedin: "https://www.linkedin.com/in/gargeepiplani",
    coffee: "https://calendly.com/gargee-p/schedule",
  },
  {
    name: "Jane Wang",
    title: "DEI VP",
    image: Jane,
    coffee: "https://calendly.com/janeyjwang/30-min-coffee-chat",
  },
];

const leaders = [
  {
    name: "Sathya Panchu",
    title: "Co-Investment Chair",
    image: Sathya,
    linkedin: "https://www.linkedin.com/in/sathya-panchu/",
    coffee: "https://calendly.com/sathya-panchu/cib-coffee-chats",
  },
  {
    name: "Sid Punjabi",
    title: "Co-Investment Chair",
    image: Sid,
    linkedin: "https://www.linkedin.com/in/sid-punjabi/",
  },
  {
    name: "Abhi Pomalapally",
    title: "Outreach Chair",
    image: Abhi,
    linkedin: "https://www.linkedin.com/in/apomalapally/",
  },
  {
    name: "Allie Huang",
    title: "Professional Development Chair",
    image: Allie,
    linkedin: "https://www.linkedin.com/in/allie-h-6a49a5202/",
  },
  {
    name: "Kevin Dong",
    title: "Fundraising Chair",
    image: Kevin,
    linkedin: "",
    coffee: "https://calendly.com/kevindong8/cib-coffee-chat",
  },
  {
    name: "Aditya Jain",
    title: "Media and Tech Chair",
    image: Aditya,
    linkedin: "",
    coffee: "https://calendly.com/aditya-j/cib-coffee-chat",
  },
  {
    name: "Aman Arain",
    title: "Director Education",
    image: Aman,
    linkedin: "https://www.linkedin.com/in/aarain13/",
    coffee: "https://calendly.com/aarain",
  },
  {
    name: "Nathan Lee",
    title: "Co-Education Chair",
    image: Nathan,
    linkedin: "https://www.linkedin.com/in/nathan-lee-027660210/",
  },
  {
    name: "Vaishu Enduri",
    title: "Co-Education Chair",
    image: Vaishu,
    linkedin: "",
    coffee: "https://calendly.com/vaishuenduri",
  },
  {
    name: "Sanya Chaturvedi",
    title: "Social Chair",
    image: Sanya,
    linkedin: "",
    coffee: "https://calendly.com/sanyachaturvedi/30min",
  },
  {
    name: "Kelly He",
    title: "Recruitment Chair",
    image: Kelly,
    linkedin: "",
    coffee: "https://calendly.com/kelly-xw-he/30min",
  },
];

// const managers = [
//   {
//     name: "Isaac Echeto",
//     title: "Macro",
//     image: Isaac,
//   },
//   {
//     name: "Aman Arain",
//     title: "Technology, Media & Telecom (TMT)",
//     image: Aman,
//   },
//   {
//     name: "Arunava Nag",
//     title: "Healthcare",
//     image: Arunava,
//   },
//   {
//     name: "Vaarun Ramanathan",
//     title: "Consumer",
//     image: Vaarun,
//   },
//   {
//     name: "Sid Punjabi",
//     title: "Macro",
//     image: Sid,
//   },
// ];

// const leads = [
//   {
//     name: "Adit Saxena",
//     title: "Credit Rating Prediction",
//     image: Adit,
//   },
//   {
//     name: "Prakash Srivastava",
//     title: "Generative Adversarial Networks",
//     image: Prakash,
//   },
//   {
//     name: "Surya Rajan",
//     title: "Covered Calls",
//     image: Surya,
//   },
//   {
//     name: "Medhika Athreya",
//     title: "Barbell Trading",
//     image: Medhika,
//   },
// ];

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
            <div className="relative flex flex-col items-center font-poppins gap-y-1">
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
              <p className="font-extralight text-sm mb-2">{president.title}</p>
              <div className="flex gap-x-2 items-center text-xl">
                <a
                  className="text-xl"
                  href={president.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                {president.coffee && (
                  <a
                    className="text-xl"
                    href={president.coffee}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaCoffee />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-white text-6xl text-center mt-14 mb-20">
          Vice Presidents
        </h1>
        <div className="relative leaders flex flex-wrap gap-x-4 gap-y-16 justify-center">
          {vps.map((vp) => (
            <div className="relative flex flex-col items-center font-poppins gap-y-1">
              <img
                src={Logo}
                className="absolute h-8 left-0 top-1"
                alt="logo"
              />
              <img
                src={vp.image}
                className="h-64 w-64 object-cover mb-3"
                alt="pic"
              />
              <h1 className="text-lg">{vp.name}</h1>
              <p className="font-extralight text-sm mb-2">{vp.title}</p>
              <div className="flex gap-x-2 items-center text-xl">
                <a
                  className="text-xl"
                  href={vp.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                {vp.coffee && (
                  <a
                    className="text-xl"
                    href={vp.coffee}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaCoffee />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-white text-6xl text-center mt-14 mb-20">
          Directors & Chairs
        </h1>
        <div className="relative leaders flex flex-wrap gap-x-4 gap-y-16 justify-center">
          {leaders.map((leader) => (
            <div className="relative flex flex-col items-center font-poppins gap-y-1">
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
              <p className="font-extralight text-sm mb-2">{leader.title}</p>
              <div className="flex gap-x-2 items-center text-xl">
                <a
                  className="text-xl"
                  href={leader.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                {leader.coffee && (
                  <a
                    className="text-xl"
                    href={leader.coffee}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaCoffee />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <h1 className="text-white text-6xl text-center mt-14 mb-20">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
