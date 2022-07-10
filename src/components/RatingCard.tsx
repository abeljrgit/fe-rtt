import { Fragment, useState } from "react";
import Result from "./Result";
import Survey from "./Survey";

const RatingCard = () => {
  const [current, setCurrent] = useState("survey");
  const [cv, setCv] = useState("1");

  const proceedHandler = (choiceVal: any) => {
    setCurrent("result");
    setCv(choiceVal);
  };

  return (
    <Fragment>
      {current === "survey" && <Survey proceed={proceedHandler} />}
      {current === "result" && <Result cv={cv} />}
    </Fragment>
  );
};

export default RatingCard;
