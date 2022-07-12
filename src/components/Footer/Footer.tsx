import blogrLogo from "../../img/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-VeryDarkBlackBlue rounded-tr-sectionCurve">
      <div className="container mx-auto flex flex-col items-center py-20 md:flex-row md:items-start md:justify-between md:px-16">
        <div className="mb-10">
          <img src={blogrLogo} alt="Blogr Logo" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-medium mb-4 text-center md:text-left">
            Product
          </span>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Overview
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Features
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Integrations
          </a>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <span className="text-white font-medium mb-4 text-center md:text-left">
            Company
          </span>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            About
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Team
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Careers
          </a>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <span className="text-white font-medium mb-4 text-center md:text-left">
            Connect
          </span>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            Newsletter
          </a>
          <a
            href="#"
            className="text-GrayishBlue text-center mt-1 md:text-left"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
