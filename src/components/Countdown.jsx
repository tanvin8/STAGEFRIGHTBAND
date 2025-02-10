import React from "react";
import { Link } from "react-router-dom";

const Countdown = () => {
  const images = [
    "/STAGEFRIGHTBAND/foxes.png",
    "/STAGEFRIGHTBAND/classicRock.png",
    "/STAGEFRIGHTBAND/prog.png",
    "/STAGEFRIGHTBAND/rollingStones.png",
  ];

  return (
    <div className="bg-pageBlack text-center">

      <div>
      <Link to="/merch">
        <button className = "font-quicksand text-white font-semibold text-[20px] mb-[120px]">View All →</button>
        </Link>
      </div>
      {/* tour dates*/}
      <div>
        <h1 className="font-metal text-3xl md:text-5xl text-white font-semibold" 
         style={{ textShadow: "0 0 10px #ff00bc, 0 0 30px #ff00bc, 0 0 40px #ff0000" }}>
          Upcoming Tour Dates
        </h1>
        
        <div className="flex flex-col mx-4 md:mx-20 lg:mx-40 mt-10">
          
          <button>
          <Link to = "/tours">
            <div className="font-bold font-fancy bg-navRed p-4 rounded-md mb-4 text-white">
              <div className="flex justify-between items-center text-sm md:text-base">
                <h1> April 9</h1>
                <h1 className="absolute left-1/2 transform -translate-x-1/2">
                  713 Music Hall
                </h1>
                <h1 className="text-right transform -translate-x-1/2">
                  View More
                </h1>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <h1>2025</h1>
                <h1 className="absolute left-1/2 transform -translate-x-1/2">
                  Houston, TX
                </h1>
              </div>
            </div>
            </Link>
          </button>
          
          <button>
          <Link to ="/tours">
            <div className=" font-fancy font-bold bg-navRed p-4 rounded-md mb-4 text-white">
              <div className="flex justify-between items-center text-sm md:text-base">
                <h1>April 30</h1>
                <h1 className="absolute left-1/2 transform -translate-x-1/2">
                  Ace of Spades
                </h1>
                <h1 className="text-right transform -translate-x-1/2">
                  View More
                </h1>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <h1>2025</h1>
                <h1 className="absolute left-1/2 transform -translate-x-1/2">
                  Sacramento, CA
                </h1>
              </div>
            </div>
            </Link>
          </button>
        
          <div className="flex justify-center">
          <Link to="/tours">
              <button className=" font-quicksand text-white text-base md:text-xl font-semibold mt-5 border-white py-3 max-w-[120px]">
                See All →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* app promo */}
      <div className="font-quicksand mt-10 bg-navRed p-4 md:p-8">
     <div className="flex justify-center items-center mx-4 md:mx-0">
    <div className="flex flex-col md:flex-row items-center">
      <img src="/STAGEFRIGHTBAND/mobile.png" alt="Mobile App layout of Stage Fright website" className="w-[400px] mr-4" />
      <div className="text-white text-center md:text-center">
        <h1 className="text-lg md:text-4xl font-semibold">
          THE STAGE FRIGHT WORLD TOUR APP
        </h1>
        <h1 className="text-lg md:text-3xl">
          AN ESSENTIAL COMPANION TO THE TOUR
        </h1>
        <h1 className="text-lg md:text-3xl">DOWNLOAD FOR FREE NOW</h1>
        <h2 className="text-sm md:text-2xl mt-2">
          Available on the Apple App Store and Google Play Store
        </h2>
        <div className="flex justify-center md:justify-center mt-5">
          <button>
            <img
              src="/STAGEFRIGHTBAND/applestore.png"
              alt="Apple Store Download Icon"
              className="w-40 md:w-60"
            />
          </button>
          <button>
            <img
              src="/STAGEFRIGHTBAND/googleplay.png"
              alt="Google Play Download Icon"
              className="w-40 md:w-60 ml-5"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* media mentions */}
      <div className="mt-10">
        <h1 className="font-metal text-white text-4xl md:text-6xl font-semibold"
        style={{ textShadow: "0 0 10px #ff00bc, 0 0 30px #ff00bc, 0 0 40px #ff0000" }}>
          As Seen On
        </h1>
        <div className="relative overflow-hidden bg-pageBlack h-40 mt-10 mx-4 md:mx-20 lg:mx-40">
          <div className="flex animate-scroll whitespace-nowrap">
            {images.concat(images).map((src, index) => (
              <div key={index} className="flex-shrink-0 h-[150px] mx-2">
                <img
                  src={src}
                  alt={`Scrolling image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-10 md:w-20 h-full bg-gradient-to-r from-pageBlack to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-10 md:w-20 h-full bg-gradient-to-l from-pageBlack to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

