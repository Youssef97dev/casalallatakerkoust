import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761828559/casalalla-takerkoust-agafay-large-4_oqjzb9.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      <div className="w-full h-full block lg:hidden">
        <Image
          src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761829176/casalalla-takerkoust-agafay-vibes-small-5_yssnlf.webp"
          alt="casa lalla takerkoust, agafay vibes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="absolute inset-0 w-full flex justify-center text-center items-center font-canela text-white text-[38px] leading-[40px] lg:text-[40px] lg:leading-[60px] px-2 lg:px-0">
        <h1>
          A refined culinary experience by the tranquil waters of Lalla
          Takerkoust
        </h1>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#our-philosophy">
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
