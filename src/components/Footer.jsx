import React from "react";

const Footer = () => {
  return (
    <div className="bg-pageBlack">
      <div className="flex justify-between gap-2 p-6">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 sm:w-[100px]  flex justify-center md:justify-start">
        
          <img
            className="w-[200px] md:w-[300px] mt-4 md:mt-[50px] mb-4 md:mb-[50px]"
            src="/STAGEFRIGHTBAND/bpatheme.png"
            alt="bpaLogo"
          />
        </div>

        {/* Member Names Section */}
        <div className="w-full md:w-1/4 text-white text-center md:text-left mt-4 mb-4">
          <h1 className="text-lg font-semibold">Member Names</h1>
          <h2 className="text-sm font-medium">Smruthi G - Visual Design Manager</h2>
          <h2 className="text-sm font-medium">Tanvi N - Website Developer</h2>
        </div>

        {/* Member IDs Section */}
        <div className="w-full md:w-1/4 text-white text-center md:text-left mt-4 mb-4">
          <h1 className="text-lg font-semibold">Member IDs</h1>
          <h2 className="text-sm font-medium">00134904</h2>
          <h2 className="text-sm font-medium">00134922</h2>
        </div>

        {/* Chapter Info Section */}
        <div className="w-full md:w-1/4 text-white text-center md:text-left mt-4 mb-4">
          <h1 className="text-m font-medium">CTEC BPA Chapter</h1>
          <h2 className="text-m font-medium">Website Theme: Stage Fright Local Band</h2>
          <h2 className="text-m font-medium">BPA Theme - Capture the Moment!</h2>
          <h2 className="text-m font-medium">School: Centennial High School</h2>
          <h2 className="text-m font-medium">City: Frisco</h2>
          <h2 className="text-m font-medium">State: Texas</h2>
          <h2 className="text-m font-medium">Year: 2024-2025</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
