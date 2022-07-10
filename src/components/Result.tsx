import thankYouIllustration from "../img/illustration-thank-you.svg";

const Result = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={thankYouIllustration} alt="Thank you illustration" className="block w-[160px] mt-2 mb-8" />
      <span className="text-o1 text-xs bg-n4 mb-6 pt-1.5 pb-1 px-4 rounded-full">You selected {props.cv} out of 5</span>
      <h2 className="text-n1 text-xl mb-3">Thank you!</h2>
      <p className="text-n2 text-sm text-center">We appreciate you taking the time to give a rating if you ever need more support don't hesitate to get in touch!</p>
    </div>
  );
};
export default Result;
