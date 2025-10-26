import About from "./About";
import AboutTwo from "./AboutTwo";
import Activities from "./Activities";
import Events from "./Events";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import OurSpaces from "./OurSpaces";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr"} />
      <Hero />
      <Intro />
      <div className="h-[2px] w-14 bg-casa_scarlet mx-auto"></div>
      <About />
      <OurSpaces />
      <AboutTwo />
      <div className="px-5 lg:px-0">
        <Events />
      </div>
      <div className="px-5 lg:px-0 mt-10">
        <Activities />
      </div>
      {/*<div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
};

export default Loader;
