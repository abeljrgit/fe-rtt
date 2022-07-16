import { Fragment, useState } from "react";
import logo from "../img/logo.svg";
import workingIllustration from "../img/illustration-working.svg";
import iconBrandRecognition from "../img/icon-brand-recognition.svg";
import iconDetailedRecords from "../img/icon-detailed-records.svg";
import iconFullCustomizable from "../img/icon-fully-customizable.svg";
import iconFacebook from "../img/icon-facebook.svg";
import iconInstagram from "../img/icon-instagram.svg";
import iconTwitter from "../img/icon-twitter.svg";
import iconPinterest from "../img/icon-pinterest.svg";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <Fragment>
      {/* Nav Container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex Container For All Items */}
        <div className="flex items-center justify-between">
          {/* Flex Container For Logo/Menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src={logo} alt="Logo" />
            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </a>
            </div>
          </div>

          {/* Right Button Menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex ">
            <div className="hover:text-veryDarkViolet">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            className={`${
              menu ? "open" : ""
            } block hamburger lg:hidden focus:outline-none`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`absolute ${
            menu ? "" : "hidden"
          } p-6 rounder-lg bg-darkViolet left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src={workingIllustration} alt="Illustration Working" />
          </div>
        </div>
      </section>
      {/* Shorten Section */}
      <section id="shorten" className="relateive bg-gray-100">
        {/* Shorten Container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form  */}
          <form
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here"
              id="link-input"
            />
            <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
              Shorten It!
            </button>
            {/* Error Message */}
            <div
              id="err-msg"
              className="absolute left-7 bottom-3 text-red text-sm italic"
            ></div>
          </form>
          {/* Link */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/k4IKyk</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://twitter.com/frontendmentor
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gxOXp9</div>
              <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gob3X9</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* Feature Box Section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          {/* Vertical Line */}
          <div className="absolute w-2 h-full left-1/2 -ml-1 bg-cyan md:hidden"></div>
          {/* Box */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={iconBrandRecognition} alt="Icon Brand Recognition" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          {/* Box */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={iconBrandRecognition} alt="Icon Brand Recognition" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* Box */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={iconFullCustomizable} alt="Detailed Records" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          {/* Logo */}
          <img src={logo} alt="Logo" />
          {/* Menus Container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* Menu */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Link shortening
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Branded Links
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Analytics
                </a>
              </div>
            </div>
            {/* Menu */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Support
                </a>
              </div>
            </div>
            {/* Menu */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  About
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Out Team
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Social Container */}
          <div className="flex space-x-6">
            <a href="#">
              <img src={iconFacebook} alt="" className="ficon" />
            </a>
            <a href="#">
              <img src={iconTwitter} alt="" className="ficon" />
            </a>
            <a href="#">
              <img src={iconPinterest} alt="" className="ficon" />
            </a>
            <a href="#">
              <img src={iconInstagram} alt="" className="ficon" />
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
