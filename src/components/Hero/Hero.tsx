const Hero = () => {
  return (
    <section className="bg-gradAndImg bg-no-repeat bg-leanSp min-h-screen rounded-bl-sectionCurve flex items-center justify-center px-6 md:bg-leanPc md:bg-150% md:min-h-[80vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-ubuntu text-4xl text-white text-center mb-5 xl:text-6xl">
          A modern publishing platform
        </h1>
        <p className="font-ubuntu text-lg text-white text-center mb-8 xl:text-md">
          Grow your audience and build your online brand
        </p>
        <div className="flex flex-row items-center justify-center flex-wrap max-w-[270px] w-full">
          <button className="font-ubuntu bg-white text-lightRed text-center font-bold rounded-full w-32 py-2 mr-2 ease-linear duration-150 md:hover:bg-VeryLightRed md:hover:text-white">
            Start for Free
          </button>
          <button className="font-ubuntu bg-transparent border text-white text-center font-bold rounded-full w-32 py-2 ease-linear duration-150 md:hover:bg-white md:hover:text-lightRed">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
