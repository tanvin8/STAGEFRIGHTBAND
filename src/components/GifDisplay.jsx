import React from 'react';
import { Link } from "react-router-dom";

function GifDisplay() {
    return (
        <div>
            
            <div className="w-full h-[800px] flex items-start justify-center relative overflow-hidden bg-black">
                <video
                    src="/STAGEFRIGHTBAND/bandwebvid.mp4" 
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                 <div className="relative text-center z-10 ">
                    <h1 className="text-white text-9xl font-medium mt-[30vh] font-metal"
                        style={{ textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000" }}>Welcome to Stage Fright</h1>
                    <h2 className="text-white text-3xl font-semibold mt-[2vh] font-fancy"
                        style={{ textShadow: "0 0 10px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>Experience the band like never before</h2>
                        <Link to ="/about">
                        <button className=" font-fancy text-white text-m font-bold mt-[5vh] border-2 border-white px-4 py-2 rounded-full transition duration-200 transform hover:-translate-y-2"
                        style={{ textShadow: "0 0 10px #fff" }}>About the Frights</button></Link>
                    
                </div>
            </div>
            
            
            <div className="bg-pageBlack h-[190px] flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-32">
                <div>
                    <h1 className=" mt-[80px] font-metal text-5xl sm:text-4xl md:text-5xl text-white font-semibold mt-[40px] text-center" 
                    style={{ textShadow: "0 0 10px #ff00bc, 0 0 30px #ff00bc, 0 0 40px #ff0000" }}>These Whispers: Out Now</h1>
                    <h2 className="font-fancy text-xl sm:text-2xl md:text-3xl text-white font-semibold mt-[25px] text-center"
                    >Shop Merch</h2>
                </div>
            </div>
        </div>
    );
}

export default GifDisplay;
