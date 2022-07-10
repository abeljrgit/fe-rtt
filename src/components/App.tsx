import productImagePc from "../img/image-product-desktop.jpg";
import productImageSp from "../img/image-product-mobile.jpg";
import CartIcon from "./Svg/CartIcon";

function App() {
  return (
    <section className="bg-p2 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-auto font-monserrat rounded-2xl overflow-hidden">
        <img src={productImageSp} alt="Product" className="w-full max-w-sm block md:hidden" />
        <img src={productImagePc} alt="Product" className="w-80 max-w-sm hidden md:block" />
        <div className="flex flex-col max-w-sm md:max-w-[300px] p-8 bg-white">
          <span className="mb-2 text-n2 tracking-[0.3em]">PERFUME</span>
          <h1 className="font-fraunces text-3xl mb-4">Gabrielle Essence Eau De Parfum</h1>
          <p className="mb-10 text-n2 text-sm leading-6">A floral,solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
          <div className="flex items-center mb-4">
            <span className="font-fraunces text-p1 text-3xl">$149.99</span>
            <span className="ml-6 line-through text-n2">$169.99</span>
          </div>
          <button className="group flex items-center justify-center bg-p1 py-2.5 w-full mt-auto rounded-lg hover:bg-n1 transition duration-150 ease-linear">
            <CartIcon />
            <span className="text-n3 ml-4 pt-0.5">Add to Cart</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
