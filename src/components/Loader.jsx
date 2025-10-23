import Hero from "./Hero";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="relative h-[120vh]">
      <Navbar path={"/fr"} />
      <Hero />

      {/*<div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
};

export default Loader;
