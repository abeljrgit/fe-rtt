import arrDownLight from "../../img/icon-arrow-light.svg";
import arrDownDark from "../../img/icon-arrow-dark.svg";
import { useEffect, useState } from "react";

const DropdownAccordionItem = (props: any) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setIsOpenAccordion((isOpenAccordion) => !isOpenAccordion);
  };

  useEffect(() => {
    window
      .matchMedia("(min-width:768px)")
      .addEventListener("change", (e) => setIsOpenAccordion(false));
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setIsOpenAccordion(false));
  }, []);

  return (
    <div className="flex flex-col items-center md:relative md:mr-10">
      <div
        className="flex items-center mb-4 cursor-pointer md:mb-0 md:hover:underline decoration-white"
        onClick={toggleAccordion}
      >
        <span
          className={`mr-2 font-overpass font-bold md:text-white ${
            isOpenAccordion ? "text-VeryDarkGrayishBlue " : ""
          }`}
        >
          {props.d.head}
        </span>
        <div
          className={`w-3 ease-linear duration-150 ${
            isOpenAccordion ? "" : "rotate-180"
          }`}
        >
          <img
            src={arrDownLight}
            alt="Arrow Down"
            className="w-full hidden md:block"
          />
          <img
            src={arrDownDark}
            alt="Arrow Down"
            className="w-full block md:hidden"
          />
        </div>
      </div>
      <div
        className={`flex flex-col items-center bg-GrayishBlue/50 w-full overflow-hidden mb-4 rounded-md ease-linear duration-150 md:mb-0 md:absolute md:top-8 md:left-1/2 md:-translate-x-1/2 md:items-start md:px-6 md:w-auto md:bg-white ${
          isOpenAccordion ? "pb-4 pt-5 max-h-[500px]" : "pb-0 pt-0 max-h-0 "
        } `}
      >
        {props.d.links.map((link: any, i: number) => {
          return (
            <a
              href="#"
              className="font-overpass font-bold text-VeryDarkGrayishBlue mb-2 md:font-medium md:hover:font-bold md:hover:text-VeryDarkBlackBlue "
              key={i}
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownAccordionItem;
