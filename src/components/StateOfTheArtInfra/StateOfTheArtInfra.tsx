import illustrationPhone from "../../img/illustration-phones.svg";

const StateOfTheArtInfra = () => {
  return (
    <section className="bg-gradAndCircle bg-no-repeat bg-contain bg-circleSp rounded-bl-sectionCurve rounded-tr-sectionCurve relative md:bg-contain md:bg-circleSizePc md:bg-circlePc">
      <div className="container mx-auto flex flex-col items-center px-6 pt-48 xs:pt-64 md:max-h-96 md:xs:pt-8 md:pb-8 md:flex-row md:justify-center">
        <div className="md:mr-24 lg:mr-64 md:min-w-[300px] md:max-h-[300px] md:min-h-[300px] md:relative">
          <img
            src={illustrationPhone}
            alt="Phone Illustration"
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 md:top-1/2  md:-translate-y-1/2 md:-translate-x-1/2 md:scale-150"
          />
        </div>
        <div className="flex flex-col mb-16 md:mb-0 md:items-start md:max-w-sm lg:max-w-lg xl:max-w-xl">
          <h2 className="font-overpass font-bold text-white text-2xl text-center leading-snug mb-6 md:text-left lg:text-4xl">
            State of the Art Infrastructure
          </h2>
          <p className="font-ubuntu text-sm text-white text-center leading-8 md:text-left lg:text-lg">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StateOfTheArtInfra;
