import img1 from "../img/image1.jpg";
import img2 from "../img/image2.jpg";
import img3 from "../img/image3.jpg";
import img4 from "../img/image4.jpg";
import img5 from "../img/image5.jpg";
import img6 from "../img/image6.jpg";
import ImageCard from "./ImageCard";

function App() {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        <div className="bg-white p-6 m-3 space-y-10 shadow 2xl rounded-3xl md:p-40">
          <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
            <div className="group">
              <a href="#">Vector</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Illustrations</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Images</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Icons</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            <div className="flex justify-between border-b">
              <input type="text" placeholder="Search" className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 text-gray-300 duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
            <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ImageCard img={img1} />
            <ImageCard img={img2} />
            <ImageCard img={img3} />
            <ImageCard img={img4} />
            <ImageCard img={img5} />
            <ImageCard img={img6} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
