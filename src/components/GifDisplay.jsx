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
                <div className="relative text-center z-10">
                    <h1 className="text-white text-6xl font-bold mt-[30vh]"
                        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0)" }}>Welcome to Stage Fright</h1>
                    <h2 className="text-white text-4xl font-bold mt-[2vh]"
                        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0)" }}>Experience the band like never before</h2>
                        <Link to ="/about">
                        <button className="text-white text-xl font-bold mt-[5vh] border-2 border-white px-4 py-2 rounded-full transition duration-200 transform hover:-translate-y-2"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0)" }}>About the Frights</button></Link>
                    
                </div>
            </div>
            
            
            <div className="bg-pageBlack h-[180px] flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-32">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold mt-[40px] text-center">These Whispers: Out Now</h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mt-[25px] text-center">Shop Merch</h2>
                </div>
            </div>
        </div>
    );
}

export default GifDisplay;
