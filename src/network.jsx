import { Footer } from "./footer";
import Companies from "./resources/companies.png";
import "./table.css";
import { Nav } from "./nav";

export const Network = () => {
  return (
    <div className="w-full">
      <Nav active="network" />
      <div className="flex flex-col h-header bg-directors bg-cover bg-darken bg-center lg:bg-center-45 bg-blend-multiply gap-8 justify-center items-center">
        <h1 className="text-white text-6xl text-center mt-14">
          CIB Network & Alumni
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:p-20 pt-20 pb-20 px-4 bg-white text-black">
        <h1 className=" text-5xl text-center mb-20">Where We Work</h1>
        <img src={Companies} alt="network" className="md:"></img>
      </div>
      <div
        className="flex flex-col items-center md:p-20 pt-20 pb-20 pl-4 pr-4 text-white font-extralight"
        style={{ backgroundColor: "#181818" }}
      >
        <h1 className="text-5xl text-center mb-20">Network</h1>
        <h1 className="text-xl self-start font-poppins mb-4">
          2023 Internship & Full-time Placements
        </h1>
        <table className="tableizer-table mb-20 break-words">
          <thead>
            <tr class="tableizer-firstrow">
              <th>Name</th>
              <th>Company/Organization</th>
              <th>Division/Industry</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Allie Huang</td>
              <td>Deutsche Bank</td>
              <td>Fixed Income and Currency Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Anish Kashyap</td>
              <td>Susquehanna International Group</td>
              <td>Quantitative Trading</td>
              <td>Philadelphia, PA</td>
            </tr>
            <tr>
              <td>Annie Huang</td>
              <td>Cyberight Capital</td>
              <td>VC Analyst</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Brandon Wang</td>
              <td>Hudson River Trading</td>
              <td>Algo Engineering</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Chandni Pari Jain</td>
              <td>Apple</td>
              <td>Technical Product Management</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Chenchen Ji</td>
              <td>Deutsche Bank</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Chloe Guo</td>
              <td>Morgan Stanley</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Devang Patel</td>
              <td>Akuna Capital</td>
              <td>Trading</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Evan Mattis</td>
              <td>Amazon Web Services</td>
              <td>Software Engineering</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Hayley Lai</td>
              <td>Point72</td>
              <td>L/S Equities</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Hudson Bodourian</td>
              <td>Moelis &amp; Company</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Isaac Echeto</td>
              <td>JP Morgan</td>
              <td>Sales &amp; Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Jane Wang</td>
              <td>Centerview Partners</td>
              <td>Investment Banking</td>
              <td>Menlo Park, CA</td>
            </tr>
            <tr>
              <td>Janush Shah</td>
              <td>West Monroe</td>
              <td>Consulting</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Jeff Yang</td>
              <td>PwC Strategy&amp;</td>
              <td>Consulting</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Lorene Li</td>
              <td>PIMCO</td>
              <td>Alternative Credit</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Marilyn Yu</td>
              <td>Atlassian</td>
              <td>Software Engineering</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Max Vaysburd</td>
              <td>Jane Street</td>
              <td>Quantitative Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Mitchell Zhen</td>
              <td>Citadel</td>
              <td>Software Engineering</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Nathan Lee</td>
              <td>Cinctive Capital Management</td>
              <td>L/S Equities</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Paari Thanikachalam</td>
              <td>G Squared</td>
              <td>Venture Capital</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Prakash Srivastava</td>
              <td>Jump Trading</td>
              <td>Quantitative Research</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Sathya Panchu</td>
              <td>Formidable Asset Management</td>
              <td>L/S Equities</td>
              <td>Cincinnati, OH</td>
            </tr>
            <tr>
              <td>Shreyansh Jindal</td>
              <td>First Republic Bank</td>
              <td>Private Equity</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Sohan Dhanesh</td>
              <td>Bank of America</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Sophia Tung</td>
              <td>Oak Hill Advisors</td>
              <td>Investor Relations</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Sreetej Kalapatapu</td>
              <td>Point72</td>
              <td>L/S Equities</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Tatiana Clüver</td>
              <td>Grant Thornton </td>
              <td>Audit, Tax, and Advisory Services</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Vaarun Ramanathan</td>
              <td>Blackstone</td>
              <td>BAAM</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Vedant Kumud</td>
              <td>Jump Trading</td>
              <td>Quantitative Research</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Vanalika Talati</td>
              <td>Point72</td>
              <td>L/S Equities</td>
              <td>London, GB</td>
            </tr>
            <tr>
              <td>Vidushee Mishra</td>
              <td>Bain &amp; Company</td>
              <td>Consulting</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Zack Polyakov</td>
              <td>137 Ventures</td>
              <td>Venture Capital </td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl self-start font-poppins mb-4">
          2022 Internship & Full-time Placements
        </h1>
        <table class="tableizer-table mb-20 break-words">
          <thead>
            <tr class="tableizer-firstrow">
              <th>Name</th>
              <th>Company/Organization</th>
              <th>Division/Industry</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Isaac Echeto</td>
              <td>JP Morgan</td>
              <td>Sales & Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Ajay Balaraman</td>
              <td>JP Morgan</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Alexander Yeganyan</td>
              <td>Credit Suisse</td>
              <td>Investment Banking</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Aryan Shah</td>
              <td>Bank of America</td>
              <td>Investment Banking</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Carter Horan</td>
              <td>Lazard</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Chenchen Ji</td>
              <td>Deutsche Bank</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Chloe Guo</td>
              <td>Morgan Stanley</td>
              <td>Investment Banking</td>
              <td>San Francisco, NY</td>
            </tr>
            <tr>
              <td>Hudson Boudorian</td>
              <td>Moelis & Company</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Kevin Truong</td>
              <td>Credit Suisse</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Rafael Saviano</td>
              <td>Bank of America</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Robert Capp</td>
              <td>JP Morgan</td>
              <td>Investment Banking</td>
              <td>Houston, TX</td>
            </tr>
            <tr>
              <td>Selin Longmire</td>
              <td>Goldman Sachs</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Yoseop Hong</td>
              <td>Bank of America</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Julia Read</td>
              <td>Eastdil Secured</td>
              <td>Real Estate Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Abhishek Kumar</td>
              <td>Quest Partners LLC</td>
              <td>Quantitative Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Amy Shen</td>
              <td>Volant Trading</td>
              <td>Quantitative Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Ashwin Bindra</td>
              <td>Point72</td>
              <td>L/S Equities</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Barton Trimble</td>
              <td>Ardian</td>
              <td>Private Equity</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Devang Patel</td>
              <td>Akuna Capital</td>
              <td>Trading</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Jane Wang</td>
              <td>Prudential</td>
              <td>Investment Management</td>
              <td>Dallas, TX</td>
            </tr>
            <tr>
              <td>Junsu Park</td>
              <td>Optiver</td>
              <td>Quantitative Trading</td>
              <td>Amsterdam, NL</td>
            </tr>
            <tr>
              <td>Prakash Srivastava</td>
              <td>IMC Trading</td>
              <td>Quantitative Trading</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Serena Zheng</td>
              <td>PIMCO</td>
              <td>Trade Support</td>
              <td>Newport Beach, CA</td>
            </tr>
            <tr>
              <td>Sreetej Kalapatapu</td>
              <td>JP Morgan</td>
              <td>Asset Management</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Anura Vohra</td>
              <td>Splunk</td>
              <td>Software Engineering</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Chandni Pari Jain</td>
              <td>The Home Depot</td>
              <td>Product Management</td>
              <td>Atlanta, GA</td>
            </tr>
            <tr>
              <td>Evan Mattis</td>
              <td>Amazon</td>
              <td>Software Engineering</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Guilhermo Gonzalez</td>
              <td>Compass</td>
              <td>Product Management</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Janush Shah</td>
              <td>Hackensack Meridian Health</td>
              <td>Digital Technology Services Intern</td>
              <td>Edison, NJ</td>
            </tr>
            <tr>
              <td>Vint Lee</td>
              <td>Amazon</td>
              <td>Software Engineering</td>
              <td>Seattle, WA</td>
            </tr>
            <tr>
              <td>Anika Mirza</td>
              <td>Bain & Company</td>
              <td>Consulting</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Samantha Deng</td>
              <td>Bain & Company</td>
              <td>Consulting</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl self-start font-poppins mb-4">
          2021 Internship & Full-time Placements
        </h1>
        <table class="tableizer-table mb-20 break-words">
          <thead>
            <tr class="tableizer-firstrow">
              <th>Name</th>
              <th>Company/Organization</th>
              <th>Division/Industry</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abhishek Kumar</td>
              <td>NASA Ames Research Center</td>
              <td>Research</td>
              <td>San Jose, CA</td>
            </tr>
            <tr>
              <td>Amitej Mehta</td>
              <td>Design Everest</td>
              <td>Software Engineering</td>
              <td>Mountain View, CA</td>
            </tr>
            <tr>
              <td>Anika Mirza</td>
              <td>Morgan Stanley</td>
              <td>Equity Research</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Avneesh Mehta</td>
              <td>ZineOne, Inc.</td>
              <td>SRE - Site Reliability Engineering</td>
              <td>Milpitas, CA</td>
            </tr>
            <tr>
              <td>Carter Horan</td>
              <td>Canaccord Genuity Group</td>
              <td>Institutional Equity Sales</td>
              <td>Toronto, CA</td>
            </tr>
            <tr>
              <td>Donald Zhou</td>
              <td>Verdo Capital</td>
              <td>Private Equity</td>
              <td>Berkeley, CA</td>
            </tr>
            <tr>
              <td>Harrison deBoer</td>
              <td>West-Atlantic Partners</td>
              <td>Private Equity</td>
              <td>Kensington, CA</td>
            </tr>
            <tr>
              <td>Kevin Truong</td>
              <td>Credit Suisse</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Pranav Prabhas</td>
              <td>Andra Capital</td>
              <td>Venture Capital</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Bayan Alizadeh</td>
              <td>Morgan Stanley</td>
              <td>Investment Banking, Technology</td>
              <td>Menlo Park, CA</td>
            </tr>
            <tr>
              <td>Ray He</td>
              <td>Amazon</td>
              <td>Software Engineering</td>
              <td>Seattle, WA</td>
            </tr>
            <tr>
              <td>Ajay Balaraman</td>
              <td>Tregaron Capital</td>
              <td>Private Equity</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Annamira O'Toole</td>
              <td>Adjoint Inc.</td>
              <td>Engineering</td>
              <td>Boston, MA</td>
            </tr>
            <tr>
              <td>Ashwin Bindra</td>
              <td>CurAlea Associates</td>
              <td>Hedge Fund</td>
              <td>Princeton, NJ</td>
            </tr>
            <tr>
              <td>Selina Kim</td>
              <td>Facebook</td>
              <td>Software Engineering</td>
              <td>Menlo Park, CA</td>
            </tr>
            <tr>
              <td>Tejas Thvar</td>
              <td>Tolstoy</td>
              <td>Startup - Machine Learning</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Julia Otter</td>
              <td>Uber</td>
              <td>Strategic Finance</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl self-start font-poppins mb-4">
          2020 Internship & Full-time Placements
        </h1>
        <table class="tableizer-table mb-20 break-words">
          <thead>
            <tr class="tableizer-firstrow">
              <th>Name</th>
              <th>Company/Organization</th>
              <th>Division/Industry</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aadit Narayanaswamy</td>
              <td>Jump Trading</td>
              <td>Quantitative Research</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Achintya Suden</td>
              <td>Ardian</td>
              <td>Private Equity</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Ashna Surana</td>
              <td>BNP Paribas</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Dhruv Kathuria</td>
              <td>Redfin</td>
              <td>Software Engineering</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Gustavo Castro</td>
              <td>Verde Asset Management</td>
              <td>Investment Management</td>
              <td>São Paulo, Brazil</td>
            </tr>
            <tr>
              <td>Harsehaj Singh</td>
              <td>Lazard</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Jack Chester</td>
              <td>Stessa</td>
              <td>Software Engineering</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Justin Shen</td>
              <td>Citi</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Nikhil Kumar</td>
              <td>J.P. Morgan</td>
              <td>Sales & Trading</td>
              <td>Singapore, SG</td>
            </tr>
            <tr>
              <td>Simon McGahey</td>
              <td>JMI Equity</td>
              <td>Growth Equity</td>
              <td>San Diego, CA</td>
            </tr>
            <tr>
              <td>Zoey Li</td>
              <td>DWS</td>
              <td>Infrastructure Debt</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Zohair Madhani </td>
              <td>Mizuho</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Alex Chicote</td>
              <td>Raytheon</td>
              <td>Corporate Finance</td>
              <td>Waltham, MA</td>
            </tr>
            <tr>
              <td>Alex Kwon</td>
              <td>Marshall Wace</td>
              <td>Quantitative Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Andrew DiCandilo</td>
              <td>Wells Fargo</td>
              <td>Investment Banking Analyst</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Annie Ouyang</td>
              <td>Goldman Sachs </td>
              <td>Quantitative Research</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Aram Moghaddassi</td>
              <td>Space Sciences Labratory</td>
              <td>Space Janitor</td>
              <td>Berkeley, CA</td>
            </tr>
            <tr>
              <td>Arsh Vishen</td>
              <td>CyberCube</td>
              <td>Product Management & Analytics</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Chad Hamner</td>
              <td>Lazard Asset Management</td>
              <td>Equity Research Analyst</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Chaz Darrow</td>
              <td>Graymark Capital</td>
              <td>Real Estate</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Connor Clark</td>
              <td>CITRIS and the Banatao Institute</td>
              <td>Data Science</td>
              <td>Berkeley, CA</td>
            </tr>
            <tr>
              <td>Gabby Costamagna </td>
              <td>Wells Fargo</td>
              <td>Sales & Trading</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Harsh Ainapure</td>
              <td>J.P. Morgan</td>
              <td>Sales & Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Henry Jin</td>
              <td>Dymon Asia Capital</td>
              <td>Investment Management</td>
              <td>Singapore, SG</td>
            </tr>
            <tr>
              <td>Jessica He</td>
              <td>Goldman Sachs</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Julia Otter</td>
              <td>The TCW Group</td>
              <td>Equity Research</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Katherine Zhao</td>
              <td>Credit Suisse</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Lindsay Timmerman</td>
              <td>Wells Fargo</td>
              <td>Investment Banking</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Mae Zheng</td>
              <td>Centerview Partners</td>
              <td>Investment Banking, Technology</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Michelle Ki</td>
              <td>Goldman Sachs </td>
              <td>Investment Management</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Mohammad Ramadan</td>
              <td>Bank of America Merill Lynch</td>
              <td>Investment Banking, Technology</td>
              <td>Palo Alto, CA</td>
            </tr>
            <tr>
              <td>Vincent Liu</td>
              <td>Amazon</td>
              <td>Software Engineering</td>
              <td>Seattle, WA</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl self-start font-poppins mb-4">
          2018, 2019 Internship & Full-time Placements
        </h1>
        <table class="tableizer-table break-words">
          <thead>
            <tr class="tableizer-firstrow">
              <th>Name</th>
              <th>Company/Organization</th>
              <th>Division/Industry</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ammar Inayatali</td>
              <td>Stanford Law School</td>
              <td>Economics Research Fellow</td>
              <td>Stanford, CA</td>
            </tr>
            <tr>
              <td>Andrea Scemanenco</td>
              <td>Citi</td>
              <td>Sales & Trading</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Arun Kalyanaraman</td>
              <td>AQR Capital</td>
              <td>Portfolio Management</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Badre Alkurdy</td>
              <td>Point72 Asset Management</td>
              <td>Equity Analyst</td>
              <td>Westport, CO</td>
            </tr>
            <tr>
              <td>Caroline Newman</td>
              <td>Goldman Sachs</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Christine Weltmer</td>
              <td>Tiedemann Advisors</td>
              <td>Investment Management</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Dani Goland</td>
              <td>Net Alpha Financial Systems</td>
              <td>Chief Technology Officer / Startup</td>
              <td>Birmingham, MI</td>
            </tr>
            <tr>
              <td>Grace Zilli</td>
              <td>Deloitte</td>
              <td>Audit</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Ishaan Madan</td>
              <td>BlackRock</td>
              <td>Financial Markets Advisory</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Jackson Engles</td>
              <td>Lazard</td>
              <td>Investment Banking, Technology</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Jared Arat</td>
              <td>RBC Capital Markets</td>
              <td>Equity Research</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Jasmine Eshtehar</td>
              <td>Estée Lauder</td>
              <td>Senior Analyst</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Javier Nieto</td>
              <td>Goldman Sachs</td>
              <td>Investment Banking</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Kevin Arifin</td>
              <td>Citadel</td>
              <td>Quantitative Developer</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Krishna Reddy</td>
              <td>Dodge & Cox</td>
              <td>Research Associate</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Maks Ivanov</td>
              <td>Bridgewater Associates</td>
              <td>Trading Technology Associate</td>
              <td>Westport, CO</td>
            </tr>
            <tr>
              <td>Matt Warnagieris</td>
              <td>Seacoast Capital</td>
              <td>Investment Management</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Max Rewell</td>
              <td>Finnish Defensive Forces</td>
              <td>Officer Cadet</td>
              <td>Helsinki, FI</td>
            </tr>
            <tr>
              <td>Mukil Loganathan</td>
              <td>Verkada</td>
              <td>Software Engineering</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Nathan Topolanski</td>
              <td>DRW</td>
              <td>Quantitative Trading - Options</td>
              <td>Chicago, IL</td>
            </tr>
            <tr>
              <td>Nick Catranis</td>
              <td>Indeed</td>
              <td>Technical Business Analyst</td>
              <td>Austin, TX</td>
            </tr>
            <tr>
              <td>Nikhil Nagpal</td>
              <td>Dodge & Cox</td>
              <td>Research Associate</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Nuh Bahemia</td>
              <td>Deloitte</td>
              <td>Transfer Pricing</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Payas Parab</td>
              <td>Deloitte Corporate Finance</td>
              <td>Investment Banking</td>
              <td>Los Angeles, CA</td>
            </tr>
            <tr>
              <td>Philip Zhou</td>
              <td>Capital Group</td>
              <td>Investment Management</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Pranav Parthasarathy</td>
              <td>Facebook</td>
              <td>Software Engineer</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Raymond Chan</td>
              <td>Citadel</td>
              <td>Quantitative Research</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>Rouhin Ghosh</td>
              <td>Builders VC</td>
              <td>Venture Capital</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Scott Post</td>
              <td>Bridgewater Associates</td>
              <td>Investment Engineer</td>
              <td>Westport, CO</td>
            </tr>
            <tr>
              <td>Shakeer Ahmad</td>
              <td>Oliver Wyman</td>
              <td>Management Consulting</td>
              <td>Doha, QA</td>
            </tr>
            <tr>
              <td>Zubin Koticha</td>
              <td>Opyn</td>
              <td>CEO, Co-Founder</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
