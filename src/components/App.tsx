import { Fragment } from "react";
import DesignForTheFuture from "./DesignForTheFuture/DesignForTheFuture";
import Footer from "./Footer/Footer";
import FreeOpenSimple from "./FreeOpenSimple/FreeOpenSimple";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import StateOfTheArtInfra from "./StateOfTheArtInfra/StateOfTheArtInfra";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <DesignForTheFuture />
      <StateOfTheArtInfra />
      <FreeOpenSimple />
      <Footer />
    </Fragment>
  );
}

export default App;
