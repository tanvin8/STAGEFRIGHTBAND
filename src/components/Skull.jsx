import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

// Model Component
const Model = () => {
  const { scene } = useGLTF("/skull.glb");
  const modelRef = useRef();

  const onMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;

    if (modelRef.current) {
      modelRef.current.rotation.y = x * Math.PI * 0.2;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, 1, 0]} rotation={[.3, 0, 0]}/>;
};

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="flex whitespace-nowrap w-5 h-5 bg-black outline text-white rounded-full opacity-80">
        <h1 className="text-right text-sm ml-[30px]">Scroll to Continue</h1>
      </div>
    </div>
  );
};

// Main Skull Component
const Skull = () => {
    const navigate = useNavigate(); // React Router for navigation
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Zoom into the skull when scrolling
    if (scrollRef.current) {
      const newZ = Math.max(5 - scrollTop * 0.01, 0.5); // Limit zoom-in
      scrollRef.current.position.z = newZ;

      // Navigate to a new page when fully zoomed in
      if (newZ <= 0.6) {
        navigate("/cart"); // Replace with your desired route
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen bg-black text-white relative">
      {/* Custom Cursor */}
      <CustomCursor />
      

      {/* Text Overlay */}
      <div className="absolute top-[20%] left-[30%] z-10">
        <h1 className="text-6xl font-bold">Experience</h1>
        <p className = "text-4xl font-semibold">The Frights</p>
        <p className = "text-xl absolute top-[260%] left-[35%] whitespace-nowrap">Embark On A Journey With The Members Of Stage Fright</p>
        <Link to = "/timeline">
                        <button className="text-xl absolute top-[300%] left-[85%] whitespace-nowrap outline text-white  border border-white px-3 py-1 rounded-full "
                        >About the Frights</button></Link>
      </div>

      {/* Canvas for 3D Scene */}
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 7, 10]} intensity={20} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Skull;