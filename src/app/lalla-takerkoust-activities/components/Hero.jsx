import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="/images/casalalla-takerkoust-agafay-large-2.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      <div className="w-full h-full block lg:hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498605_1280.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 hidden lg:block"></div>

      <div className="absolute inset-0 w-full flex justify-center text-center items-center font-canela text-white text-[38px] leading-[40px] lg:text-[40px] lg:leading-[60px] px-2 lg:px-0">
        <h1>Casa Lalla producing unique member experiences</h1>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#activities">
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
