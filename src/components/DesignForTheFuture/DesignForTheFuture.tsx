import editorIllustration from "../../img/illustration-editor-mobile.svg";

const DesignForTheFuture = () => {
  return (
    <section className="mb-48 md:mb-0 md:bg-editorIlluBg md:bg-no-repeat md:bg-editorPc md:bg-40% lg:bg-right">
      <div className="container mx-auto p-16 px-6 flex flex-col items-center md:items-start lg:py-40">
        <h2 className="font-overpass font-bold text-2xl text-VeryDarkBlue text-center mb-8 md:self-center md:mb-16 lg:text-4xl">
          Designed for the future
        </h2>
        <img
          src={editorIllustration}
          alt="Editor Illustration"
          className="block mb-8 md:hidden"
        />
        <div className=" md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="mb-8 md:mb-16">
            <h3 className="font-overpass font-bold text-lg text-VeryDarkBlue text-center mb-3 md:text-left lg:text-2xl">
              Introducing an extensible editor
            </h3>
            <p className="font-overpass text-sm text-VeryDarkGrayishBlue text-center md:text-left md:leading-7 lg:text-lg">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="mb-8 md:mb-16">
            <h3 className="font-overpass font-bold text-lg text-VeryDarkBlue text-center mb-3 md:text-left lg:text-2xl">
              Robust content management
            </h3>
            <p className="font-overpass text-sm text-VeryDarkGrayishBlue text-center md:text-left md:leading-7 lg:text-lg">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignForTheFuture;
