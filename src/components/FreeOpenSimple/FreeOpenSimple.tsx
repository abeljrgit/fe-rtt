import laptopIllustration from "../../img/illustration-laptop-mobile.svg";

const FreeOpenSimple = () => {
  return (
    <section className="md:bg-laptopIlluBg md:bg-no-repeat md:bg-laptopPc md:bg-40% lg:bg-left">
      <div className="container mx-auto p-16 px-6 flex flex-col items-center md:items-end lg:py-40">
        <img
          src={laptopIllustration}
          alt="Editor Illustration"
          className="block mb-8 md:hidden"
        />
        <div className="md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="mb-8 md:mb-16">
            <h3 className="font-overpass font-bold text-lg text-VeryDarkBlue text-center mb-3 md:text-left lg:text-2xl">
              Free, open, simple
            </h3>
            <p className="font-overpass text-sm text-VeryDarkGrayishBlue text-center md:text-left md:leading-7 lg:text-lg">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="mb-8 md:mb-16">
            <h3 className="font-overpass font-bold text-lg text-VeryDarkBlue text-center mb-3 md:text-left lg:text-2xl">
              Powerful tooling
            </h3>
            <p className="font-overpass text-sm text-VeryDarkGrayishBlue text-center md:text-left md:leading-7 lg:text-lg">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOpenSimple;
