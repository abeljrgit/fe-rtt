import { useState } from "react";
import starIcon from "../img/icon-star.svg";

const Survey = (props: any) => {
  const [choice, setChoice] = useState();

  const getChoiceValue = (e: any) => {
    setChoice(e.currentTarget.innerText);
  };

  const sendChoiceValue = () => {
    props.proceed(choice);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="bg-n4 w-12 h-12 flex items-center justify-center rounded-full mb-6">
        <img src={starIcon} alt="Star Icon" />
      </div>
      <h1 className="text-n1 text-xl mb-3">How did we do?</h1>
      <p className="text-n2 text-sm mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="flex w-full justify-between mb-6">
        <div
          className={`${
            choice === "1" ? "bg-n3 text-n1" : "bg-n4 text-n2"
          } w-12 h-12 flex items-center justify-center rounded-full pt-0.5 cursor-pointer hover:bg-o1 hover:text-n1 transition ease-linear duration-150`}
          onClick={getChoiceValue}
        >
          1
        </div>
        <div
          className={`${
            choice === "2" ? "bg-n3 text-n1" : "bg-n4 text-n2"
          } w-12 h-12 flex items-center justify-center rounded-full pt-0.5 cursor-pointer hover:bg-o1 hover:text-n1 transition ease-linear duration-150`}
          onClick={getChoiceValue}
        >
          2
        </div>
        <div
          className={`${
            choice === "3" ? "bg-n3 text-n1" : "bg-n4 text-n2"
          } w-12 h-12 flex items-center justify-center rounded-full pt-0.5 cursor-pointer hover:bg-o1 hover:text-n1 transition ease-linear duration-150`}
          onClick={getChoiceValue}
        >
          3
        </div>
        <div
          className={`${
            choice === "4" ? "bg-n3 text-n1" : "bg-n4 text-n2"
          } w-12 h-12 flex items-center justify-center rounded-full pt-0.5 cursor-pointer hover:bg-o1 hover:text-n1 transition ease-linear duration-150`}
          onClick={getChoiceValue}
        >
          4
        </div>
        <div
          className={`${
            choice === "5" ? "bg-n3 text-n1" : "bg-n4 text-n2"
          } w-12 h-12 flex items-center justify-center rounded-full pt-0.5 cursor-pointer hover:bg-o1 hover:text-n1 transition ease-linear duration-150`}
          onClick={getChoiceValue}
        >
          5
        </div>
      </div>
      <button className="bg-o1 text-n1 font-bold tracking-[0.1em] w-full pt-2.5 pb-2 rounded-full hover:bg-n1 hover:text-o1 transition ease-linear duration-150" onClick={sendChoiceValue}>
        SUBMIT
      </button>
    </div>
  );
};

export default Survey;
