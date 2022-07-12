import { useEffect, useState } from "react";

const Burger = (props: any) => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger((burger) => !burger);
    props.toggle(!burger);
  };

  useEffect(() => {
    window
      .matchMedia("(min-width:768px)")
      .addEventListener("change", (e) => setBurger(false));
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-between w-[25px] h-[25px]"
      onClick={toggleBurger}
    >
      <div
        className={`w-[33px] h-0.5 bg-white origin-top-right ease-linear duration-150 ${
          burger ? "-rotate-45 -translate-x-[6px]" : ""
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`w-[33px] h-0.5 bg-white ease-linear duration-150 ${
          burger ? "translate-y-4 opacity-0 invisible" : ""
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`w-[33px] h-0.5 bg-white origin-bottom-right ease-linear duration-150 ${
          burger ? "rotate-45 -translate-x-[6px]" : ""
        }`}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default Burger;
