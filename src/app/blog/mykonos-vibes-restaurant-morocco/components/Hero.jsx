import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="/agafay-takerkoust/destination-wedding-marrakech-lake-takerkoust.webp"
          alt="Cozy, luxurious guest room interior featuring traditional Moroccan decor at Casa Lalla Takerkoust."
          width={1500}
          height={1500}
          className={`w-full h-full object-cover object-bottom`}
        />
      </div>
      <div className="w-full h-full block lg:hidden">
        <Image
          src="/agafay-takerkoust/casa-lalla-takerkoust-lake-view-terrace.webp"
          alt="Stunning sunset reflecting over the peaceful waters of Lalla Takerkoust Lake in Morocco."
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-black/70 to-transparent"></div>

      {/*
      <div className="absolute inset-0 w-full flex justify-center text-center items-center font-canela text-white text-[38px] leading-[40px] lg:text-[40px] lg:leading-[60px] px-2 lg:px-0">
        <h1>Casa Lalla producing unique member experiences</h1>
      </div>
      */}

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
