import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="/agafay-takerkoust/mykonos-style-architecture-marrakech-lake.webp"
          alt="Stunning golden hour landscape in the Agafay desert with agafay vibes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover object-bottom`}
        />
      </div>
      <div className="w-full h-full block lg:hidden">
        <Image
          src="/agafay-takerkoust/adrenaline-buggy-tour-marrakech-agafay-desert.webp"
          alt="Stunning golden hour landscape in the Agafay desert with snow-capped peaks"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-black/70 to-transparent"></div>

      {/* 
      
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
