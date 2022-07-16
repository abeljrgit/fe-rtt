import { Fragment, useState } from "react";
import logo from "../img/logo.svg";
import interactiveImg from "../img/desktop/image-interactive.jpg";
import deepEarthPc from "../img/desktop/image-deep-earth.jpg";
import deepEarthSp from "../img/mobile/image-deep-earth.jpg";
import nightArcadePc from "../img/desktop/image-night-arcade.jpg";
import nightArcadeSp from "../img/mobile/image-night-arcade.jpg";
import soccerTeamPc from "../img/desktop/image-soccer-team.jpg";
import soccerTeamSp from "../img/mobile/image-soccer-team.jpg";
import gridPc from "../img/desktop/image-grid.jpg";
import gridSp from "../img/mobile/image-grid.jpg";
import fromAbovePc from "../img/desktop/image-from-above.jpg";
import fromAboveSp from "../img/mobile/image-from-above.jpg";
import pocketBorealisPc from "../img/desktop/image-pocket-borealis.jpg";
import pocketBorealisSp from "../img/mobile/image-pocket-borealis.jpg";
import curiosityPc from "../img/desktop/image-curiosity.jpg";
import curiositySp from "../img/mobile/image-curiosity.jpg";
import fisheyePc from "../img/desktop/image-fisheye.jpg";
import fisheyeSp from "../img/mobile/image-fisheye.jpg";
import facebookIcon from "../img/icon-facebook.svg";
import instagramIcon from "../img/icon-instagram.svg";
import pinterestIcon from "../img/icon-pinterest.svg";
import twitterIcon from "../img/icon-twitter.svg";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <Fragment>
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Nav/Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
            <img src={logo} alt="Logo" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* Hamburger Button */}
            <div className="md:hidden" onClick={toggleMenu}>
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          <div
            id="menu"
            className={`${
              menu ? "flex" : "hidden"
            } absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section id="feature">
        {/* Feature Container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}
          <img src={interactiveImg} alt="Interactive Img" />
          {/* Text Container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      {/* Creations Section */}
      <section id="creations">
        {/* Creations Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* Creations Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden btn md:block">See All</button>
          </div>

          {/* Items Container */}
          <div className="item-container">
            {/* Item 1 */}
            <div className="group item">
              <img
                src={deepEarthPc}
                alt="Deep Earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={deepEarthSp}
                alt="Deep Earth"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Deep Earth</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={nightArcadePc}
                alt="Night Arcade"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={nightArcadeSp}
                alt="Night Arcade"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Night Arcade</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={soccerTeamPc}
                alt="Soccer Team"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={soccerTeamSp}
                alt="Soccer Team"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Soccer Team</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={gridPc}
                alt="Grid"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img src={gridSp} alt="Grid" className="w-full md:hidden" />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Grid</h5>
            </div>
          </div>
          {/* Items Container */}
          <div className="item-container mt-10">
            {/* Item 1 */}
            <div className="group item">
              <img
                src={fromAbovePc}
                alt="From Above"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={fromAboveSp}
                alt="From Above"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>From Above</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={pocketBorealisPc}
                alt="Pocket Borealis"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={pocketBorealisSp}
                alt="Pocket Borealis"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Pocket Borealis</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={curiosityPc}
                alt="Curiosity"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={curiositySp}
                alt="Curiosity"
                className="w-full md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Curiosity</h5>
            </div>
            {/* Item 1 */}
            <div className="group item">
              <img
                src={fisheyePc}
                alt="Fisheye"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img src={fisheyeSp} alt="Fisheye" className="w-full md:hidden" />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>Fisheye</h5>
            </div>
          </div>
          {/* Bottom Button Container */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer Flex Container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* Menu & Logo Container */}
            <div className="flex flex-col items-center space-y-8 md:items start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <img src={logo} alt="Logo" className="w-44 md:ml-3" />
              </div>
              {/* Menu Container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* Social & Copyright Container*/}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icons Container */}
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                  <a href="#">
                    <img src={facebookIcon} alt="Facebook" className="h-6" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={twitterIcon} alt="Twitter" className="h-6" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={pinterestIcon} alt="Pinterest" className="h-6" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={instagramIcon} alt="Instagram" className="h-6" />
                  </a>
                </div>
              </div>

              {/* Copyrights */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
