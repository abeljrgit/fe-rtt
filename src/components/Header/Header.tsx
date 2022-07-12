import blogrLogo from "../../img/logo.svg";
import DropdownAccordionItem from "./DropdownAccordionItem";
import LoginSignUp from "./LoginSignUp";
import Burger from "./Burger";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(true);

  const data = [
    {
      head: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      head: "Company",
      links: ["About", "Team", "Blog", "Careers"],
    },
    {
      head: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  const ddatArr = data.map((content, i) => {
    return <DropdownAccordionItem d={content} key={i} />;
  });

  const toggleMenu = (val: boolean) => {
    setMenuVisibility(val);
  };

  useEffect(() => {
    window.matchMedia("(max-width:768px)").addEventListener("change", (e) => {
      if (e.matches) {
        setMenuVisibility(false);
      } else {
        setMenuVisibility(true);
      }
    });
    if (window.innerWidth <= 768) {
      setMenuVisibility(false);
    } else {
      setMenuVisibility(true);
    }
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="container mx-auto px-6 py-10 flex items-center justify-between md:p-8">
        <div className="md:mr-10">
          <img src={blogrLogo} alt="Blogr Logo" />
        </div>
        <div
          className={`bg-white absolute top-24 left-1/2 -translate-x-1/2 w-[80%] flex flex-col items-center p-5 rounded-md shadow-lg ease-linear duration-150 ${
            menuVisibility ? "" : "invisible opacity-0"
          } md:bg-transparent md:static md:top-0 md:left-0 md:translate-x-0 md:w-auto md:flex-row md:grow md:justify-between md:shadow-none`}
        >
          <div className="w-full md:flex md:flex-row">{ddatArr}</div>
          <LoginSignUp />
        </div>
        <div className="md:hidden">
          <Burger toggle={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
