import About from "./About";
import AboutTwo from "./AboutTwo";
import Activities from "./Activities";
import Events from "./Events";
import Footer from "./Footer";
import Hero from "@/components/Hero";
import InstagramSection from "./InstagramSection";
import Intro from "./Intro";
import Navbar from "./Navbar";
import OurSpaces from "./OurSpaces";
import SpotifySection from "@/components/SpotifySection";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/"} />
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
      <Footer />
      {/*<div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
};

export default Loader;
