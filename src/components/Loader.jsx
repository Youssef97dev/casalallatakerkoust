import About from "./About";
import AboutTwo from "./AboutTwo";
import Activities from "./Activities";
import Events from "./Events";
import Hero from "./Hero";
import InstagramSection from "./InstagramSection";
import Intro from "./Intro";
import Navbar from "./Navbar";
import OurSpaces from "./OurSpaces";
import SpotifySection from "./SpotifySection";

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
      <div className="px-5 lg:px-0 mt-0 lg:mt-20">
        <Events />
      </div>
      <div className="px-5 lg:px-0 mt-10 lg:mt-32">
        <Activities />
      </div>
      <InstagramSection />
      <div className="h-[1px] w-[70%] bg-casa_scarlet mx-auto mt-20"></div>
      <SpotifySection />
      {/*<div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
};

export default Loader;
