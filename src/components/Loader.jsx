import About from "./About";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import OurSpaces from "./OurSpaces";

const Loader = () => {
  return (
    <div className="relative h-[300vh]">
      <Navbar path={"/fr"} />
      <Hero />
      <Intro />
      <div className="h-[2px] w-14 bg-casa_scarlet mx-auto"></div>
      <About />
      <OurSpaces />

      {/*<div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
};

export default Loader;
