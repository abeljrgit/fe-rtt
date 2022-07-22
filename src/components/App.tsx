import { Fragment, useState } from "react";
import illustrationIntro from "../img/illustration-intro.png";
import iconAccessAnywhere from "../img/icon-access-anywhere.svg";
import iconSecurity from "../img/icon-security.svg";
import iconCollaboration from "../img/icon-collaboration.svg";
import iconAnyFile from "../img/icon-any-file.svg";
import illustrationStayProductive from "../img/illustration-stay-productive.png";
import iconArrow from "../img/icon-arrow.svg";
import bgQuotes from "../img/bg-quotes.png";
import profile1 from "../img/profile-1.jpg";
import profile2 from "../img/profile-2.jpg";
import profile3 from "../img/profile-3.jpg";
import iconPhone from "../img/icon-phone.svg";
import iconEmail from "../img/icon-email.svg";
import facebookIcon from "../img/facebook.svg";
import instagramIcon from "../img/instagram.svg";
import twitterIcon from "../img/twitter.svg";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const buttonClickHandler = () => {
    setDarkmode((darkmode) => !darkmode);
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <Fragment>
      <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20 ">
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
        <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          <a href="#features" className="hover:text-accentCyan">
            Features
          </a>
          <a href="#testimonials" className="hover:text-accentCyan">
            Testimonials
          </a>
          <button
            id="theme-toggle"
            onClick={buttonClickHandler}
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
          >
            {/* <!-- Dark SVG Icon --> */}
            <svg
              id="theme-toggle-dark-icon"
              className={`w-5 h-5 ${darkmode ? "" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            {/* <!-- Light SVG Icon --> */}
            <svg
              id="theme-toggle-light-icon"
              className={`w-5 h-5 ${darkmode ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
      >
        {/* Hero Container */}
        <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
          <img
            src={illustrationIntro}
            alt="Illustration Intro"
            className="mx-auto"
          />
          <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
        {/* Features Container */}
        <div className="container mx-auto px-6 pb-32">
          {/* First Row  */}
          <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {/* Item */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={iconAccessAnywhere} alt="Access Anywhere" />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={iconSecurity} alt="Security" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          {/* Second Row  */}
          <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {/* Item */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={iconCollaboration} alt="Collaboration" />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={iconAnyFile} alt="Any File" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productive Section */}
      <section id="productive" className="bg-white dark:bg-darkBlue">
        {/* Productive Container */}
        <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
          {/* Image*/}
          <div className="md:w-1/2">
            <img
              src={illustrationStayProductive}
              alt="Stay Productive"
              className="mb-10"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col items-start md:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="ax-w-md text-xl font-bold md:text-4xl">
                Stay productive, wherever you are
              </h4>
              <p className="text-md md:text-lg">
                {" "}
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-md md:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            {/* Link */}
            <div className="block mt-4">
              <a
                href="#"
                className="border-b border-accentCyan text-accentCyan"
              >
                See how Flyo works
                <img src={iconArrow} alt="Icon Arrow" className="inline pb-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
        {/* Testimonials Container */}
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {/* Boxes Container */}
          <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
            {/* Quotes Image */}
            <img
              src={bgQuotes}
              alt="Bg Quotes"
              className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
            />
            {/* Box */}
            <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img
                  src={profile1}
                  alt="Profile 1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h5 className="text-sm font-semibold">Satish Patel</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle
                  </p>
                </div>
              </div>
            </div>

            {/* Box */}
            <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img
                  src={profile2}
                  alt="Profile 1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle2
                  </p>
                </div>
              </div>
            </div>

            {/* Box */}
            <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img
                  src={profile3}
                  alt="Profile 1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h5 className="text-sm font-semibold">Eva Boyd</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section
        id="early-access"
        className="relative px-6 dark:bg-darkBlue2 md:px-0"
      >
        <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
          <h5 className="text-2xl font-bold">Get early access today</h5>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          {/* Input & Button Container */}
          <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="w-full md:flex-1">
              <input
                type="text"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <button className="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBlue2 text-white">
        <div className="container mx-auto pt-12 px-5 pb-10">
          {/* <!-- Flex Container For All Items --> */}
          <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
            {/* <!-- Email & Phone --> */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-3 md:-mt-10">
                <div className="w-6">
                  <img src={iconPhone} alt="" className="scale-10" />
                </div>
                <div>+1-543-123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6">
                  <img src={iconEmail} alt="" className="scale-10" />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>

            {/* <!-- Menus --> */}
            <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
              <div className="flex flex-col space-y-3">
                <a href="#">About</a>
                <a href="#">Jobs</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
              </div>
              <div className="flex flex-col space-y-3">
                <a href="#">Contact Us</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
              </div>
            </div>

            {/* <!-- Social --> */}
            <div className="flex justify-center pb-10 space-x-3">
              <div>
                <a href="#">
                  <img
                    src={facebookIcon}
                    alt=""
                    className="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src={twitterIcon}
                    alt=""
                    className="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src={instagramIcon}
                    alt=""
                    className="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
