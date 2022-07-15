import { Fragment } from "react";
import logo from "../img/logo.svg";
import computerImg from "../img/image-computer.png";
import devicesImg from "../img/image-devices.png";
import blacklistIcon from "../img/icon-blacklist.svg";
import textIcon from "../img/icon-text.svg";
import previewIcon from "../img/icon-preview.svg";
import googleLogo from "../img/logo-google.png";
import ibmLogo from "../img/logo-ibm.png";
import hpLogo from "../img/logo-hp.png";
import microsoftLogo from "../img/logo-microsoft.png";
import vectorGraphicsLogo from "../img/logo-vector-graphics.png";
import facebookIcon from "../img/icon-facebook.svg";
import twitterIcon from "../img/icon-twitter.svg";
import instagramIcon from "../img/icon-instagram.svg";

function App() {
  return (
    <Fragment>
      <section id="hero">
        <div className="section-container mb-40 px-10 pt-16">
          <img src={logo} alt="Logo" className="mx-auto my-16" />
          <h3 className="">A history of everything you copy</h3>
          <p className="section-content mb-10 text-2xl ">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <section id="snippets">
        <div className="section-container my-20 px-10">
          <h3 className="">Keep track of your snippets</h3>
          <p className="section-content mb-24 text-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      <section id="features">
        <div className="section-container my-20 ">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                src={computerImg}
                alt="Computer Image"
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div>
                <h5>iCloud Sync</h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h5>Completely History</h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-10 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src={devicesImg} alt="Devices Image" className="mx-auto" />
        </div>
      </section>

      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16 text-xl">
            We've got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <img src={blacklistIcon} alt="Blacklist Icon" className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={textIcon} alt="Text Icon" className="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={previewIcon} alt="Preview Icon" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src={googleLogo} alt="Google" />
          <img src={ibmLogo} alt="IBM" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={hpLogo} alt="Hp" />
          <img src={vectorGraphicsLogo} alt="Vector Graphics" />
        </div>
      </section>

      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="section-content mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src={logo} alt="Logo" className="scale-50" />
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src={facebookIcon}
                    alt="Facebook Icon"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitterIcon}
                    alt="Facebook Icon"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src={instagramIcon}
                    alt="Facebook Icon"
                    className="duration-200 ficon"
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
