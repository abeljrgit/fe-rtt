import RatingCard from "./RatingCard";
import SurveyForm from "./Survey";

function App() {
  return (
    <section className="min-h-screen bg-n5 flex items-center justify-center">
      <div className="bg-radGrad1 p-6 font-overpass max-w-[350px] rounded-3xl">
        <RatingCard />
        {/* <SurveyForm /> */}
      </div>
    </section>
  );
}

export default App;
